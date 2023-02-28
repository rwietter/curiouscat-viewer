import { usePagination } from '@/store/usePagination';
import { useUser } from '@/store/useUser';
import * as S from './css';

const Pagination = () => {
  const { user } = useUser();
  const { currentPage: page, itemsPerPage, setCurrentPage } = usePagination();

  if(!user?.posts?.length) return <div />;

  const totalItems = user?.posts?.length || itemsPerPage;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <S.Pagination>
      <S.PaginationButton
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </S.PaginationButton>
      <S.PageInfo>
        <span>Page {page} of {totalPages}</span>
      </S.PageInfo>
      <S.PaginationButton
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </S.PaginationButton>
    </S.Pagination>
  );
};

export { Pagination };