import { useTheme } from '@/store/useTheme';
import { useUser } from '@/store/useUser';
import { HiLightBulb } from 'react-icons/hi';
import { IoMoon } from 'react-icons/io5';
import { RiReactjsFill } from 'react-icons/ri';
import * as S from './css';

const Sidebar = (): JSX.Element => {
  const { fetch, user } = useUser();
  const { setTheme, theme } = useTheme();

  const handleTheme = (): void => {
    const type = theme === 'light' ? 'dark' : 'light';
    setTheme(type);
  };

  const handleFetch = async (): Promise<void> => {
    await fetch(user.username);
  };

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
        {((user?.posts?.length) !== 0) && (
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          <S.FetchPosts onClick={handleFetch}>
            <RiReactjsFill size={22} color='var(--colors-primaryB)' />
          </S.FetchPosts>
        )}
      </div>
    </S.Sidebar>
  );
};

export { Sidebar };
