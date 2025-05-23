import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import PostsSidebar from "../components/PostsSidebar";

import MainLayout from "./MainLayout";

const BlogLayout = ({ title, subtitle, children }) => {
  return (
    <MainLayout>
      <Box>
          <Box bg="gray.50" py={10} px={6}>
            {/* Header Section */}
            <Box textAlign="center" mb={8}>
              <Heading as="h1" size="2xl" color="purple.600">
                {title}
              </Heading>
              {subtitle && (
                <Text fontSize="lg" color="gray.600" mt={2}>
                  {subtitle}
                </Text>
              )}
            </Box>
            {/* Content Section */}
            <Flex
              maxW="1200px"
              mx="auto"
              direction={{ base: "column", md: "row" }}
              gap={8}
            >
              {/* Main Content */}
              <Box flex="3">
                <VStack spacing={6} align="start">
                  {children}
                </VStack>
              </Box>
              {/* Sidebar (Optional) */}
              <PostsSidebar />
            </Flex>
          </Box>
      </Box>
    </MainLayout>
  );
};

export default BlogLayout;