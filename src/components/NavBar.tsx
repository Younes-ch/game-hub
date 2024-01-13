import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";
import useGameQueryStore from "../stores/gameQueryStore";
import { Link } from "react-router-dom";

const NavBar = () => {
  const setSearchTerm = useGameQueryStore((store) => store.setSearchTerm);
  return (
    <HStack padding={"10px"}>
      <Link to="/" onClick={() => setSearchTerm("")}>
        <Image src={logo} boxSize={"60px"} objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
