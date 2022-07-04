import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  Stack,
  Icon,
  StackDivider,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./index.css";
import { Outlet } from "react-router-dom";
import HeaderForm from "./headerForm";

const Header: React.FC = () => {
  return (
    <>
      <Box as="header">
        <Stack
          align="center"
          bg="primary.500"
          direction="row"
          margin={0}
          p={1}
          spacing={2}
          w="100%"
        >
          <Flex align="center" justify="center">
            <a className="logo">
              <img
                alt=""
                src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small@2x.png"
              />
            </a>
          </Flex>
          <HeaderForm></HeaderForm>
          <Menu>
            <MenuButton
              aria-label="Menu"
              as={IconButton}
              border="none"
              display="block"
              icon={
                <GiHamburgerMenu
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "#333",
                    opacity: "65%",
                  }}
                />
              }
              p={1.5}
              variant="outline"
            />
          </Menu>
          <Menu>
            <MenuButton
              aria-label="Menu"
              as={IconButton}
              border="none"
              icon={
                <AiOutlineShoppingCart
                  style={{
                    width: "100%",
                    height: "100%",
                    color: "#333",
                    opacity: "65%",
                  }}
                />
              }
              p={1.5}
              variant="outline"
            />
          </Menu>
        </Stack>
        <Stack
          _before={{
            content: `""`,
            display: "block",
            width: "100%",
            height: "1px",
            position: "absolute",
            boxShadow: "0 1px 0 0 rgb(0 0 0 / 10%)",
            top: "0",
          }}
          align="center"
          bg="primary.500"
          direction="row"
          fontSize="13px"
          h="39px"
          justify="start"
          marginTop="0"
          position="relative"
          width="100%"
        >
          <GoLocation style={{ marginLeft: "10px" }} />
          <Box flex={4}>Enviar a: Capital Federal</Box>
          <MdKeyboardArrowRight style={{ marginRight: "10px" }} />
        </Stack>
      </Box>
      <Box bg="#ededed">
        <Outlet />
      </Box>
    </>
  );
};

export default Header;
