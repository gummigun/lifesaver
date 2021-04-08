import { Center, Heading, Icon, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { MdEvent } from "react-icons/md";
interface CalCardProps {
  item: any;
}

export const CalCard: React.FC<CalCardProps> = ({ item }) => {
  const handleDate = () => {
    const date = new Date(item.start.dateTime).toUTCString();
    return (
      <Text fontSize="md" color="white">
        {date}
      </Text>
    );
  };
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
        <Icon as={MdEvent} boxSize="2rem" color="white" />
        <Heading fontSize="md" color="white" cursor="default">
          {item.summary}
        </Heading>
        {handleDate()}
      </VStack>
    </Center>
  );
};
