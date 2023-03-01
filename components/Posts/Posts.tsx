import { usePagination } from '@/store/usePagination';
import { useUser } from '@/store/useUser';
import { useMemo } from 'react';
import { Post } from '@/components/Post';
import Lottie from 'react-lottie';
import * as S from './css';
import * as catNyanJSON from '@/public/7148-the-nyan-cat.json';
import * as catSleepingJSON from '@/public/104965-cat-colors.json';

const catNyanLottie = {
  loop: true,
  autoplay: true,
  animationData: catNyanJSON,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const catSleepingLottie = {
  loop: true,
  autoplay: true,
  animationData: catSleepingJSON,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

const Posts = () => {
  const { user, loading } = useUser();
  const { currentPage, itemsPerPage } = usePagination();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const posts = useMemo(() => {
    const sortedPosts = user?.posts?.sort((curr, next) => next.post.timestamp - curr.post.timestamp);
    return sortedPosts?.slice(startIndex, endIndex);
  }, [endIndex, startIndex, user?.posts]);

  if (loading) return <Lottie options={catNyanLottie} height={200} width={200} />;

  if (!posts) {
    return (
      <S.NoPosts>
        <span>Please, search for a user</span>
        <Lottie options={catSleepingLottie} height={300} width={300} />
      </S.NoPosts>
    )
  }

  return (
    <S.Posts>
      {user?.username && (
        <S.PostsTitle>
          {user.posts.length || ''} Answers by @{user?.username}
        </S.PostsTitle>
      )}
      {posts?.map(({ post }) => <Post key={post.id} post={post} />)}
    </S.Posts>
  )
}

export { Posts }