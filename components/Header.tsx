import { Box, Heading, HStack, Spacer } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <HStack w="100%" h="5vh" bgColor="primary.500">
      <Box mx={8}>
        <Heading fontSize="md" color="white" cursor="default">
          LIFESAVER
        </Heading>
        <Spacer />
      </Box>
    </HStack>
  );
};
