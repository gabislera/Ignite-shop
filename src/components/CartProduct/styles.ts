import { styled } from "@stitches/react";

export const ProductsCartContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 20,
  color: '$gray100',
})

export const DetailsSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: "flex-start",
  margin: 'auto 0',

  strong: {
    marginTop: 4,
  },

  button: {
    background: 'none',
    border: 0,
    color: '$green500',
    textDecoration: 'none',
    marginTop: 8,
    cursor: 'pointer',
  },

  '&:hover': {
    button: {
      color: '$green300',
    }
  }
})

export const ImageBackground = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  height: '6rem',
  width: '6rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover'
  },
})



