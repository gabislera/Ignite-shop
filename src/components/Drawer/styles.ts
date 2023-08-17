import { keyframes, styled } from '@stitches/react';
import * as Dialog from '@radix-ui/react-dialog'

const slideIn = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(0)' },
});

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.35)',
})

export const CloseDrawerButton = styled(Dialog.Close, {
  border: 0,
  background: 'transparent',
  position: 'absolute',
  top: 24,
  right: 24,
  cursor: 'pointer',

  svg: {
    color: '$gray300',
  }
})

export const DrawerContainer = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '30rem',
  height: '100%',
  backgroundColor: '$gray800',
  display: 'flex',
  padding: 48,

  '&[data-state=open]': {
    animation: `${slideIn} 100ms`
  },
})

export const DrawerContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  width: '100%',

  h1: {
    fontSize: '$lg',
    fontWeight: 700,
    width: '100%',
  },
})

export const ProductsCartSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  maxHeight: 285,
  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    width: '0.4em', // change to keen slider
  },

  gap: 24,
  marginTop: 31,
  width: '100%',
})

export const SummarySection = styled('div', {
  marginTop: 200,
  display: 'flex',
  gap: 7,
  flexDirection: 'column',
  width: '100%',
})

export const QuantityItem = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',


  span: {
    fontSize: '$sm'
  },

  strong: {
    fontSize: '$md'
  }
})

export const TotalValue = styled('div', {
  width: '100%',
  display: 'flex',
  color: '$gray100',
  justifyContent: 'space-between',

  span: {
    fontSize: '$md',
    fontWeight: 700,
  },

  strong: {
    fontSize: '$xl',
    fontWeight: 700,
  }
})

export const ConfirmButton = styled('button', {
  marginTop: 57,
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',
  width: '100%',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  }
})