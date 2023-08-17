import { ImageBackground, ProductsCartContainer } from "./styles";

export function CartProduct() {
  return (
    <ProductsCartContainer>
      <ImageBackground>
        <img src="" alt="" />
      </ImageBackground>
      <div>
        <span>Camiseta Beyond the Limits</span>
        <strong>R$ 79,90</strong>
        <a href="">Remover</a>
      </div>
    </ProductsCartContainer>
  )
}