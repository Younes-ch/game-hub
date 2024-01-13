import { Image, SimpleGrid, Skeleton } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (isLoading)
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} marginY={5}>
        {skeletons.map((skeleton) => (
          <Skeleton key={skeleton} height="200px" />
        ))}
      </SimpleGrid>
    );

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} marginY={5}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
