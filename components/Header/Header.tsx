/* eslint-disable @typescript-eslint/no-misused-promises */
import { type FormEvent, useRef, useEffect } from 'react';
import { useUser } from '@/store/useUser';
import { AiOutlineSearch } from 'react-icons/ai';
import * as S from './css';
import { toast } from 'react-toastify';

const Header = (): JSX.Element => {
  const { fetch } = useUser();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      e.preventDefault();
      const username = e.currentTarget.username.value ?? '';
      if (!username) {
        toast.warning('Please enter a username', {
          toastId: 'username',
          position: 'top-left'
        });
        return;
      }
      void fetch(username);
    } catch (error) {
      console.log(error);
    } finally {
      e.currentTarget.reset();
    }
  };

  return (
    <S.Header>
      <S.Label>Search for user</S.Label>
      <S.SearchContainer onSubmit={handleSearch}>
        <S.Input
          placeholder="john.doe"
          ref={inputRef}
          name="username"
          type="text"
        />
        <S.Search type="submit">
          <AiOutlineSearch size={23} color="var(--colors-primaryB)" />
        </S.Search>
      </S.SearchContainer>
    </S.Header>
  );
};

export { Header };
