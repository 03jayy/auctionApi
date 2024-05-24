// src/Login.js
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  useToast,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API request to log in the user
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset the form fields after submission
    setEmail("");
    setPassword("");
    // For now, we'll just show a success toast
    toast({
      title: "Login successful.",
      description: "Welcome back to AuctionEase!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
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
      <Box maxW="md" w="full" bg="white" p={8} boxShadow="md" borderRadius="md">
        <Heading mb={6}>AuctionEase Login</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
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
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
