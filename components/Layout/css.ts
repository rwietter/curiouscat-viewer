import { styled } from '@/stitches.config';

export const Layout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  width: '100%',
  maxWidth: '90rem',
  padding: '0 1rem',

  '@bp2': {
    paddingRight: '5rem'
  },
  '@bp5': {
    paddingRight: '1rem'
  }
});
