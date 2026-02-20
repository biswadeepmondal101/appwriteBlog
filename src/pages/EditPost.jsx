import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPosts(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  return (
    <div className="w-full py-8">
      <Container>
        <PostForm post={posts} />
      </Container>
    </div>
  );
}

export default EditPost;
