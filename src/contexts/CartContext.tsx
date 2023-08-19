import { parseCookies, setCookie } from "nookies";
import { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

interface CartProviderProps {
  children: ReactNode
}

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: number
  quantity: number
  defaultPriceId: string
}

interface CartContextProps {
  cart: ProductProps[]
  addToCart: (product: ProductProps) => void
  removeFromCart: (product: ProductProps) => void
  clearCart: () => void
}

const CART_STORAGE_KEY = 'IgniteShop:cart'

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductProps[]>([])

  useEffect(() => {
    const storedCart = parseCookies()[CART_STORAGE_KEY];

    if (storedCart) {
      setCart(JSON.parse(storedCart));
      // console.log(JSON.parse(storedCart))

    }
  }, []);

  useEffect(() => {
    setCookie(null, CART_STORAGE_KEY, JSON.stringify(cart), {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
    // console.log('Salvou o cookie:', JSON.stringify(cart))
  }, [cart]);


  function addToCart(product: ProductProps) {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item => {
        if (item.id === existingProduct.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
      // toast.success('Produto adicionado ao carrinho')
    } else {
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(product: ProductProps) {
    const updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        const quantityUpdated = (item.quantity - 1);
        return { ...item, quantity: quantityUpdated };
      }
      return item;
    }).filter(item => item.quantity) // Filtra os itens com quantidade maior que zero
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}