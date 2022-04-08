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

export default function Hero() {
  return (
    <Stack 
      minH={'100vh'} 
      direction={{ base: 'column', md: 'row' }}
      bgGradient='linear(to-tr, purple.900, pink.700)'
    >
      <Flex p={200} flex={1} align={'center'} justify={'center'}>
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
              Get Started
              <span role="img" aria-label="rocket"> 🚀🚀🚀 💎🤲</span>
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <a href="/news">
              <Button
                size={'lg'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                margin={'2'}
                _hover={{
                  bg: 'blue.500',
                }}>
                News
              </Button>
              </a>

              <a href="/market">
              <Button
                size={'lg'}
                rounded={'full'}
                bg={'red.400'}
                color={'white'}
                margin={'2'}
                _hover={{
                  bg: 'red.500',
                }}>
                Market
              </Button>
              </a>

              <a href="/education">
              <Button
                size={'lg'}
                rounded={'full'}
                bg={'pink.400'}
                color={'white'}
                margin={'2'}
                _hover={{
                  bg: 'pink.500',
                }}>
                Learn
              </Button>
              </a>

              <a href="/community/trending-feed">
              <Button
                size={'lg'}
                rounded={'full'}
                bg={'orange.400'}
                color={'white'}
                margin={'2'}
                _hover={{
                  bg: 'orange.500',
                }}>
                Community
              </Button>
              </a>


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
