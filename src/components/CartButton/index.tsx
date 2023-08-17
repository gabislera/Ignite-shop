import { Handbag } from "@phosphor-icons/react";
import { Button } from "./styles";
import { useCart } from "../../hooks/useCart";
import { Drawer } from "../Drawer";
import * as Dialog from '@radix-ui/react-dialog'

export function CartButton() {
  const { cart } = useCart()

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>
          {cart.length > 0 && <span>{cart.length}</span>}
          <Handbag size={24} color="white" />
        </Button>
      </Dialog.Trigger>

      <Drawer />
    </Dialog.Root>
  )
}