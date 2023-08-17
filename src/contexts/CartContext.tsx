import { ReactNode, createContext, useEffect, useState } from "react";

interface CartProviderProps {
  children: ReactNode
}

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface CartContextProps {
  cart: ProductProps[]
  addToCart: (product: ProductProps) => void
  removeFromCart: (product: ProductProps) => void
}


export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<ProductProps[]>([])

  function addToCart(product: ProductProps) {
    setCart(prev => [...prev, product])
  }

  function removeFromCart(product: ProductProps) {
    const updatedCart = cart.filter(({ id }) => id !== product.id)
    setCart(updatedCart)
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