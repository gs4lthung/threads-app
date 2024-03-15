import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import UserPost from "../components/UserPost";
import Comment from "../components/Comment";
import React from "react"; // Add import statement for React
import PropTypes from "prop-types";

export default function PostPage() {
  return (
    <>
      <UserPost
        postImg="/post1.png"
        postTitle="Let's talk about theads"
        likes={1200}
        replies={481}
      />
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"} color={"gray"}>
            👋
          </Text>
          <Text color={"gray"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />
      <Comment
        comment="Looks really good !"
        createdAt="2d"
        likes={100}
        username="danabramov"
        userAvatar="https://bit.ly/dan-abramov"
      />
      <Comment
        comment="OMG!!!"
        createdAt="5d"
        likes={20}
        username="ryanflorence"
        userAvatar="https://bit.ly/ryan-florence"
      />
      <Comment
        comment="This is amazing !"
        createdAt="3d"
        likes={44}
        username="kentcdodds"
        userAvatar="https://bit.ly/kent-c-dodds"
      />
    </>
  );
}