import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchTerm?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSearchTerm: (searchTerm: string) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchTerm: (searchTerm: string) => set(() => ({ gameQuery: { searchTerm } })),
    setGenreId: (genreId: number) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
    setPlatformId: (platformId: number) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
    setSortOrder: (sortOrder: string) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;