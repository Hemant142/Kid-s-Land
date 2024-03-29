import {
    FormControl,
    FormLabel,
    Input,
    Box,
    Center,
    Button,
    Heading,
    Flex,
  } from "@chakra-ui/react";
  import axios from "axios";
  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  
  let initState = {
    name: "",
    email: "",
    password: "",
    city: "",
    country: "",
  };
  
  function SignUp() {
    const [name, setName] = useState(initState.name);
    const [email, setEmail] = useState(initState.email);
    const [password, setPassword] = useState(initState.password);
    const [city, setCity] = useState(initState.city);
    const [country, setCountry] = useState(initState.country);
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (submitted) {
        // Perform navigation after submission
        navigate("/login");
      }
    }, [submitted, navigate]);
  
    function handleSubmit() {
      if (
        name === "" ||
        email === "" ||
        password === "" ||
        city === "" ||
        country === ""
      ) {
        alert("Input Fields Cannot Be Empty!");
      } else {
        axios
          .post(`https://rctmockapi.onrender.com/user`, {
            name: name,
            email: email,
            password: password,
            city: city,
            country: country,
          })
          .then((res) => {
            console.log(res.data);
            // Trigger re-render by updating the state
            setSubmitted(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  
    return (
      <>
        <Center>
          <Flex direction={{ base: "column", md: "row" }} mt="50px">
            <Box
              bg="#304b62"
              h="550px"
              boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
              p={{ base: "20px", md: "60px" }}
              maxW="500px"
              mx="auto"
            >
              <Heading
                mb="10px"
                color="white"
                fontSize={{ base: "2xl", md: "3xl" }}
              >
                Register Here:
              </Heading>
              <FormControl isRequired>
                <FormLabel color="white">Name</FormLabel>
                <Input
                  bgColor="white"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fontSize="md"
                />
  
                <FormLabel color="white">Email address</FormLabel>
                <Input
                  bgColor="white"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fontSize="md"
                />
  
                <FormLabel color="white">Password</FormLabel>
                <Input
                  bgColor="white"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fontSize="md"
                />
  
                <FormLabel color="white">City</FormLabel>
                <Input
                  bgColor="white"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  fontSize="md"
                />
  
                <FormLabel color="white">Country</FormLabel>
                <Input
                  bgColor="white"
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  fontSize="md"
                />
  
                <Button
                  mt="20px"
                  variant="solid"
                  bg="#d49539"
                  onClick={handleSubmit}
                  fontSize="md"
                >
                  Submit
                </Button>
              </FormControl>
            </Box>
          </Flex>
        </Center>
      </>
    );
  }
  
  export default SignUp;
  