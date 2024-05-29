// src/Home.js
import React from "react";
import {
  Box,
  Button,
  Heading,
  Flex,
  Text,
  VStack,
  Container,
  Spacer,
  useToast,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./actions";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <VStack minH="100vh" minW="100vw" display="flex" alignItems="center">
      {/*Navbar */}
      <Box
        bgColor={"blue"}
        width="100%"
        height="50px"
        color={"white"}
        padding="5px"
      >
        <HStack justify={"flex-end"} align={"center"} width={"100%"}>
          <Container>
            <Text>AuctionEase</Text>
          </Container>
          <Container>
            <Button colorScheme="blue" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={handleLogout}>Logout</Button>
          </Container>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Home;
