import { styled } from "@stitches/react";

export const ProductsCartContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 20,
  color: '$gray100',

  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "flex-start",
  },

  strong: {
    marginTop: 4,
  },

  a: {
    color: '$green500',
    textDecoration: 'none',
    marginTop: 8
  },

  '&:hover': {
    a: {
      color: '$green300',
    }
  }
})

export const ImageBackground = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  height: '6rem',
  width: '6rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },
})



