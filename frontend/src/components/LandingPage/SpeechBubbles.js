import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function SpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} w={'100%'}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Testimonials</Heading>
          <Text>See what others have to say about BC Hub</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great Lessons</TestimonialHeading>
              <TestimonialText>
                The lessons provided by BC Hub are easy to
              </TestimonialText>
              <TestimonialText>
                understand and got me up to speed quickly. Would
              </TestimonialText>
              <TestimonialText>
                definitely recommend to anyone looking to get a
              </TestimonialText>
              <TestimonialText>
                head start on cryptocurrency!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://cdn.vox-cdn.com/thumbor/cexiM3hVoi-6GACuBVM_Dw4ee5Y=/0x0:2039x1359/1820x1213/filters:focal(0x0:2039x1359):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/30208441/ap499078584510.0.jpg'
              }
              name={'Satoshi Nakamoto'}
              title={'CEO at Bitcoin Inc.'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Useful Analytics</TestimonialHeading>
              <TestimonialText>
                BC Hub only provides the best and
              </TestimonialText>
              <TestimonialText>
                most relevant information. Since I've started
              </TestimonialText>
              <TestimonialText>
                using BC Hub, my cryptocurrency analysis
              </TestimonialText>
              <TestimonialText>
                has improved by leaps and bounds!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://alchetron.com/cdn/philip-j-fry-0bdd0192-d476-432c-b5c1-27fc2b35c48-resize-750.jpeg'
              }
              name={'Philip J. Fry'}
              title={'Planet Express'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Incredibly Convenient</TestimonialHeading>
              <TestimonialText>
                BC Hub provides up-to-date news on the latest 
              </TestimonialText>
              <TestimonialText>
                cryptocurrency events. With BC Hub, my trading 
              </TestimonialText>
              <TestimonialText>
                performance has improved considerably because it is 
              </TestimonialText>
              <TestimonialText>
                so much easier to keep up with cryptocurrency news!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'http://en.spongepedia.org/images/f/f5/SpongeBob_SquarePants_Mr_Krabs.jpg'
              }
              name={'Mr. Krabs'}
              title={'CEO at Krusty Krab'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}