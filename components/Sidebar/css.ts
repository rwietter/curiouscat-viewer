import { styled } from "@/stitches.config";

export const Sidebar = styled('section', {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '3.3rem',
  height: '100vh',
  padding: '1rem 0.3rem',
  background: '#FFFFFF',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const FetchPosts = styled('button', {
  all: 'unset',
  cursor: 'pointer',
});