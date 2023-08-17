import { useCart } from "../../hooks/useCart";
import { DetailsSection, ImageBackground, ProductsCartContainer } from "./styles";
import Image from 'next/image'

export function CartProduct({ product }) {
  const { removeFromCart } = useCart()

  function handleRemoveFromCart() {
    removeFromCart(product)
  }

  return (
    <ProductsCartContainer>
      <ImageBackground>
        <Image src={product.imageUrl} width={60} height={56} alt='' />
      </ImageBackground>
      <DetailsSection>
        <span>{product.name}</span>
        <strong>{product.price}</strong>
        <button onClick={handleRemoveFromCart}>Remover</button>
      </DetailsSection>
    </ProductsCartContainer>
  )
}