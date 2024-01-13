import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Box,
  Button,
  Collapse,
  Heading,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";

const GameDetails = () => {
  const [showDescription, setShowDescription] = useState(false);
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  const handleToggle = () => setShowDescription(!showDescription);

  if (isLoading)
    return (
      <Box padding="6" boxShadow="lg">
        <Skeleton height="20px" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    );

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetails;
