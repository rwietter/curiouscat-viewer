import { usePagination } from '@/store/usePagination';
import { useUser } from '@/store/useUser';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import * as S from './css';

const Pagination = (): JSX.Element => {
  const { fetch, user, loading } = useUser();
  const { currentPage: page, itemsPerPage, setCurrentPage } = usePagination();

  if (!user?.posts?.length || loading) return <div />;

  const totalItems = user?.posts?.length || itemsPerPage;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (page > totalPages) {
    setCurrentPage(page - 1);
  }

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const handleNextPage = async (): Promise<void> => {
    handlePageChange(page + 1);
    await ((user?.username && page === totalPages) && fetch(user?.username));
  };

  return (
    <S.Pagination>
      <S.PaginationButton
        onClick={() => { handlePageChange(page - 1); }}
        disabled={page === 1}
      >
        <BsArrowLeft size={20} />
        <span>Previous</span>
      </S.PaginationButton>
      <S.PageInfo>
        <span>Page {page} of {totalPages}</span>
      </S.PageInfo>
      <S.PaginationButton
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleNextPage}
      >
        <span>Next</span>
        <BsArrowRight size={20} />
      </S.PaginationButton>
    </S.Pagination>
  );
};

export { Pagination };
