import { Center, Heading, Icon, VStack } from "@chakra-ui/react";
import React from "react";
import { MdEvent } from "react-icons/md";
interface CalCardProps {
  item: any;
}

export const CalCard: React.FC<CalCardProps> = ({ item }) => {
  return (
    <Center
      key={item.summary}
      bg={"primary.500"}
      h="250px"
      w="200px"
      textAlign="center"
      boxShadow="base"
      borderRadius="5px"
    >
      <VStack p={8}>
        <Icon as={MdEvent} boxSize="1rem" color="white" />
        <Heading fontSize="md" color="white" cursor="default">
          {item.summary}
        </Heading>
      </VStack>
    </Center>
  );
};
