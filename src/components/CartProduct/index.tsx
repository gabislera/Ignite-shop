import { useCart } from "../../hooks/useCart";
import { priceFormat } from "../../utils/priceFormat";
import { DetailsSection, ImageBackground, ProductsCartContainer } from "./styles";
import Image from 'next/image'

export function CartProduct({ product }) {
  const { removeFromCart } = useCart()

  function handleRemoveFromCart() {
    removeFromCart(product)
  }

  const formattedPrice = priceFormat(product.price)

  return (
    <ProductsCartContainer>
      <ImageBackground>
        {product.quantity > 0 && <span>{product.quantity}</span>}
        <Image src={product.imageUrl} width={60} height={56} alt='' />
      </ImageBackground>
      <DetailsSection>
        <span>{product.name}</span>
        <strong>{formattedPrice}</strong>
        <button onClick={handleRemoveFromCart}>Remover</button>
      </DetailsSection>
    </ProductsCartContainer>
  )
}