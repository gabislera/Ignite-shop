import { Handbag } from "@phosphor-icons/react";
import Link from "next/link";
import Image from 'next/image'
import { Button, Product } from "./styles";
import { useCart } from "../../hooks/useCart";
import { priceFormat } from "../../utils/priceFormat";
import { toast } from "react-toastify";
import { TooltipDemo } from "../Tooltip";
import { Toast } from "../Toast";
interface ProductSlideProps {
  product: any
  defaultPriceId?: any
}

export function ProductSlide({ product }: ProductSlideProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    const productWithQty = {
      ...product,
      quantity: 1
    };
    addToCart(productWithQty);
    toast.success('Produto adicionado ao carrinho')
  }

  const formattedPrice = priceFormat(product.price)

  return (
    <Product className='keen-slider__slide'>
      <Link href={`/product/${product.id}`} prefetch={false}>
        <Image src={product.imageUrl} width={520} height={480} alt='' />
      </Link>

      <footer>
        <div>
          <strong>{product.name}</strong>
          <span>{formattedPrice}</span>
        </div>
        <Button onClick={handleAddToCart}>
          <Handbag size={32} color="white" />
        </Button>


        <TooltipDemo content='21 de Outubro - Indisponível'>
          <span>23</span>
          {/* <Toast content="Esse é um teste" title="Teste" /> */}
        </TooltipDemo>

      </footer>
    </Product>)
}
