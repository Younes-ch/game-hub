import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ heading, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {heading}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
