import { Box, Button, ButtonGroup, Center, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

let initState = {
    email: "",
    password: "",
}

export default function Login() {
    const [email, setEmail] = useState(initState.email)
    const [password, setPassword] = useState(initState.password)
    const [userData, setUserData] = useState([])
    const Auth = useContext(AuthContext)
    const navigate = useNavigate()

    function UserData() {
        axios.get(`https://rctmockapi.onrender.com/user`)
            .then((res) => {
                console.log("abc")
                setUserData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function handleSubmit(e) {
        e.preventDefault()
        let foundUser = false;
        userData.forEach((user) => {
            if (user.email === email && user.password === password) {
                Auth.loginUser(user.name)
                navigate("/")
            }
        });
    }

    useEffect(() => {
        UserData()
    }, [])

    return (
        <>
            <Center>
                <Flex justify="center" align="center" mt="50px">
                    <Box
                        bg="#304b62"
                        h="auto"
                        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                        p={{ base: "20px", md: "50px" }}
                        maxW={{ base: "90%", md: "400px" }}
                    >
                        <Heading mb="20px" color="white" fontSize={{ base: "xl", md: "2xl" }}>
                            Log In
                        </Heading>

                        <FormControl w="100%" isRequired>
                            <FormLabel color="white">Email address</FormLabel>
                            <Input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                bg="white"
                                fontSize={{ base: "md", md: "lg" }}
                            />

                            <FormLabel mt={"20px"} color="white">Password</FormLabel>
                            <Input
                                type='password'
                                value={password}
                                bg="white"
                                onChange={(e) => setPassword(e.target.value)}
                                fontSize={{ base: "md", md: "lg" }}
                            />

                            <ButtonGroup mt="30px" spacing={4}>
                                <Button variant='solid' bg='#d49539' onClick={(e) => handleSubmit(e)}>
                                    Submit
                                </Button>
                                <Button
                                    variant='outline'
                                    borderColor="#d49539"
                                    color="#d49539"
                                    onClick={() => navigate("/signup")}
                                    fontSize={{ base: "sm", md: "md" }}
                                >
                                    Not Registered yet?
                                </Button>
                            </ButtonGroup>
                        </FormControl>
                    </Box>
                </Flex>
            </Center>
        </>
    )
}
