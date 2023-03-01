import { useUser } from '@/store/useUser';
import type { FormEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchIcon } from '../Search';
import * as S from './css'

const Header = () => {
  const { fetch } = useUser();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value ?? '';
    fetch(username);
    return e.currentTarget.reset();
  }

  return (
    <S.Header>
      <S.Label>Search by user</S.Label>
      <S.SearchContainer onSubmit={handleSearch}>
        <S.Input
          placeholder="jhon.doe"
          autoFocus
          name="username"
          type="text"
        />
        <S.Search type="submit">
          <AiOutlineSearch size={23} color="var(--colors-primaryB)" />
        </S.Search>
      </S.SearchContainer>
    </S.Header>
  )
}

export { Header }