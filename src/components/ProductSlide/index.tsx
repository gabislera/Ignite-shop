import { Handbag } from "@phosphor-icons/react";
import Link from "next/link";
import Image from 'next/image'
import { Button, Product } from "./styles";
import { useCart } from "../../hooks/useCart";

export function ProductSlide({ product }) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(product)
  }

  return (
    <Product className='keen-slider__slide'>
      <Link href={`/product/${product.id}`} prefetch={false}>
        <Image src={product.imageUrl} width={520} height={480} alt='' />
      </Link>

      <footer>
        <div>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </div>
        <Button onClick={handleAddToCart}>
          <Handbag size={32} color="white" />
        </Button>
      </footer>
    </Product>)
}