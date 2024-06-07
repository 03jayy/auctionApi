// src/Home.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Flex,
  VStack,
  Link,
  Text,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Divider,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="nav" bg="blueviolet" w="100vw" px="5vw">
      <Flex justify="space-between" align="center" py="4">
        <Link to="/" color="white" fontSize="2xl">
          AuctionEase
        </Link>
        <Flex gap="4" direction="row">
          <Button variant="outline">Logout</Button>
          <Button variant="outline">Login</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

const Banner = () => {
  return (
    <Box minW="90vw" bg="lightblue" align="center" px="100" py="100">
      <Heading>Where everything is found</Heading>
      <Text>HI</Text>
    </Box>
  );
};

const ItemCard = ({ item }) => {
  return (
    <Card
      width="350px"
      margin="2"
      borderWidth={1}
      borderColor={"gray.200"}
      borderRadius="lg"
      boxShadow="lg"
    >
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.productName}</Heading>
          <Text>{item.productDescription}</Text>
          <Text color="blue.600" fontSize="2xl">
            ${item.pricePerUnit} per unit
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Download info
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

const AddItemForm = () => {
  const handleSubmition = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newItem = {
      name: formData.get("productName"),
      quantity: formData.get("quantity"),
      price: formData.get("pricePerUnit"),
      category: formData.get("productCategory"),
      description: formData.get("productDescription"),
    };

    try {
      const response = await fetch("http://localhost:3030/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Network response was not ok'");
      }
      const data = await response.json();
      console.log("Item added successfully: ", data);
    } catch (error) {
      console.error("There was an error adding the item: ", error);
    }
  };

  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="lg"
      maxW="md"
      mx="auto"
    >
      <form onSubmit={handleSubmition}>
        <VStack spacing={3}>
          <FormControl id="productName" isRequired>
            <FormLabel>Product Name</FormLabel>
            <Input name="productName" placeholder="Item" />
          </FormControl>

          <FormControl id="productDescription" isRequired>
            <FormLabel>Product Description</FormLabel>
            <Input name="productDescription" placeholder="Description" />
          </FormControl>

          <FormControl id="productCategory" isRequired>
            <FormLabel>Category</FormLabel>
            <Select name="productCategory" placeholder="Select category">
              <option value="cameras">Cameras</option>
              <option value="phones">Phones</option>
              <option value="computers">Computers</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>

          <FormControl id="quantity" isRequired>
            <FormLabel>Quantity</FormLabel>
            <NumberInput defaultValue={1} min={1} max={99}>
              <NumberInputField name="quantity" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl id="pricePerUnit" isRequired>
            <FormLabel>Price per unit</FormLabel>
            <NumberInput
              defaultValue={0.01}
              min={0.01}
              precision={2}
              step={0.01}
            >
              <NumberInputField name="pricePerUnit" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <Button type="submit" colorScheme="blue" minW="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

const Options = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Fetch items from the backend
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:3030/api/items");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched items:", data);
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <Box w="90vw" align="center">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Buy items</Tab>
          <Tab>Auction Item</Tab>
        </TabList>
        <TabPanels>
          <TabPanel display="flex" flexWrap="wrap" justifyContent="left">
            {items.length > 0 ? (
              items.map((item) => <ItemCard key={item.productID} item={item} />)
            ) : (
              <Text>No items available</Text>
            )}
          </TabPanel>
          <TabPanel>
            <AddItemForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

const Home = () => {
  return (
    <VStack minH="100vh" minW="100vw" display="flex" alignItems="center">
      <Navbar />
      <Banner />
      <Options />
    </VStack>
  );
};

export default Home;
