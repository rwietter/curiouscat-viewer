import Image from "next/image";
import { styled } from "stitches.config";

export const Posts = styled("div", {
  padding: "3rem 0",
});

export const PostsTitle = styled("h1", {
  fontSize: "1.5rem",
  textAlign: "center",
});

/** Post */

export const Post = styled("section", {
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  maxWidth: "800px",
  width: "100%",
  background: "#fff",
  boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
  borderRadius: "0.5rem",
  marginTop: '1.5rem',
  position: 'relative',

  wordWrap: 'break-word',
  wordBreak: 'break-word',
  hyphens: 'auto',
  
});

export const PostHeader = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const Divider = styled("div", {
  position: "relative",

  '&::after': {
    content: "",
    left: '25px',
    bottom: '-15px',
    position: 'absolute',
    height: '100%',
    width: '2px',
    background: '#ccc',
    alignSelf: 'stretch',
  }
});

export const PostCommentAvatar = styled(Image, {
  borderRadius: "50%",
});

export const PostCommentUserName = styled('span', {
  color: '#111',
  paddingLeft: '1rem',
  fontWeight: '600',
});

export const PostBody = styled("div", {
  paddingLeft: "4rem",
  lineHeight: "1.7",
})

export const PostComment = styled("span", {
  color: "#111",
});

export const Metadata = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "0.8rem 0",
  borderBottom: "1px solid #eee",
  color: "#777",

  a: {
    color: "#777",
    transition: "all 0.4s ease",
  },

  'a:hover': {
    color: '#111',
    cursor: 'pointer',
    fontWeight: '500',
  }
});

export const PostReply = styled("div", {
  display: "flex",
  paddingTop: "2rem",
});

export const PostReplyAvatar = styled(Image, {
  borderRadius: "50%",
});