import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    console.log("add post page"),
    (
      <div className="py-8">
        <Container>
          <PostForm />
        </Container>
      </div>
    )
  );
}

export default AddPost;
