import {
  Box,
  Heading,
  Icon,
  Tag,
  TagLabel,
  TagLeftIcon,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdAccessTime, MdEvent } from "react-icons/md";
interface CalSpecialCardProps {
  item: any;
}

export const CalSpecialCard: React.FC<CalSpecialCardProps> = ({ item }) => {
  return (
    <>
      <Box
        key={item.summary}
        bg={"primary.500"}
        h="250px"
        w="400px"
        boxShadow="base"
        borderRadius="5px"
      >
        <Box>
          <Tag m={2} size="md" variant="subtle" bgColor="white">
            <TagLeftIcon boxSize="20px" color="primary.500" as={MdAccessTime} />
            <TagLabel color="primary.500">Next up</TagLabel>
          </Tag>
        </Box>

        <VStack p={8} h="100%">
          <Icon as={MdEvent} boxSize="3rem" color="white" />
          <Heading fontSize="xl" color="white" cursor="default">
            {item.summary}
          </Heading>
        </VStack>
      </Box>
    </>
  );
};
