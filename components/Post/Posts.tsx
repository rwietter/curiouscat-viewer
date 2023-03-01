import { type Post as TPost } from '@/types/User';
import * as S from './css';

interface PostProps {
  post: TPost['post']
}

const Post = ({ post }: PostProps): JSX.Element => {
  return (
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
            <a
              href={`https://curiouscat.live/${post.addresseeData.username}`}
              target="_blank"
              rel="noreferrer"
            >
              To @{post.addresseeData.username}
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
          <S.PostCommentUserName>
            <a
              href={`https://curiouscat.live/${post.addresseeData.username}`}
              target="_blank"
              rel="noreferrer"
            >
              @{post.addresseeData.username}
            </a>
          </S.PostCommentUserName>
        </S.PostHeader>
      </S.PostReply>
      <S.PostBody>
        <S.PostComment>{post.reply}</S.PostComment>
      </S.PostBody>
    </S.Post>
  );
};

export { Post };
