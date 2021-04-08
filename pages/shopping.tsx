import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Switch,
  Tag,
  TagLeftIcon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CardBase } from "../components/Cards/CardBase";
import { Categories } from "../components/Categories";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { getProducts } from "../utils/api";
import { TaskDetail } from "../utils/types";
import { getTagIcon } from "../utils/util";

const API_URL =
  "http://lifesaver-server-dev.eu-west-1.elasticbeanstalk.com/api";
const Shopping = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>(
    Array.from(props.categories, (cat: any) => cat.id)
  );
  const [update, setUpdate] = useState(false);
  const [order, setOrder] = useState(false);
  const [products] = useState(props.data);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = async (value: any) => {
    setLoading(true);
    const result = await fetch(API_URL + "/tasks", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        approval_status: "pending",
        completed: false,
        name: value.target.innerText,
        notes: "",
        projects: ["251799705353963"],
        resource_subtype: "default_task",
        workspace: "9471440416025",
      }),
    });

    const content = await result.json().then((response) => {
      setLoading(false);
      return response;
    });
    console.log(content);
  };

  const displayCategories = ["block", "block", "none", "none"];
  const notDisplayCategories = ["none", "none", "block", "block"];
  const handleOpen = () => {
    console.log("Show");
    setShow(!show);
  };

  const gids = [
    "1200154449836104",
    "1200154449836208",
    "1200154449836209",
    "1200154449836210",
    "1200154449836212",
    "1200154449836211",
    "1200154449836213",
    "1200154449836214",
  ];

  useEffect(() => {
    setLoadingProducts(false);
  }, [update, order, show]);

  return (
    <Container height="100%">
      <Header />
      <Box
        w={["100%", "100%", "90%", "90%"]}
        p={4}
        h="80%"
        mb={20}
        flexWrap="wrap"
      >
        {loadingProducts ? (
          <div>...loading</div>
        ) : (
          <>
            <HStack ml={2} mb={2}>
              <Text>Röðun: </Text>
              <Text ml={4}>Flokkaröð</Text>
              <Switch size="lg" onChange={() => setOrder(!order)} />
              <Text>Stafrófsröð</Text>
            </HStack>
            <Box w="100%" wrap="wrap" display={notDisplayCategories} mb={8}>
              {props.categories.map((cat: any, idx: number) => {
                return (
                  <Categories
                    cat={cat}
                    selected={selected}
                    setSelected={setSelected}
                    idx={idx}
                    gid={gids[idx]}
                  />
                );
              })}
              <Divider my={4} />
            </Box>
            <VStack
              w="100%"
              p={4}
              mb={8}
              wrap="wrap"
              display={displayCategories}
            >
              <Button w="100%" colorScheme="teal" onClick={handleOpen}>
                Birta flokka
              </Button>
              <VStack
                align="left"
                display={show ? displayCategories : notDisplayCategories}
              >
                {props.categories.map((cat: any, idx: number) => {
                  return (
                    <Box>
                      <Categories
                        cat={cat}
                        selected={selected}
                        setSelected={setSelected}
                        idx={idx}
                        gid={gids[idx]}
                      />
                    </Box>
                  );
                })}
              </VStack>
              <Spacer />
              <HStack w="100%" align="center">
                <Text>Flokkaröð</Text>
                <Switch size="lg" onChange={() => setOrder(!order)} />
                <Text>Stafrófsröð</Text>
              </HStack>
            </VStack>

            <SimpleGrid minChildWidth="100px" spacing="20px">
              {order
                ? products!
                    .filter((p: TaskDetail) => {
                      return selected.indexOf(p.tags[0].gid) > -1;
                    })
                    .sort((a: any, b: any) => (a.name > b.name ? 1 : -1))
                    .map((product: any, idx: number) => {
                      return (
                        <Box key={idx} onClick={(val) => handleClick(val)}>
                          <CardBase product={product}></CardBase>
                        </Box>
                      );
                    })
                : products
                    .filter((p: any) => {
                      return selected.indexOf(p.tags[0].gid) > -1;
                    })
                    .map((product: any, idx: number) => {
                      return (
                        <Box key={idx} onClick={(val) => handleClick(val)}>
                          <CardBase product={product}></CardBase>
                        </Box>
                      );
                    })}
            </SimpleGrid>
          </>
        )}
      </Box>
      {loading ? (
        <Center
          h="100%"
          w="100%"
          bgColor="rgba(0, 0, 0, 0.3);"
          pos="absolute"
          left={0}
          top={0}
        >
          <Heading color="white">BÆTI VIÐ INNKAUPALISTANN</Heading>
        </Center>
      ) : null}

      <Footer />
    </Container>
  );
};

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await getProducts();
  //console.log("DATA", data);

  const categories = [
    {
      id: "1200154449836104",
      categoryName: "Mjólkurvörur",
    },
    {
      id: "1200154449836208",
      categoryName: "Grænmeti/Ávextir",
    },
    {
      id: "1200154449836209",
      categoryName: "Kjöt",
    },
    {
      id: "1200154449836210",
      categoryName: "Frosið/Kælivörur",
    },
    {
      id: "1200154449836212",
      categoryName: "Þurrvörur/Lager",
    },
    {
      id: "1200154449836211",
      categoryName: "Niðursoðið/Pasta",
    },
    {
      id: "1200154449836213",
      categoryName: "Heimilið",
    },
    {
      id: "1200154449836214",
      categoryName: "Gos/Nammi",
    },
  ];

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data,
      categories,
    },
  };
}

export default Shopping;
