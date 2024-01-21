import { useReducer, useEffect, useState } from "react";
import {
  Heading,
  Container,
  SimpleGrid,
  Box,
  Flex,
  Spacer,
  Image,
  Stack,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import Loading from "../Components/Loading";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

const init = {
  loading: false,
  err: false,
  data: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_LOADING":
      return {
        loading: true,
        err: false,
        data: [],
      };

    case "FETCH_SUCCESSFUL":
      return {
        loading: false,
        err: false,
        data: payload,
      };

    case "FETCH_UNSUCCESSFUL":
      return {
        loading: false,
        err: true,
        data: [],
      };
    default:
      throw new Error("Invalid Action type");
  }
};

const Courses = () => {
  let url = `https://rctmockapi.onrender.com/courses`;
  const [state, dispatch] = useReducer(reducer, init);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  function fetchCourses(url) {
    dispatch({ type: "FETCH_LOADING" });
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "FETCH_SUCCESSFUL", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_UNSUCCESSFUL" });
        console.log(err);
      });
  }

  const { loading, err, data } = state;

  useEffect(() => {
    if (price && category) {
      url = url + `?category=${category}&price_lte=${price}`;
    } else if (category) {
      url = url + `?category=${category}`;
      console.log(url);
    } else if (price) {
      url = url + `?price_lte=${price}`;
    }

    fetchCourses(url);
  }, [category, price]);

  function handleReset() {
    setCategory("");
    setPrice("");
  }

  function handleDetails(id) {
    console.log(id, "abc");
    return <Navigate to={`/courses/${id}`} />;
  }

  function handleEnroll() {
    navigate("/signup");
  }

  if (loading) {
    return (
      <>
        <Container maxW="container.xl" px={4}>
          <Flex direction="column" align="center">
            <Heading
              as="h2"
              size={{ base: "xl", md: "3xl" }}
              noOfLines={1}
              color="#304b62"
              my={10}
            >
              Our Courses
            </Heading>
            <Flex direction={{ base: "column", md: "row" }} align="center">
              <select
                style={{
                  color: "#304b62",
                  font: "20px",
                  fontWeight: "bold",
                  border: "none",
                  margin: { base: "10px 0", md: "0 10px" },
                }}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="">Filter By Category</option>
                <option value="Art">Art</option>
                <option value="Dance">Dance</option>
                <option value="Music">Music</option>
                <option value="Academic">Academic</option>
              </select>
              <select
                style={{
                  color: "#304b62",
                  font: "20px",
                  fontWeight: "bold",
                  margin: { base: "10px 0", md: "0 10px" },
                }}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              >
                <option value="">Filter By Price</option>
                <option value="500">Less than 500</option>
                <option value="1000">Less than 1000</option>
              </select>
              <Button
                bg="#304b62"
                color="white"
                marginTop={{ base: "10px", md: "0" }}
                onClick={handleReset}
              >
                Reset Filters
              </Button>
            </Flex>
          </Flex>
          <Loading />
        </Container>
      </>
    );
  }

  return (
    <>
      <Container maxW="container.xl" px={4}>
        <Flex direction="column" align="center" marginBottom={"10px"}>
          <Heading
            as="h2"
            size={{ base: "xl", md: "3xl" }}
            noOfLines={1}
            color="#304b62"
            my={10}
          >
            Our Courses
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} align="center" gap={"10px"}>
            <select
              style={{
                color: "#304b62",
                font: "20px",
                fontWeight: "bold",
                border: "none",
                margin: { base: "10px 0", md: "0 10px" },
              }}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="">Filter By Category</option>
              <option value="Art">Art</option>
              <option value="Dance">Dance</option>
              <option value="Music">Music</option>
              <option value="Academic">Academic</option>
            </select>
            <select
              style={{
                color: "#304b62",
                font: "20px",
                fontWeight: "bold",
                margin: { base: "10px 0", md: "0 10px" },
              }}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            >
              <option value="">Filter By Price</option>
              <option value="500">Less than 500</option>
              <option value="1000">Less than 1000</option>
            </select>
            <Button
              bg="#304b62"
              color="white"
              marginTop={{ base: "10px", md: "0" }}
              onClick={handleReset}
            >
              Reset Filters
            </Button>
          </Flex>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {data.map((course) => (
            <Card maxW="sm" bg="#304b62" color="white" key={course.id}>
              <CardBody>
                <Image
                  src={course.image}
                  alt="Green double couch with wooden legs"
                  height="250px"
                  width="350px"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading fontWeight="medium">{course.courseName}</Heading>
                  <Text>{course.TagLine}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" color="black" bg="#d49539">
                    <Link to={`/courses/${course.id}`}>View Details</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    color="black"
                    bg="white"
                    marginRight="70px"
                    onClick={handleEnroll}
                  >
                    Enroll
                  </Button>
                  <Text color="white" fontSize="2xl">
                    ₹{course.price}
                  </Text>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Courses;
