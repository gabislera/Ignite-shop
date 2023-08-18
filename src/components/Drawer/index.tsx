import { useCart } from "../../hooks/useCart";
import { CartProduct } from "../CartProduct";
import { CloseDrawerButton, ConfirmButton, DrawerContainer, DrawerContent, Overlay, ProductsCartSection, QuantityItem, SummarySection, TotalValue } from "./styles";
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { priceFormat } from '../../utils/priceFormat'
import axios from "axios";
import { useState } from "react";

export const Drawer = () => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cart } = useCart()

  const productsAmount = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  const totalPrice = cart.reduce((acc, item) => {
    return acc + (item.price * item.quantity)
  }, 0)

  const formattedTotalItemsPrice = priceFormat(totalPrice)

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        cart,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

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
            {cart.map((product, index) => <CartProduct key={index} product={product} />)}
          </ProductsCartSection>

          <SummarySection>
            <QuantityItem>
              <span>Quantidade</span>
              <strong>{productsAmount} itens</strong>
            </QuantityItem>
            <TotalValue>
              <span>Valor total</span>
              <strong>{formattedTotalItemsPrice}</strong>
            </TotalValue>
          </SummarySection>

          <ConfirmButton disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>Finalizar compra</ConfirmButton>
        </DrawerContent>
      </DrawerContainer>
    </Dialog.Portal>
  );
};

