// src/Login.js
import React, { useState } from "react";
import { login } from "./asyncActions";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const handleRegister = () => {
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API request to log in the user
    console.log("Email:", email);
    console.log("Password:", password);
    const userInfo = {
      email: email,
      password: password,
    };
    dispatch(login(userInfo));
    // Reset the form fields after submission
    setEmail("");
    setPassword("");

    if (isLoggedIn) {
      toast({
        title: "Login successful.",
        description: "Welcome back to AuctionEase!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/");
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      p={4}
    >
      <Box
        p={4}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        maxW="md"
        mx="auto"
        w="full"
      >
        <Heading mt={4}>Welcome back!</Heading>
        <Text mb={4}>Please enter your details.</Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={3}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
            <Button color={"gray.1000"} width="full" onClick={handleRegister}>
              Register
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
