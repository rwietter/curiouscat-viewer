import { type ReactNode } from "react";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { Background } from "@/components/Background";
import * as S from './css'
import { useTheme } from "@/store/useTheme";

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <S.Layout>
        {children}
      </S.Layout>
      <Pagination />
      <Sidebar />
    </>
  )
}

export { Layout }

