// src/Home.js
import React from "react";
import { Box, Button, Heading, Text, VStack, useToast } from "@chakra-ui/react";
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
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url('https://via.placeholder.com/1920x1080')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Box
        maxW="md"
        w="full"
        bg="rgba(255, 255, 255, 0.8)"
        p={8}
        boxShadow="md"
        borderRadius="md"
        textAlign="center"
      >
        <Heading mb={6}>Welcome to AuctionEase</Heading>
        <Text mb={4}>Your one-stop destination for online auctions.</Text>
        <VStack spacing={4}>
          {!isLoggedIn ? (
            <Button colorScheme="blue" onClick={() => navigate("/login")}>
              Login
            </Button>
          ) : (
            <Button colorScheme="green" onClick={handleLogout}>
              Log Out
            </Button>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
