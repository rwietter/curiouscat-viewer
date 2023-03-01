import { styled } from '@/stitches.config';
import Image from 'next/image';

export const Post = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  maxWidth: '800px',
  width: '100%',
  background: '$gray50',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
  borderRadius: '0.5rem',
  marginTop: '1.5rem',
  position: 'relative',
  border: '1px solid $divider',

  wordWrap: 'break-word',
  wordBreak: 'break-word',
  hyphens: 'auto',

  '@bp3': {
    padding: '2rem'
  }
});

export const PostHeader = styled('div', {
  display: 'flex',
  alignItems: 'center'
});

export const Divider = styled('div', {
  position: 'relative',

  '&::after': {
    content: '',
    left: '20px',
    bottom: '-15px',
    position: 'absolute',
    height: '100%',
    width: '2px',
    background: '$divider',
    alignSelf: 'stretch',

    '@bp3': {
      left: '23px'
    }
  }
});

export const PostCommentAvatar = styled(Image, {
  borderRadius: '50%',
  width: '40px',
  height: '40px',

  '@bp3': {
    width: '50px',
    height: '50px'
  }
});

export const PostCommentUserName = styled('span', {
  color: '$primaryB',
  paddingLeft: '1rem',
  fontWeight: '600',
  '--fluid-type-max': '1rem',

  '&:hover': {
    cursor: 'pointer',
    color: '#666'
  },

  '@bp3': {
    '--fluid-type-max': '1.2rem'
  }
});

export const PostBody = styled('div', {
  paddingLeft: '3.5rem',
  lineHeight: '1.5',
  '--fluid-type-max': '0.9rem',

  '@bp3': {
    lineHeight: '1.7',
    paddingLeft: '4rem',
    '--fluid-type-max': '1.2rem'
  }
});

export const PostComment = styled('span', {
  color: '$primaryB'
});

export const Metadata = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.8rem 0',
  borderBottom: '1px solid $divider',
  color: '#777',
  '--fluid-type-max': '0.9rem',

  a: {
    color: '#777',
    display: 'none',

    '&:hover': {
      color: '$primaryB',
      cursor: 'pointer'
    },

    '@bp3': {
      display: 'inline-block'
    }
  },

  '@bp3': {
    '--fluid-type-max': '1rem'
  }
});

export const PostReply = styled('div', {
  display: 'flex',
  paddingTop: '2rem'
});

export const PostReplyAvatar = styled(Image, {
  borderRadius: '50%',
  width: '40px',
  height: '40px',

  '@bp3': {
    width: '50px',
    height: '50px'
  }
});
