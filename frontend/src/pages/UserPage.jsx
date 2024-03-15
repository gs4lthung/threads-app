import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import React from "react"; // Add import statement for React

export default function UserPage() {
  return (
    <>
      <UserHeader />
      <UserPost
        postImg="/post1.png"
        postTitle="Let's talk about theads"
        likes={1200}
        replies={481}
      />
      <UserPost
        postImg="/post2.png"
        postTitle="Let's talk about theads"
        likes={2899}
        replies={231}
      />
      <UserPost
        postImg="/post3.png"
        postTitle="Let's talk about theads"
        likes={226}
        replies={355}
      />
      <UserPost
        postTitle="Let's talk about theads"
        likes={11}
        replies={41}
      />
    </>
  );
}
