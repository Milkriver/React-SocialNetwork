import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(post => <Post message={post.message} likesNumber={post.likesNumber} />)
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return <div className={classes.myPosts}>
    <h3>My posts</h3>
    <div className={classes.newPost}>
      <textarea onChange={onPostChange} ref={newPostElement}
        value={props.newPostText} /></div>
    <div><button onClick={onAddPost}>Add post</button></div>
    {postsElements}
  </div>
}

export default MyPosts;
