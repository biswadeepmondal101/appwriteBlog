import React from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{parse(content)}</p>
      </div>
    </Link>
  );
}

export default PostCard;
