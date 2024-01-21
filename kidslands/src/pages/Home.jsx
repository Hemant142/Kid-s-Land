import { Box, Image, Button, Heading, Container, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import bannernew from "../images/bannernew.png";
import photo from "../images/photo.png";
import footer from "../images/footer.png";

const Home = () => {
  const navigate = useNavigate();
  const Auth = useContext(AuthContext);

  function handleLogin() {
    if (Auth.isAuth) {
      Auth.logoutUser();
    } else navigate("/login");
  }

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <Box
        height={{ base: "700px", sm: "700px", md: "700px", lg: "700px" }}
        p={12}
        background={`url(https://media.istockphoto.com/id/1359234676/photo/one-caucasian-boy-lying-on-the-floor-at-home-in-day-reading-a-book-front-view-copy-space-real.webp?b=1&s=170667a&w=0&k=20&c=wVaLTeBzsLZLGwvX8A93zSlaAcWJwb3oraHi4Bq0S9I=)`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Box width="100%" margin="auto" height="100%">
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            boxShadow="lg"
            variant="outline"
            bg="#f6d6a0"
            height="100%"
          >
            <Stack
              marginLeft={{ base: "0", sm: "50px" }}
              mt={{ base: "30px", sm: "50px" }}
              spacing={{ base: "15px", sm: "20px" }}
            >
              <CardBody>
                <Heading
                  size={{ base: "xl", sm: "xl", md: "xl", lg: "2xl" }}
                  noOfLines={2}
                >
                  Welcome to kids land{" "}
                </Heading>
                {["md", "lg"].includes(
                  useBreakpointValue({ base: "base", md: "md", lg: "lg" })
                ) && (
                  <>
                    <br />
                    <br />
                  </>
                )}
                <Heading
                  as="h2"
                  size={{ base: "lg", sm: "lg", md: "lg", lg: "lg" }}
                  noOfLines={3}
                >
                  Enhancing kids Future with Smart Education
                </Heading>
                {["md", "lg"].includes(
                  useBreakpointValue({ base: "base", md: "md", lg: "lg" })
                ) && (
                  <>
                    <br />
                    <br />
                  </>
                )}
                <Heading
                  as="h6"
                  size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
                  // noOfLines={2}
                >
                  Providing them a better education and brightening the future
                  of your kids. Choice is yours.
                </Heading>
              </CardBody>

              <CardFooter gap={{ base: "5px", md: "10px" }}>
                <Button
                  variant="solid"
                  color="white"
                  bg="#304b62"
                  mt={{ base: "-15px", sm: "-30px" }}
                  onClick={handleLogin}
                >
                  {Auth.isAuth ? `Hello ${Auth.user}` : "Login"}
                </Button>
                <Button
                  variant="solid"
                  color="white"
                  bg="#304b62"
                  mt={{ base: "-15px", sm: "-30px" }}
                  marginLeft={{ base: "0", sm: "10px" }}
                >
                  Live Demo
                </Button>
              </CardFooter>
            </Stack>

            <Image
              src={bannernew}
              marginRight={{ base: "0", sm: "80px" }}
              alt="banner"
              width={{ base: "100%", sm: "auto" }}
              height={{ base: "auto", sm: "100%" }}
            />
          </Card>
        </Box>
      </Box>

      <Heading
        as="h2"
        mt="40px"
        // marginLeft="70px"
        // marginTop={"10px"}
        // margin={"auto"}
        color="#37464e"
        size="2xl"
        textAlign={"center"}
        noOfLines={2}
        // border={"2px solid red"}
      >
        Numbers Speak for Itself
      </Heading>

      <SimpleGrid
        spacing={6}
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        margin="50px 20px 50px 20px"
      >
        <Card bg="#304b62">
          <Container maxW="md">
            <CardHeader>
              <Heading size="xl" color="white">
                200+
                <br />
                Faculties
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="white" fontSize="xl">
                Best and quality teachers with advance knowledge on the
                corresponding topics have more than 3 years of experience.
              </Text>
            </CardBody>
          </Container>
        </Card>
        <Card bg="#304b62">
          <CardHeader>
            <Heading color="white" size="xl">
              150+ Achievements
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="white" fontSize="xl">
              Many national and international achievements by students
              participated in different competitions across the globe and won
              prizes.
            </Text>
          </CardBody>
        </Card>
        <Card bg="#304b62">
          <CardHeader>
            <Heading color="white" size="xl">
              150+ Courses
            </Heading>
          </CardHeader>
          <CardBody>
            <Text color="white" fontSize="xl">
              A variety of courses from basic to advance level can be mastered
              through our website along with certification from esteemed
              institutes.
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Box maxW="1400px" margin="auto">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          boxShadow="lg"
          variant="outline"
          bg="#f6d6a0"
        >
          <Stack marginLeft="50px" mt="50px">
            <CardBody>
              <Heading size="2xl" noOfLines={2}>
                Welcome to kids land{" "}
              </Heading>
              <br />
              <br />
              <Heading as="h2" size="2xl" noOfLines={2}>
                How to Get Admissions?
              </Heading>
              <br />
              <br />
              <Heading as="h4" size="lg" noOfLines={2}>
                Providing them a better education and brightening the future of
                your kids. Choice is yours.
              </Heading>
              <br />
              <Text fontSize="2xl" fontWeight={"semibold"}>
                1. Complete The Forms
              </Text>
              <Text fontSize="2xl" fontWeight={"semibold"}>
                2. Send Required Documents
              </Text>
              <Text fontSize="2xl" fontWeight={"semibold"}>
                3. Our Counselors Will Contact You
              </Text>
            </CardBody>
            <CardFooter>
              <Button
                variant="solid"
                color="white"
                bg="#304b62"
                onClick={handleClick}
              >
                Enroll Now
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Box>

      <Heading
        as="h2"
        mt="40px"
        textAlign={"center"}
        color="#37464e"
        marginBottom={"20px"}
        size="2xl"
        noOfLines={2}
      >
        Photo Gallery
      </Heading>

      <Box>
        <Image
          src={photo}
          margin={"auto"}
          width={"100%"}
          maxW="1200px"
          height={"auto"}
        />
      </Box>

      <Box>
        <Image
          src={footer}
          mt={"50px"}
          width={"100%"}
          maxW="2000px"
          height={"auto"}
        />
      </Box>
    </>
  );
};

export default Home;
