import { usePagination } from '@/store/usePagination';
import { useUser } from '@/store/useUser';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { toast } from 'react-toastify';
import * as S from './css';

const Pagination = () => {
  const { fetch, user, loading } = useUser();
  const { currentPage: page, itemsPerPage, setCurrentPage } = usePagination();

  if (!user?.posts?.length || loading) return <div />;

  const totalItems = user?.posts?.length || itemsPerPage;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if(page > totalPages) {
    setCurrentPage(page - 1);
  }

  const handlePageChange = (page: number) => setCurrentPage(page)

  return (
    <S.Pagination>
      <S.PaginationButton
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        <BsArrowLeft size={20} />
        <span>Previous</span>
      </S.PaginationButton>
      <S.PageInfo>
        <span>Page {page} of {totalPages}</span>
      </S.PageInfo>
      <S.PaginationButton
        onClick={() => {
          handlePageChange(page + 1);
          return (user?.username && page === totalPages) && fetch(user?.username);
        }}
      >
        <span>Next</span>
        <BsArrowRight size={20} />
      </S.PaginationButton>
    </S.Pagination>
  );
};

export { Pagination };