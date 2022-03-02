import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
  import { ReactElement } from 'react';

  import cryptoIllustration from './cryptoIllustration.jpg'
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={10}
          h={10}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Feature1() {
    return (
      <Container maxW={'5xl'} py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={24}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                  cryptoIllustration
              }
              objectFit={'cover'}
            />
          </Flex>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'orange.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('orange.50', 'orange.900')}
              p={4}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Offering
            </Text>
            <Heading>Comprehensive suite of cryptocurrency tools</Heading>
            <Text color={'gray.500'} fontSize={'lg'} py={2}>
                Everything you need to understand, analyse, and trade cryptocurrency
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Introduction to Cryptocurrency'}
              />
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Market Statistics'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Market News'}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }