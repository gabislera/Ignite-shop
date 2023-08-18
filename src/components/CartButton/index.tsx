import { Handbag } from "@phosphor-icons/react";
import { Button } from "./styles";
import { useCart } from "../../hooks/useCart";
import { Drawer } from "../Drawer";
import * as Dialog from '@radix-ui/react-dialog'

export function CartButton() {
  const { cart } = useCart()

  const productsAmount = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>
          {productsAmount > 0 && <span>{productsAmount}</span>}
          <Handbag size={24} color="white" />
        </Button>
      </Dialog.Trigger>

      <Drawer />
    </Dialog.Root>
  )
}