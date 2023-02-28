import { SiAiohttp } from 'react-icons/si';
import { BsLightbulb } from 'react-icons/bs';
import * as S from './css'
import { useUser } from '@/store/useUser';

const Sidebar = () => {
  const { fetch, user } = useUser();

  return (
    <S.Sidebar>
      <div>
        <BsLightbulb size={22} />
      </div>
      <div>
        {user?.posts?.length && (
          <S.FetchPosts onClick={() => fetch(user.username)}>
            <SiAiohttp size={22} />
          </S.FetchPosts>
        )}
      </div>
    </S.Sidebar>
  )
}

export { Sidebar };