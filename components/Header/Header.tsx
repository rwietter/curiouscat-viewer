import { useUser } from '@/store/useUser';
import type { FormEvent } from 'react';
import { SearchIcon } from '../Search';
import * as S from './css'

const Header = () => {
  const { fetch } = useUser();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value ?? '';
    fetch(username);
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
          <SearchIcon />
        </S.Search>
      </S.SearchContainer>
    </S.Header>
  )
}

export { Header }