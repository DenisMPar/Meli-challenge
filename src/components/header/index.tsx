import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  Stack,
  Image,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./index.css";
import { Outlet, Link } from "react-router-dom";
import HeaderForm from "./headerForm";

const Header: React.FC = () => {
  return (
    <>
      <Box
        as="header"
        bg="primary.500"
        display={"flex"}
        flexDirection="column"
        alignItems={"center"}
      >
        <Stack
          maxW="1200px"
          align="center"
          bg="primary.500"
          direction="row"
          margin={0}
          p={{ base: 1, lg: 2 }}
          spacing={2}
          w="100%"
          justify={{ lg: "space-between" }}
        >
          <Flex
            align="center"
            justify="center"
            maxW={{ base: "44px", lg: "134px" }}
            maxH="32px"
          >
            <Link to="/">
              <Image
                objectFit="cover"
                display={{ lg: "none" }}
                src="/meli-logo.png"
              ></Image>
              <Image
                p={15}
                objectFit="cover"
                display={{ base: "none", lg: "initial" }}
                src="/meli-logo.png"
              ></Image>
            </Link>
          </Flex>
          <HeaderForm></HeaderForm>
          <Box display={{ base: "flex", lg: "none" }}>
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
          </Box>
          <Image
            display={{ base: "none", lg: "initial" }}
            maxW="340px"
            src="https://http2.mlstatic.com/D_NQ_840611-MLA48934732318_012022-OO.webp"
          ></Image>
        </Stack>
        <Stack
          display={{ base: "flex", lg: "none" }}
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
        <Stack
          display={{ base: "none", lg: "flex" }}
          maxW="1200px"
          align="center"
          bg="primary.500"
          direction="row"
          fontSize="13px"
          justify="space-between"
          marginTop="0"
          position="relative"
          width="100%"
          p={2}
        >
          <Stack direction={"row"} gap="60px">
            <GoLocation
              style={{
                marginLeft: "10px",
                position: "absolute",
                top: 5,
                width: "20px",
                height: "20px",
              }}
            />
            <Stack spacing={0} ml="32px !important">
              <Box
                as="span"
                color={"rgba(0,0,0,.5);"}
                fontSize={"12px"}
                lineHeight="1"
              >
                Enivar a:
              </Box>
              <Box as="span" lineHeight="1" fontSize={"14px"}>
                Capital Federal
              </Box>
            </Stack>
            <Stack
              as="ul"
              direction="row"
              color="rgba(51,51,51,.6)"
              fontSize="14px"
              spacing={4}
            >
              <Box cursor="pointer" as="li" listStyleType={"none"}>
                Categorias
              </Box>
              <Box cursor="pointer" as="li" listStyleType={"none"}>
                Ofertas
              </Box>
              <Box cursor="pointer" as="li" listStyleType={"none"}>
                Historial
              </Box>
              <Box cursor="pointer" as="li" listStyleType={"none"}>
                Supermercado
              </Box>
              <Box cursor="pointer" as="li" listStyleType={"none"}>
                Moda
              </Box>
              <Box cursor="pointer" as="li" listStyleType={"none"}>
                Vender
              </Box>
              <Box cursor="pointer" as="li" listStyleType={"none"}>
                Ayuda
              </Box>
            </Stack>
          </Stack>
          <Stack as="ul" direction="row" fontSize="14px" spacing={4}>
            <Box cursor="pointer" as="li" listStyleType={"none"}>
              Crea tu cuenta
            </Box>
            <Box cursor="pointer" as="li" listStyleType={"none"}>
              Ingresa
            </Box>
            <Box cursor="pointer" as="li" listStyleType={"none"}>
              Mis compras
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box bg="#ededed">
        <div
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "red",
            width: "100%",
            padding: "10px",
          }}
        >
          Disclaimer: Esta pagina es una <b>copia</b> hecha con fines
          académicos, no tiene intenciones de reemplazar a la página original.
        </div>
        <Outlet />
      </Box>
    </>
  );
};

export default Header;
