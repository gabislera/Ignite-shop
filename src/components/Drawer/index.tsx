import { useCart } from "../../hooks/useCart";
import { CartProduct } from "../CartProduct";
import { CloseDrawerButton, ConfirmButton, DrawerContainer, DrawerContent, Overlay, ProductsCartSection, QuantityItem, SummarySection, TotalValue } from "./styles";
import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { priceFormat } from '../../utils/priceFormat'
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

export const Drawer = () => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cart, clearCart } = useCart()

  const cartSummary = cart.reduce((acc, item) => {
    return {
      productsAmount: acc.productsAmount + item.quantity,
      totalPrice: acc.totalPrice + (item.price * item.quantity)
    };
  }, { productsAmount: 0, totalPrice: 0 })

  const formattedTotalItemsPrice = priceFormat(cartSummary.totalPrice)

  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        cart,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
      clearCart()
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      toast.error('Falha ao redirecionar ao checkout!')
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
              <strong>{cartSummary.productsAmount} itens</strong>
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

