import { Center, Heading, Box, VStack } from "@chakra-ui/react";
import React from "react";
import { TaskDetail } from "../../utils/types";
import { getIcon } from "../../utils/util";
interface CardBaseProps {
  product: TaskDetail;
}

export const CardBase: React.FC<CardBaseProps> = ({ product }) => {
  return (
    <Center
      key={product.name}
      bg={"category." + [product.tags[0].gid]}
      h="125px"
      w="100px"
      textAlign="center"
      boxShadow="base"
      borderRadius="5px"
    >
      <VStack p={8}>
        <Box color="white">{getIcon(product.tags[0].gid)}</Box>
        <Heading fontSize="md" color="white" cursor="default">
          {product.name}
        </Heading>
      </VStack>
    </Center>
  );
};
