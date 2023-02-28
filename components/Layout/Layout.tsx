import { type ReactNode } from "react";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { Background } from "@/components/Background";
import * as S from './css'

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
  <Background />
    <S.Layout>
      {children}
    </S.Layout>
    <Pagination />
    <Sidebar />
  </>
)

export { Layout }

