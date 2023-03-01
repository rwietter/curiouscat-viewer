import { styled } from '@stitches/react';
import Image from 'next/image';

export const Background = styled(Image, {
  background: '$primaryA',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1
});
