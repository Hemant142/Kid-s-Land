import { NavLink, useNavigate } from "react-router-dom";
import {
  Tabs,
  TabList,
  Tab,
  Box,
  Image,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  TabIndicator,
  baseTheme,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../images/logo.png";
import React from "react";

const Navbar = () => {
  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/courses",
      label: "Courses",
    },
    {
      to: "/teachers",
      label: "Teachers",
    },
    {
      to: "/about",
      label: "About Us",
    },
  ];

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <Box bg="#d49539" height={"100px"} maxHeight="100px">
      <Box
        mx={{ base: 4, md: 8, lg: 16 }}
        py={{ base: 3, md: 4 }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box boxSize={{ base: "80px", md: "90px" }} marginTop={"-10px"}>
          <Image src={logo} alt="logo" boxSize="100%" objectFit="contain" />
        </Box>

        {/* Burger Menu for small screens */}
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="ghost"
        />

        {/* Tabs for larger screens */}
        <Tabs
          display={{ base: "none", md: "flex" }}
          // border={"2px solid red"}
      
          marginTop={"-33px"}
          variant="unstyled"
          height={{ base: "auto", md: "80px" }}
        >
          <Box>
          <TabList mt={{ base: "0", md: "10px" }}>
            {links.map((link) => (
              <NavLink to={link.to} key={link.to}>
                <Tab
                  fontWeight="bold"
                  fontSize={{md:"sm",lg:"lg"}}
                  marginLeft={{ base: "0", md: "20px" }}
                  mt={{ base: "0", md: "25px" }}
                >
                  {link.label}
                </Tab>
              </NavLink>
            ))}
          </TabList>
          {/* Conditionally render TabIndicator based on screen size */}
          {(window.innerWidth >= 768) && (
            <TabIndicator
              mt="10px"
              height="10px"
              bg="#304b62"
              borderRadius="7px 7px 0px 0px"
            />
          )}
          </Box>
        </Tabs>

        {/* Admission Button for larger screens */}
        <Button
          display={{ base: "none", md: "inline-block" }}
          onClick={handleClick}
          variant="solid"
          bg="#304b62"
          marginLeft={{ base: "0", md: "20px" }}
          mt={{ base: "0", md: "0px" }}
          color="white"
          height="50px"
        >
          Admission Now
        </Button>
      </Box>

      {/* Drawer for small screens */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent bg="#d49539">
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing="4">
                {links.map((link) => (
                  <NavLink to={link.to} key={link.to}>
                    <Button onClick={onClose} variant="link">
                      {link.label}
                    </Button>
                  </NavLink>
                ))}
                {/* Admission Button for small screens */}
                <Button
                  onClick={() => {
                    handleClick();
                    onClose(); // Close the menu after clicking
                  }}
                  variant="solid"
                  bg="#304b62"
                  color="white"
                  height="50px"
                >
                  Admission Now
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navbar;
