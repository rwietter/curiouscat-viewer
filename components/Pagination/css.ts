import { styled } from "@/stitches.config";

export const Pagination = styled("div", {
  position: "fixed",
  bottom: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: '$primaryA',
  color: '$primaryB',
  height: "4rem",
  marginBottom: "3rem",
  boxShadow: 'rgba(50, 50, 93, 0.2) 0px -5px 40px 5px',
  '--fluid-type-max': '1rem',

  '@bp2': {
    height: "5rem",
    marginBottom: 0,
    '--fluid-type-max': '1.2rem',
  }
});

export const PaginationButton = styled("button", {
  background: '$gray200',
  color: '$primaryB',
  border: "none",
  outline: "none",
  cursor: "pointer",
  fontSize: "1rem",
  padding: "0.2rem 0.5rem",
  margin: "0",
  width: "100%",
  height: "100%",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  '--fluid-type-max': '1rem',

  '&:not(:disabled):hover': {
    '& > svg:first-child': {
      transform: 'translateX(-0.4rem)',
    }
  },

  '&:hover': {
    background: '$gray300',
    '& > svg:last-child': {
      transform: 'translateX(0.4rem)',
    },
  },

  '&:focus': {
    outline: '1px solid $primaryB',
  },

  '&:disabled': {
    background: '$gray200',
    cursor: 'not-allowed',
    color: '#888',
  },

  svg: {
    margin: '0 0.5rem',
    transition: 'transform 0.4s ease',
    display: 'none',

    '@bp2': {
      display: 'block',
    }
  },

  '@bp2': {
    fontSize: '1.2rem',
  }
});

export const PageInfo = styled('div', {
  color: '$primaryB',
  background: '$gray100',
  width: "50%",
  height: "100%",
  minWidth: '100px',
  textAlign: 'center',
  borderLeft: '1px solid $gray50',
  borderRight: '1px solid $gray50',
  '--fluid-type-max': '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp2': {
    '--fluid-type-max': '1.2rem',
  }
});