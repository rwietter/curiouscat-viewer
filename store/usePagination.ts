import { create, type StoreApi, type UseBoundStore } from 'zustand';

interface PaginationState {
  currentPage: number
  itemsPerPage: number
  setCurrentPage: (currentPage: number) => void
}

const usePagination: UseBoundStore<StoreApi<PaginationState>> = create((set, get) => ({
  currentPage: 1,
  itemsPerPage: 30,
  setCurrentPage: (currentPage: number) => { set({ currentPage }); }
}));

export { usePagination };
