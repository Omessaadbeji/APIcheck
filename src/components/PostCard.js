import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
