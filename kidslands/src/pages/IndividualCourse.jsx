import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  Box,
  SimpleGrid,
  CardHeader,
  Center,
  StackDivider,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Components/Loading";

const IndividualCourse = () => {
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const { id } = useParams();

  function fetchAndCourse() {
    setLoading(true);
    axios
      .get(`https://rctmockapi.onrender.com/courses/${id}`)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setCourse(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setErr(true);
        console.log(err);
      });
  }

  useEffect(() => {
    fetchAndCourse();
  }, []);

  if (loading) {
    return (
      <Container maxW="container.xl">
        <Loading />
      </Container>
    );
  }

  return (
    <>
      <Box p={12}>
        <Box maxW="1200px" margin="auto">
          {/* Mobile View */}
          <Center display={{ base: "block", md: "none" }}>
            <Box mb="5" position="relative">
              <Image
                objectFit="fill"
                width="100%"
                height="300px"  
                src={course.image}
                alt={course.courseName}
              />
            </Box>
          </Center>

          <Card
            direction={{ base: "column", md: "row" }}
            bg="#f6d6a0"
            overflow="hidden"
            boxShadow="lg"
            variant="outline"
          >
            {/* Tablet and Desktop View */}
            <Box
              display={{ base: "none", md: "block" }}
              mr={{ base: "0", md: "30px" }}
            >
              <Image
                objectFit="fill"
                height={{ base: "300px", md: "520px" }}
                src={course.image}
                alt={course.courseName}
              />
            </Box>

            <Stack
              ml={{ base: "0", md: "30px" }}
              mt={{ base: "5", md: "30px" }}
              w={{ base: "100%", md: "auto" }}
            >
              <CardBody>
                <Heading size="2xl">{course.courseName}</Heading>
                <br />
                <br />
                <Heading size="md">For age group of: {course.Age}</Heading>
                <br />
                <Heading size="sm">About the Course:</Heading>
                <br />
                <Text
                  fontWeight="semibold"
                  noOfLines={3}
                  fontSize={{ base: "md", md: "lg" }}
                >
                  {course.about}
                </Text>
                <br />
                <Text
                  fontWeight="bold"
                  color={"#d49539"}
                  noOfLines={3}
                  fontSize={{ base: "lg", md: "xl" }}
                >
                  Price: ₹{course.price}
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  marginBottom={{ base: "20px", md: "80px" }}
                  color={"white"}
                  bg={"#304b62"}
                >
                  Book a Demo
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
      </Box>
      {/* Tablet and Desktop View */}
      <Center>
        <Heading size="xl" mt={{ base: "0", md: "5" }}>
          More Information About the Course
        </Heading>
      </Center>
      {/* Tablet and Desktop View */}
      <SimpleGrid
        spacing={{ base: "5", md: "10" }}
        marginLeft={{ base: "0", md: "250px" }}
        mt={{ base: "5", md: "20px" }}
        marginRight={{ base: "0", md: "250px" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      >
        <Card
          textAlign={"center"}
          marginBottom={{ base: "20px", md: "0" }}
          width={{ base: "100%", md: "auto" }}
        >
          <CardHeader bg="#304b62">
            <Heading size="md" color={"white"}>
              Course Duration:
              <br /> {course.courseDuration}
            </Heading>
          </CardHeader>
        </Card>
        <Card
          textAlign={"center"}
          width={{ base: "100%", md: "auto" }}
        >
          <CardHeader bg="#304b62">
            <Heading size="md" color={"white"}>
              {course.Schedule}
              <br /> Daily
            </Heading>
          </CardHeader>
        </Card>
        <Card
          textAlign={"center"}
          marginBottom={{ base: "20px", md: "0" }}
          width={{ base: "100%", md: "auto" }}
        >
          <CardHeader bg="#304b62">
            <Heading size="md" color={"white"}>
              Maximum Member Count:
              <br /> 5
            </Heading>
          </CardHeader>
        </Card>
      </SimpleGrid>
      {/* Tablet and Desktop View */}
      <Center>
        <Card
          bg="#ebecf3"
          marginBottom={{ base: "20px", md: "0" }}
          width={{ base: "100%", md: "auto" }}
        >
          <CardHeader>
            <Heading size="md">What will you receive?</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="s" textTransform="uppercase">
                  GAMIFIED PLATFORM
                </Heading>
                <Text pt="2" fontSize="m">
                  Earn points and rewards for completing classes and see your
                  ranking on the leaderboard!
                </Text>
              </Box>
              <Box>
                <Heading size="s" textTransform="uppercase">
                  PRACTICE SUPPORT
                </Heading>
                <Text pt="2" fontSize="m">
                  Get one-click access to Class recordings, Assignments, and
                  supplementary materials!
                </Text>
              </Box>
              <Box>
                <Heading size="s" textTransform="uppercase">
                  CERTIFICATION
                </Heading>
                <Text pt="2" fontSize="m">
                  Get Certified by TalentGum as you progress towards the next
                  level in Art!
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </>
  );
};

export default IndividualCourse;
