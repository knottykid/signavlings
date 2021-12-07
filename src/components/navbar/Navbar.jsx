import React from "react";
import {
  Box,
  Stack,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  IconButton,
  Img,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="#AD0F5B"
      color="white"
      {...props}
    >
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
      <Flex align="center" mr={5}>
        <Box w={100}>
          <Img src="images/Signavio_Logo_Claim_RGB.png" />
        </Box>
      </Flex>
      <Popover>
        <PopoverTrigger>
          <IconButton icon={<FaSearch />} background="#AD0F5B" />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <InputGroup size="md">
            <Input
              placeholder="Search..."
              value={props.searchInput}
              onChange={props.onChange}
              text={text}
              color={text == "light" ? "white" : "black"}
            />
            <InputRightAddon
              children={<FaSearch />}
              background="#AD0F5B"
              onClick={handleToggle}
            />
          </InputGroup>
        </PopoverContent>
      </Popover>
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      ></Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "#AD0F5B" }}
        >
          Seednavio
        </Button>
      </Box>
    </Flex>
  );
};
export default Navbar;
