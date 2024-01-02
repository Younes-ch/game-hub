import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  onPlatformSelect: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onPlatformSelect }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onPlatformSelect(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
