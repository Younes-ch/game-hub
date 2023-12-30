import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" marginY={5} fontSize='5xl'>
      {gameQuery.platform && gameQuery.platform.name}{" "}
      {gameQuery.genre && gameQuery.genre.name} Games
    </Heading>
  );
};

export default GameHeading;
