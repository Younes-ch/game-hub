import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  const handleToggle = () => setExpanded(!expanded);

  if (children.length <= 300) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}{" "}
        <Button
          size="xs"
          fontWeight="bold"
          onClick={handleToggle}
          colorScheme="yellow"
        >
          Show {expanded ? "Less" : "More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
