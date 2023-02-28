import { styled } from "stitches.config";

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'column',
  justifyContent: 'center',
  width: '100%',
  paddingTop: '2rem',
})

export const Label = styled('label', {
  display: 'flex',
  fontWeight: 700,
  fontSize: 'clamp(1.5rem, 4vw, 2.4rem)',
  color: '#000',
})

export const SearchContainer = styled('form', {
  position: 'relative',
  width: '100%',
  maxWidth: '500px',
});

export const Input = styled('input', {
  color: '#111',
  background: '#ffffff',
  outline: 'none',
  border: 'none',
  padding: '0.8rem 1rem',
  fontSize: '1.2rem',
  width: '100%',
  marginTop: '1rem',
  borderRadius: '0.2rem',
  boxShadow: '0 3px 10px 2px rgba(0,0,0,0.1)',

  '&:focus': {
    outline: '1px solid #111',
  },

  ':-webkit-autofill':{
    WebkitBoxShadow: '0 0 0 30px white inset',
    background: '#ffffff !important'
  }
});



export const Search = styled('button', {
  background: 'transparent',
  outline: 'none',
  border: 'none',
  position: 'absolute',
  bottom: '7px',
  right: '10px',
  cursor: 'pointer',
});