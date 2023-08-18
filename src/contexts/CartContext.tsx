import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";

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
  // isCreatingCheckoutSession: boolean
  addToCart: (product: ProductProps) => void
  removeFromCart: (product: ProductProps) => void
  // checkoutSession: () => void
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductProps[]>([])

  // function addToCart(product: ProductProps) {
  //   const existingProductIndex = cart.findIndex(item => item.id === product.id)

  //   if (existingProductIndex < 0) {
  //     setCart(prev => [...prev, product])
  //   } else {
  //     const updatedCart = cart.map((item, index) => {
  //       if (index === existingProductIndex) {
  //         return { ...item, quantity: item.quantity + 1 }
  //       }
  //       return item
  //     })
  //     setCart(updatedCart)
  //   }
  // }

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
    } else {
      setCart(prev => [...prev, { ...product, quantity: 1 }]);
    }
  }



  // async function checkoutSession() {
  //   try {
  //     setIsCreatingCheckoutSession(true)

  //     const priceIds = cart.map(item => item.defaultPriceId)
  //     console.log(priceIds)

  //     const response = await axios.post('/api/checkout', {
  //       priceIds: priceIds, // Envia os IDs dos preços dos produtos
  //     });

  //     // const { checkoutUrl } = response.data;

  //     // window.location.href = checkoutUrl;
  //   } catch (err) {
  //     setIsCreatingCheckoutSession(false)

  //     alert('Falha ao redirecionar ao checkout!')
  //   }
  // }

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

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}