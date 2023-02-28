import { usePagination } from '@/store/usePagination';
import { useUser } from '@/store/useUser';
import { useMemo } from 'react';
import * as S from './css'

const Posts = () => {
  const { user } = useUser();
  const { currentPage, itemsPerPage } = usePagination();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const posts = useMemo(() => {
    const sortedPosts = user?.posts?.sort((curr, next) => next.post.timestamp - curr.post.timestamp);
    return sortedPosts?.slice(startIndex, endIndex);
  }, [endIndex, startIndex, user?.posts]);

  return (
    <S.Posts>
      {user?.username && (
        <S.PostsTitle>Posts by @{user?.username} - {user.posts.length} Posts</S.PostsTitle>
      )}
      {posts?.map(({ post }) => (
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