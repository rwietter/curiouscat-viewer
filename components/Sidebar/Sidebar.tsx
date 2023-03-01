import { RiReactjsFill } from 'react-icons/ri';
import { HiLightBulb } from 'react-icons/hi';
import { IoMoon } from 'react-icons/io5';
import * as S from './css'
import { useUser } from '@/store/useUser';
import { useTheme } from '@/store/useTheme';

const Sidebar = () => {
  const { fetch, user } = useUser();
  const { setTheme, theme } = useTheme();

  const handleTheme = () => {
    const type = theme === 'light' ? 'dark' : 'light';
    setTheme(type);
  }

  return (
    <S.Sidebar>
      <div>
        {theme === 'light' && (
          <HiLightBulb
            onClick={handleTheme}
            size={22}
            color='var(--colors-primaryB)'
          />
        )}
        {theme === 'dark' && (
          <IoMoon
            onClick={handleTheme}
            size={20}
            color='var(--colors-primaryB)'
          />
        )}
      </div>
      <div>
        {user?.posts?.length && (
          <S.FetchPosts onClick={() => fetch(user.username)}>
            <RiReactjsFill size={22} color='var(--colors-primaryB)' />
          </S.FetchPosts>
        )}
      </div>
    </S.Sidebar>
  )
}

export { Sidebar };