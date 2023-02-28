import type { FormEvent } from 'react';
import { SearchIcon } from '../Search';
import * as S from './css'

interface HeaderProps {
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
}

const Header = (props: HeaderProps) => {
  return (
    <S.Header>
      <S.Label>Search by user</S.Label>
      <S.SearchContainer onSubmit={props.handleSearch}>
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