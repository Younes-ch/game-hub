import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");

const useGame = (gameSlug: string) => useQuery<Game>({
    queryKey: ['game', gameSlug],
    queryFn: () => apiClient.get(gameSlug),
    staleTime: Infinity
});

export default useGame;