import { Center, Divider, Icon, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { MdEvent, MdLibraryAdd } from "react-icons/md";

export const Footer = () => (
  <>
    <Link href="/">
      <Center h="100%" w="50%">
        <VStack>
          <Icon color="white" boxSize="2rem" as={MdEvent} />
          <Text color="white">Dagatal</Text>
        </VStack>
      </Center>
    </Link>
    <Divider orientation="vertical" color="white" />
    <Link href="/shopping">
      <Center h="100%" w="50%">
        <VStack>
          <Icon color="white" boxSize="2rem" as={MdLibraryAdd} />
          <Text color="white">Innkaupalisti</Text>
        </VStack>
      </Center>
    </Link>
  </>
);
