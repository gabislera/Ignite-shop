import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Button, Container, Header } from "../styles/pages/app"
import Image from "next/image"
import Link from "next/link"
import { CartProvider } from "../contexts/CartContext"
import { useCart } from "../hooks/useCart"
import { CartButton } from "../components/CartButton"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>

        <Header>
          <div>
            <Link href={'/'}>
              <Image src={logoImg} alt="" />
            </Link>
            <CartButton />
          </div>
        </Header>

        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}

