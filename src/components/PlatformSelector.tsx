import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  selectedPlatformId?: number;
  onPlatformSelect: (platformId: number) => void;
}

const PlatformSelector = ({ selectedPlatformId, onPlatformSelect }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  const selectedPlatform = usePlatform(selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onPlatformSelect(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
