import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(post => <Post message={post.message} likesNumber={post.likesNumber} />)

let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }


  return <div className={classes.myPosts}>
    <h3>My posts</h3>
    <div className={classes.newPost}>
      <textarea ref={newPostElement}></textarea></div>
    <div><button onClick={addPost}>Add post</button></div>
    {postsElements}
  </div>
}

export default MyPosts;
