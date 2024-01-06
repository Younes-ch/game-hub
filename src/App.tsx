import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchTerm: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchTerm) =>
            setGameQuery({ ...gameQuery, searchTerm: searchTerm })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genreId) =>
              setGameQuery({ ...gameQuery, genreId: genreId })
            }
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onPlatformSelect={(platformId) =>
                setGameQuery({ ...gameQuery, platformId: platformId })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
