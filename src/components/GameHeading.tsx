import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const selectedPlatformId = useGameQueryStore(
    (store) => store.gameQuery.platformId
  );
  const genre = useGenre(selectedGenreId);
  const platform = usePlatform(selectedPlatformId);
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {platform?.name} {genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
