import { Flex, Image, useColorMode } from "@chakra-ui/react";
import React from "react"; // Add import statement for React

export default function Header() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <Flex justifyContent={"center"} mt={6} mb="12">
      <Image
        cursor={"pointer"}
        alt="logo"
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        w="10"
        h="10"
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
