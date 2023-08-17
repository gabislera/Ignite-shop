import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logoImg from '../assets/logo.svg'
import { Button, Container, Header } from "../styles/pages/app"
import Image from "next/image"
import Link from "next/link"
import * as Dialog from '@radix-ui/react-dialog'
import { Drawer } from "../components/Drawer"
import { Handbag } from "@phosphor-icons/react"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const cartQuantity = 4

  return (
    <Container>
      <Header>
        <div>
          <Link href={'/'}>
            <Image src={logoImg} alt="" />
          </Link>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button>
                {cartQuantity > 0 && <span>{cartQuantity}</span>}
                <Handbag size={24} color="white" />
              </Button>
            </Dialog.Trigger>

            <Drawer />
          </Dialog.Root>
        </div>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

