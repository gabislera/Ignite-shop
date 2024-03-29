import { HomeContainer } from '../styles/pages/home'
import Head from 'next/head'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Stripe from 'stripe'
import { stripe } from "../lib/stripe"
import { GetStaticProps } from 'next'
import { ProductSlide } from '../components/ProductSlide'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map(product => <ProductSlide key={product.id} product={product} />)}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    // console.log(price.id)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      // price: new Intl.NumberFormat('pt-BR', {
      //   style: 'currency',
      //   currency: 'BRL',
      // }).format(price.unit_amount / 100),
      price: price.unit_amount / 100,
      defaultPriceId: price.id
    }
  })


  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, //2 hours
  }
} 