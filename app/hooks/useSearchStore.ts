import { create } from "zustand";

type SearchStore = {
    searchProduct: string,
    setSearchProduct: (searchTeam: string) => void;
    clearSearch: ()=> void;
};

export const useSearchStore =    create<SearchStore>((set)=>({
    searchProduct: "",
    setSearchProduct: (searchProduct) => set({ searchProduct }),
    clearSearch: () => set({ searchProduct: "" }),
}));