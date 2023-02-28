import * as S from './css';

interface PaginationProps {
  totalPages: number;
  page: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({ page, totalPages, onChangePage }: PaginationProps) => {
  const handlePageChange = (page: number) => {
    onChangePage(page);
  };

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