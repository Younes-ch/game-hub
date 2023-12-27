import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box overflow="hidden" width="300px" borderRadius={10}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
