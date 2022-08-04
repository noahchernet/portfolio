import React from "react";
import { Image, Text } from "@chakra-ui/react";
import motion from "framer-motion";

export const Logo = ({ name, src, alt, key }) => (
  <>
    <Image as={motion.img} src={src} alt={alt} key={key} h="1rem" />
    <Text>{name}</Text>
  </>
);

const Bash = ({ key }) => (
  <Logo
    name="Bash"
    src="/icons/bash_logo.svg"
    alt="Bash script logo"
    key={key}
  />
);

const C = ({ key }) => (
  <Logo name="C" src="/icons/c_logo.svg" alt="C language logo" key={key} />
);

const Java = ({ key }) => (
  <Logo
    name="Java"
    src="/icons/java_logo.svg"
    alt="Java language logo"
    key={key}
  />
);

const JavaScript = ({ key }) => (
  <Logo
    name="JavaScript"
    src="/icons/js_logo.svg"
    alt="JavaScript language logo"
    key={key}
  />
);

const Python = ({ key }) => (
  <Logo
    name="Python"
    src="/icons/python_logo.svg"
    alt="Python language logo"
    key={key}
  />
);

const TypeScript = ({ key }) => (
  <Logo
    name="TypeScript"
    src="/icons/Typescript_logo.svg"
    alt="TypeScript logo"
    key={key}
  />
);

export const ProgrammingLanguages = [
  {
    name: "TypeScript",
    src: "/icons/Typescript_logo.svg",
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
