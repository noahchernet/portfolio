import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Logo = ({ name, src, alt }) => (
  <Box>
    <Image as={motion.img} src={src} alt={alt} h="8rem" w="8rem" m={0} p={0} />
    <Text textAlign={"center"} pt={"1rem"}>
      {name}
    </Text>
  </Box>
);

export const ProgrammingLanguages = [
  {
    name: "TypeScript",
    src: "/icons/typescript_logo.svg",
    alt: "TypeScript logo",
  },

  {
    name: "JavaScript",
    src: "/icons/js_logo.svg",
    alt: "JavaScript language logo",
  },

  {
    name: "Python",
    src: "/icons/python_logo.svg",
    alt: "Python language logo",
  },
  {
    name: "Java",
    src: "/icons/java_logo.svg",
    alt: "Java language logo",
  },
  {
    name: "C",
    src: "/icons/c_logo.svg",
    alt: "C language logo",
  },
  {
    name: "Bash",
    src: "/icons/bash_logo.svg",
    alt: "Bash script logo",
  },
];
