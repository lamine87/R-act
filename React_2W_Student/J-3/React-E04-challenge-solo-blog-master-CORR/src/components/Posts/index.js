import React from 'react';

import Post from 'src/components/Posts/Post';
import './posts.sass';

const Posts = ({ posts }) => {
  // On prépare la liste des posts (articles) sous forme JSX.
  const postsJSX = posts.map(post => <Post
    // id={post.id}
    // title={post.title}
    // category={post.category}
    // excerpt={post.excerpt}
    {...post}
  />);

  // On utilise la liste des posts dans le composant Posts.
  return <main className="blog-posts content--centered">{postsJSX}</main>;
};

export default Posts;
