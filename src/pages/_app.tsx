import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app"
import Image from "next/image"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <div>
          <Image src={logoImg} alt="" />
        </div>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

