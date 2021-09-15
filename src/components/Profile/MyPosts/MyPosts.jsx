import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(post => <Post message={post.message} likesNumber={post.likesNumber} />)

  return <div className={classes.myPosts}>
    <h3>My posts</h3>
    <div className={classes.newPost}>
      <textarea></textarea></div>
    <div><button>Add post</button></div>
    {postsElements}
  </div>
}

export default MyPosts;
