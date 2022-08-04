import { Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { Logo, ProgrammingLanguages } from "./Logos";

const Skills = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      bg="brand.yellow"
      h="100vh"
      // justify='center'
      spacing="40%"
      pt="4rem"
      pl="6rem"
    >
      {/* Skills section */}
      <VStack spacing="3rem">
        <Heading as="h1" textDecoration="underline">
          My Skills
        </Heading>
        {console.log("Programming lagns:", ProgrammingLanguages)}
        {/*ProgrammingLanguages.map((logo, index) => {
          <Logo name={logo.name} src={logo.src} alt={logo.alt} />;
        })*/}
      </VStack>
      {/* About section */}
      <VStack as="h1" spacing="3rem">
        <Heading textDecoration="underline">About Me</Heading>
      </VStack>
    </Stack>
  );
};

export default Skills;
