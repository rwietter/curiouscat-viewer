import { type ReactNode } from 'react';
import { Pagination } from '@/components/Pagination';
import { Sidebar } from '@/components/Sidebar';
import * as S from './css';

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <S.Layout>
        {children}
      </S.Layout>
      <Pagination />
      <Sidebar />
    </>
  );
};

export { Layout };
