import { Heading, Stack, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { Logo, ProgrammingLanguages } from "./Logos";

const Skills = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg="brand.yellow"
      h="100vh"
      justify="space-evenly"
      pt="4rem"
      pl="6rem"
    >
      {/* Skills section */}
      <VStack align={"center"} w={"50vw"} spacing={"5rem"}>
        <Heading as="h1" textDecoration="underline">
          My Skills
        </Heading>
        <Wrap spacing={"12rem"}>
          {ProgrammingLanguages.map((logo, index) => {
            return (
              <WrapItem key={index}>
                <Logo
                  name={logo.name}
                  src={logo.src}
                  alt={logo.alt}
                  key={index}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </VStack>
      {/*<Logo name={ProgrammingLanguages[0].name} src={ProgrammingLanguages[0].src} alt={ProgrammingLanguages[0].alt} /> */}
      {/* About section */}
      <VStack w={"50vw"} spacing={"5rem"}>
        <Heading textDecoration="underline">About Me</Heading>
        <Text>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
          minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
          minim labore adipisicing minim sint cillum sint consectetur cupidatat.
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui
          minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </Text>
      </VStack>
    </Stack>
  );
};

export default Skills;
