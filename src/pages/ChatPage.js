import React from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import Navbar from '../components/Nav';
import ChatBot from '../components/ChatBot';

const ChatPage = () => {
    return (
        <Box bg="purple.600" minH="100vh">
            <Navbar />
            <Flex direction="column" align="center" justify="center" textAlign="center" px={6}>
                <Box bg="rgba(255, 255, 255, 0.9)" borderRadius="md" p={6} mt={20} mb={8}>
                    <Heading fontSize={{ base: "3xl", md: "4xl" }} color="gray.800" mb={4}>
                        Comunic
                    </Heading>
                    <Text fontSize={{ base: "md", md: "lg" }} color="gray.700">
                        Fale com o Comunic! Seu assistente de aprendizado, preparado para ajudar você a aprender novas línguas e explorar o site.
                    </Text>
                </Box>
                <Box className='mb-10 w-[100%]'>
                    <ChatBot />
                </Box>
            </Flex>
        </Box>
    );
};

export default ChatPage;
