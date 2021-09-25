import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(post => <Post message={post.message} likesNumber={post.likesNumber} />)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return <div className={classes.myPosts}>
    <h3>My posts</h3>
    <div className={classes.newPost}>
      <textarea onChange={onPostChange} ref={newPostElement}
        value={props.newPostText} /></div>
    <div><button onClick={addPost}>Add post</button></div>
    {postsElements}
  </div>
}

export default MyPosts;
