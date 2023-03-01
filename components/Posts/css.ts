import Image from "next/image";
import { styled } from "stitches.config";

export const Posts = styled("div", {
  padding: "3rem 0",
  paddingBottom: '10rem',
});

export const PostsTitle = styled("h1", {
  textAlign: "center",
  color: "$primaryB",
  '--fluid-type-max': '1rem',
  '@bp3': {
    '--fluid-type-max': '1.5rem',
  }
});


export const NoPosts = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
  fontWeight: 500,
  position: "relative",
  color: "$primaryB",
  
  span: {
    position: "relative",
    bottom: "-5rem",
  }
});