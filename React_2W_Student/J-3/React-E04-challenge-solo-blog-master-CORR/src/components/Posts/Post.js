import React from 'react';

const Post = ({ title, category, excerpt }) => (
  <div className="blog-post">
    <h1 className="blog-post-title">{title}</h1>
    <div className="blog-post-category">{category}</div>
    <div className="blog-post-excerpt">{excerpt}</div>
  </div>
);

export default Post;
