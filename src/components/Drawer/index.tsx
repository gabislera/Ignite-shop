import { CartProduct } from "../CartProduct";
import { CloseDrawerButton, ConfirmButton, DrawerContainer, DrawerContent, Overlay, ProductsCartSection, QuantityItem, SummarySection, TotalValue } from "./styles";
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

export const Drawer = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <DrawerContainer>
        <DrawerContent>
          <CloseDrawerButton>
            <X size={24} />
          </CloseDrawerButton>

          <h1>Sacola de compras</h1>

          <ProductsCartSection>
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
            <CartProduct />
          </ProductsCartSection>

          <SummarySection>
            <QuantityItem>
              <span>Quantidade</span>
              <strong>3 itens</strong>
            </QuantityItem>
            <TotalValue>
              <span>Valor total</span>
              <strong>R$ 270,00</strong>
            </TotalValue>
          </SummarySection>

          <ConfirmButton>Finalizar compra</ConfirmButton>
        </DrawerContent>
      </DrawerContainer>
    </Dialog.Portal>
  );
};

