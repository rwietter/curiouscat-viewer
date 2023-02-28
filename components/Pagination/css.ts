import { styled } from "@/stitches.config";

export const Pagination = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: '#191D24',
  height: "5rem",
  marginBottom: "3rem",
  boxShadow: 'rgba(50, 50, 93, 0.2) 0px -5px 40px 5px',

  '@bp2': {
    height: "8rem",
    marginBottom: 0,
  }
});

export const PaginationButton = styled("button", {
  background: '#E8E8E8',
  color: '#111',
  border: "none",
  outline: "none",
  cursor: "pointer",
  fontSize: "1rem",
  padding: "0.2rem 0.5rem",
  margin: "0",
  transition: "all 0.4s ease",
  width: "100%",
  height: "100%",

  '&:hover': {
    background: '#BBBFCA',
  },

  '&:focus': {
    outline: '1px solid #111',
  },

  '&:disabled': {
    background: '#fff',
    cursor: 'not-allowed',
    color: '#777',
  },

  '@bp2': {
    fontSize: '1.2rem',
  }
});

export const PageInfo = styled('div', {
  color: '#111',
  background: '#FFFBF5',
  fontSize: '1rem',
  width: "50%",
  height: "100%",
  minWidth: '150px',
  textAlign: 'center',
  borderLeft: '1px solid #ddd',
  borderRight: '1px solid #ddd',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp2': {
    fontSize: '1.2rem',
  }
});