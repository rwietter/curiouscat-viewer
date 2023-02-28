interface PaginationProps {
  startIndex: number;
  endIndex: number;
  totalPages: number;
  page: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({ endIndex, startIndex, page, totalPages, onChangePage }: PaginationProps) => {
  const handlePageChange = (page: number) => {
    onChangePage(page);
  };

  return (
    <div className="flex justify-center">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Prev ( {page} de {totalPages} páginas )
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next ( {page} of {totalPages} páginas)
      </button>
    </div>
  );
};

export { Pagination };