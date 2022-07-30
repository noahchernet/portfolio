import { Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Stack
      as={motion.section}
      bg='white'
      h='100vh'
      direction={{ base: 'column', md: 'row' }}
      justify='center'
      align='center'
      spacing='8rem'
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.8, 0.9, 1] }}
      transition={{ duration: 5, delay: 21 }}
    >
      <VStack align='left'>
        <Text
          as={motion.p}
          initial={{ opacity: 0.5, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: [0, 0.71, 0.2, 1.01] }}
        >
          Hi! I&apos;m
        </Text>
        <Heading>Noah Chernet </Heading>
        <Heading>I&apos;m a fullstack developer</Heading>
        <svg
          width='65'
          height='6'
          viewBox='0 0 65 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          style={{ margin: '1.5rem 0' }}
        >
          <line
            x1='3'
            y1='3'
            x2='62'
            y2='3'
            stroke='#ffca1d'
            strokeWidth='6'
            strokeLinecap='round'
          />
        </svg>
        <Text>
          I&apos;m a software engineer specialized in building phenomenal
          digital experiences.
        </Text>
      </VStack>
      <Image
        src='/profile.png'
        alt='my_profile_picture'
        filter='drop-shadow(2rem 2rem 0.5rem rgba(0,0,0,0.05))'
      />
    </Stack>
  );
};

export default Hero;
