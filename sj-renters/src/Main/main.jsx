import {
    Box,
    GridItem,
    Grid,
    Show,
    SimpleGrid,
    Text,
    Img,
    Flex,
    Button
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  
  export function Main() {
    const [data, setData] = useState(
      "https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg"
    );
  
    let arr = [
      "https://s.rmjo.in/Fitness-Offer-HP-Web-%20(1).jpg",
      "https://s.rmjo.in/Paytm-Offer-banner-for-web.jpg",
      "https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg",
      "https://s.rmjo.in/WP-Web.png",
      "https://s.rmjo.in/AC-Offer-Banner-Web-.jpg"
    ];
    let i = 0;
    useEffect(() => {
      let intervalId = setInterval(() => {
        setData(arr[i]);
      }, 7000);
      i++;
  
      const Cleaner = () => {
        clearInterval(intervalId);
      };
      return Cleaner;
    }, []);
    return (
      <>
        <Box padding={{ sm: "0rem", md: "0.5rem 7rem" }}>
          <Box height="400px">
            <Img borderRadius="40px" w="100%" h="90%" src={data}></Img>
          </Box>
        </Box>
      </>
    );
  }
  