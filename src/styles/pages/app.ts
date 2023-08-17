import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})

export const Button = styled('button', {
  padding: 12,
  borderRadius: 8,
  border: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  position: 'relative',

  background: '$gray800',
  '&:hover': {
    filter: 'brightness(0.9)'
  },

  span: {
    position: 'absolute',
    width: '1.8rem',
    height: '1.8rem',
    borderRadius: '50%',
    background: '$green500',
    color: '$white',
    top: 'calc(-1.6rem / 2)',
    right: 'calc(-1.6rem / 2)',
    border: '3px solid black',
    fontSize: '$sm',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})