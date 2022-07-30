import { Heading, Image, Stack, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Stack
      bg="white"
      h="100vh"
      direction={{ base: "column", md: "row" }}
      justify={"center"}
      align={"center"}
    >
      <Heading>
        Hi! I&apos;m Noah
        <br />
        I&apos;m a frontend developer
      </Heading>
      <Image src={"/profile.png"} alt="my_profile_picture" />
    </Stack>
  );
};

export default Hero;
