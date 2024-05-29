// src/Register.js
import React, { useState } from "react";
import { Box, Heading, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make an API request to register the user
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      // Show success toast
      toast({
        title: "Registration successful.",
        description: "You can now log in with your new account.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Redirect to the login page
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Registration failed.",
        description: "Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
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
      <Box maxW="md" w="full" bg="white" p={8} boxShadow="md" borderRadius="md">
        <Heading mb={6}>Account</Heading>
      </Box>
    </Box>
  );
};

export default Register;
