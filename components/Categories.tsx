import { Spacer, Switch, Tag, TagLeftIcon, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { getTagIcon } from "../utils/util";

interface CategoriesProps {
  cat: any;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  idx?: number;
}

export const Categories: React.FC<CategoriesProps> = ({
  cat,
  selected,
  setSelected,
  idx,
}) => {
  const [order, setOrder] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleTagClick = (id: string) => {
    const temp = selected;
    let idx = temp.indexOf(id);

    if (idx > -1) {
      temp.splice(idx, 1);
    } else {
      temp.push(id);
    }

    setSelected(temp);
    setUpdate(!update);
  };

  return (
    <>
      <Tag
        size="lg"
        key={cat.categoryName}
        colorScheme="blue"
        variant={selected.indexOf(cat.id) > -1 ? "solid" : "outline"}
        onClick={() => handleTagClick(cat.id)}
        cursor="default"
      >
        <TagLeftIcon boxSize="20px" as={getTagIcon(idx)} />
        {cat.categoryName}
      </Tag>
    </>
  );
};