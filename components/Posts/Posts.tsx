import { User } from '@/types/User';
import Image from 'next/image';
import * as S from './css'

interface PostsProps {
  user: User;
  posts: User['posts'];
}

const Posts = (props: PostsProps) => {
  const sortPostsByTimestamp = (posts: User['posts']) => {
    return posts?.sort((a, b) => b.post.timestamp - a.post.timestamp);
  }

  return (
    <S.Posts>
      {props.user.username && (
        <S.PostsTitle>Posts de @{props.user.username}</S.PostsTitle>
      )}
      {sortPostsByTimestamp(props.posts)?.map(({ post }) => (
        <S.Post key={post.id}>
          <S.PostHeader>
            <S.PostCommentAvatar
              src={post.senderData.avatar}
              alt="Curious Avatar"
              width={50}
              height={50}
            />
            <S.PostCommentUserName>Anonymous</S.PostCommentUserName>
          </S.PostHeader>
          <S.Divider>
            <S.PostBody>
              <S.PostComment>{post.comment}</S.PostComment>
              <S.Metadata>
                <a href={`https://curiouscat.live/${post.addresseeData.username}`}>
                  Para @{post.addresseeData.username}
                </a>
                <span>
                  {new Date(post.timestamp * 1000).toLocaleDateString()}
                </span>
              </S.Metadata>
            </S.PostBody>
          </S.Divider>
          <S.PostReply>
            <S.PostHeader>
              <S.PostReplyAvatar
                src={post.addresseeData.avatar}
                alt={`Avatar de ${post.addresseeData.username}`}
                width={50}
                height={50}
              />
              <S.PostCommentUserName>@{post.addresseeData.username}</S.PostCommentUserName>
            </S.PostHeader>
          </S.PostReply>
          <S.PostBody>
            <S.PostComment>{post.reply}</S.PostComment>
          </S.PostBody>
        </S.Post>
      ))}
    </S.Posts>
  )
}

export { Posts }