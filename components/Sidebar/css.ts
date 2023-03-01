import { styled } from '@/stitches.config';

export const Sidebar = styled('section', {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '3.3rem',
  padding: '1rem 2rem',
  background: '$background',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@bp2': {
    width: '3rem',
    padding: '1.3rem',
    height: '100vh',
    flexDirection: 'column',
    top: 0,
    right: 0,
    background: '$gray50'
  }
});

export const FetchPosts = styled('button', {
  all: 'unset',
  cursor: 'pointer'
});
