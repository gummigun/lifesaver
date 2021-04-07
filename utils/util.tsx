import {
  GiCannedFish,
  GiCoffeeCup,
  GiFrozenOrb,
  GiHouse,
  GiMeatCleaver,
  GiMilkCarton,
  GiSodaCan,
  GiTomato,
} from "react-icons/gi";
import { Icon } from "@chakra-ui/react";

export const getIcon = (id: string) => {
  if (id === "1200154449836104") {
    return <Icon as={GiMilkCarton} boxSize={8} />;
  }
  if (id === "1200154449836208") {
    return <Icon as={GiTomato} boxSize={8} />;
  }
  if (id === "1200154449836209") {
    return <Icon as={GiMeatCleaver} boxSize={8} />;
  }
  if (id === "1200154449836210") {
    return <Icon as={GiFrozenOrb} boxSize={8} />;
  }
  if (id === "1200154449836212") {
    return <Icon as={GiCoffeeCup} boxSize={8} />;
  }
  if (id === "1200154449836211") {
    return <Icon as={GiCannedFish} boxSize={8} />;
  }
  if (id === "1200154449836213") {
    return <Icon as={GiHouse} boxSize={8} />;
  }
  if (id === "1200154449836214") {
    return <Icon as={GiSodaCan} boxSize={8} />;
  }
};

export const getTagIcon = (id: number) => {
  if (id === 0) {
    return GiMilkCarton;
  }
  if (id === 1) {
    return GiTomato;
  }
  if (id === 2) {
    return GiMeatCleaver;
  }
  if (id === 3) {
    return GiFrozenOrb;
  }
  if (id === 4) {
    return GiCoffeeCup;
  }
  if (id === 5) {
    return GiCannedFish;
  }
  if (id === 6) {
    return GiHouse;
  }
  if (id === 7) {
    return GiSodaCan;
  }
};
