import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import heroIllustration from './heroIllustration.png'
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Stack 
      minH={'100vh'} 
      direction={{ base: 'column', md: 'row' }}
      bgGradient='linear(to-tr, purple.900, pink.700)'
    >
      <Flex p={10} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}>
            <Text color={'gray.50'} fontSize='8xl'>
              BC Hub
            </Text>
          </Heading>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text color={'orange.400'} as={'span'}>
              Your one-stop hub for cryptocurrency
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'lg', lg: 'xl' }} color={'gray.50'}>
              To the moon 
              <span role="img" aria-label="rocket"> 🚀🚀🚀 💎🤲</span>
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link to="/app">
              <Button
                size={'lg'}
                rounded={'full'}
                bg={'orange.400'}
                color={'white'}
                _hover={{
                  bg: 'orange.500',
                }}>
                Explore
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex pt={20} flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          boxSize={'80%'}
          src={
            heroIllustration
          }
        />
      </Flex>
    </Stack>
  );
}
