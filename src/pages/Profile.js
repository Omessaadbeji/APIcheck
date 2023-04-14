import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Profile({ name }) {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      let result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${params.id}`
      );
      setPosts(result.data);
      console.log(posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <header>
        <h1>{name}</h1>
      </header>
      <div className="list">
        {posts.map((el) => (
          <PostCard post={el} />
        ))}
      </div>
    </div>
  );
}
