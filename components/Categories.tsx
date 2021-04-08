import { Spacer, Switch, Tag, TagLeftIcon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getTagIcon } from "../utils/util";

interface CategoriesProps {
  cat: any;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  update: boolean;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  idx?: number;
  gid?: string;
}

export const Categories: React.FC<CategoriesProps> = ({
  cat,
  selected,
  setSelected,
  update,
  setUpdate,
  active,
  idx,
  gid,
}) => {
  const handleTagClick = (id: string) => {
    console.log("Clicked on ", id);
    setSelected(gid);
    setUpdate(!update);
  };

  useEffect(() => {
    console.log("but ", selected, cat.id);
  }, [selected]);

  return (
    <>
      <Tag
        size="lg"
        key={cat.categoryName}
        bgColor={active ? "category." + gid : "white.900"}
        variant={active ? "solid" : "outline"}
        onClick={() => handleTagClick(cat.id)}
        cursor="default"
        m={2}
      >
        <TagLeftIcon boxSize="20px" as={getTagIcon(idx)} />
        {cat.categoryName}
      </Tag>
    </>
  );
};
