import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { MdEvent, MdLibraryAdd } from "react-icons/md";

export const Footer = () => (
  <>
    <Flex w="100%" h="10vh" bgColor="gray.700">
      <Link href="/">
        <Center w="50%">
          <Box display={["none", "none", "block", "block"]}>
            <Button
              color="white"
              size="lg"
              leftIcon={<MdEvent />}
              variant="ghost"
            >
              Dagatal
            </Button>
          </Box>
          <Box display={["block", "block", "none", "none"]}>
            <IconButton
              aria-label="dagatal"
              color="white"
              size="lg"
              as={MdEvent}
              variant="ghost"
            />
          </Box>
        </Center>
      </Link>

      <Divider orientation="vertical" color="white" />
      <Link href="/shopping">
        <Center w="50%">
          <Box display={["none", "none", "block", "block"]}>
            <Button
              color="white"
              size="lg"
              leftIcon={<MdLibraryAdd />}
              variant="ghost"
            >
              Innkaupalisti
            </Button>
          </Box>
          <Box display={["block", "block", "none", "none"]}>
            <IconButton
              aria-label="dagatal"
              color="white"
              size="lg"
              as={MdLibraryAdd}
              variant="ghost"
            />
          </Box>
        </Center>
      </Link>
    </Flex>
  </>
);
