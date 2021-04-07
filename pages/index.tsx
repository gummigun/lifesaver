import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Calendar } from "../components/calendar";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create GUMMI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container height="100vh">
        <Header />
        <Box w="100%" h="85vh" p={4}>
          <Calendar />
        </Box>
        <HStack w="100%" h="10vh" bgColor="gray.700">
          <Footer />
        </HStack>
        <DarkModeSwitch />
      </Container>
    </div>
  );
}
