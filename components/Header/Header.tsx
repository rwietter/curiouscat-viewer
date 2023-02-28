import type { FormEvent } from 'react';
import { SearchIcon } from '../Search';
import * as S from './css'

interface HeaderProps {
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
}

const Header = (props: HeaderProps) => {
  return (
    <S.Header>
      <S.Label>Pesquise por um usuário</S.Label>
      <S.SearchContainer onSubmit={props.handleSearch}>
        <S.Input autoFocus name="username" type="text"></S.Input>
        <S.Search type="submit">
          <SearchIcon />
        </S.Search>
      </S.SearchContainer>
    </S.Header>
  )
}

export { Header }