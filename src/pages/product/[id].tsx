import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import Image from "next/image"
import Head from "next/head"
import { useCart } from "../../hooks/useCart"
import { priceFormat } from "../../utils/priceFormat"
import { toast } from "react-toastify"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
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
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formattedPrice}</span>

          <p>{product.description}</p>

          <button onClick={handleAddToCart}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_O1Kh0o82dvNo6j' } }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id


  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        // price: new Intl.NumberFormat('pt-BR', {
        //   style: 'currency',
        //   currency: 'BRL',
        // }).format(price.unit_amount / 100),
        price: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1, //1 hour
  }
}