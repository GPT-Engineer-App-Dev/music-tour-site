import { Box, Flex, Heading, Text, Button, Image, Input, Textarea, VStack, HStack } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" bg="gray.100" p={10}>
        <Heading mb={4}>The Rock Band</Heading>
        <Text fontSize="lg" mb={6}>Join us on our world tour!</Text>
        <Image src="https://via.placeholder.com/600x400" alt="Band Image" mb={4} />
        <Button colorScheme="teal" size="lg">Get Tickets</Button>
      </Flex>
      <Box p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Tour Dates</Heading>
        <VStack spacing={5}>
          <Text><FaMapMarkerAlt /> New York - 20th July 2023</Text>
          <Text><FaMapMarkerAlt /> London - 5th August 2023</Text>
          <Text><FaMapMarkerAlt /> Tokyo - 15th September 2023</Text>
        </VStack>
      </Box>
      <Box bg="gray.200" p={10}>
        <Heading size="lg" textAlign="center" mb={4}>About The Band</Heading>
        <Text fontSize="md">Formed in 2010, The Rock Band has been electrifying audiences with their powerful sound and energetic performances. This tour celebrates their decade of music.</Text>
      </Box>
      <Flex wrap="wrap" justify="center" p={10}>
        <Image src="https://via.placeholder.com/200x200" alt="Band Member 1" m={2} />
        <Image src="https://via.placeholder.com/200x200" alt="Band Member 2" m={2} />
        <Image src="https://via.placeholder.com/200x200" alt="Band Member 3" m={2} />
      </Flex>
      <Box p={10}>
        <Heading size="lg" textAlign="center" mb={4}>Contact Us</Heading>
        <VStack spacing={4}>
          <HStack spacing={2}>
            <FaEnvelope />
            <Text>email@therockband.com</Text>
          </HStack>
          <HStack spacing={2}>
            <FaPhone />
            <Text>+123 456 7890</Text>
          </HStack>
          <HStack spacing={2}>
            <FaInstagram />
            <FaTwitter />
            <FaFacebookF />
          </HStack>
          <Box w="100%">
            <Text mb={2}>Message Us:</Text>
            <Input placeholder="Your Name" mb={2} />
            <Input placeholder="Your Email" mb={2} />
            <Textarea placeholder="Your Message" mb={2} />
            <Button colorScheme="blue">Send</Button>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;