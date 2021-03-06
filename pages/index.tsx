import Head from "next/head";

import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Calendar } from "../components/calendar";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const API_URL = "http://lifesaver-server-dev.eu-west-1.elasticbeanstalk.com";

const Home = (props: any) => {
  return (
    <>
      <Head>
        <title>Create GUMMI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container height="100%">
        <Header />
        <Box w="100%" h="80%" p={4}>
          <Calendar data={props.data} />
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await fetch(API_URL + "/cal", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((jData) => {
      return jData.resp.data.items;
    });
  //console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default Home;
