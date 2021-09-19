import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return <div className={classes.item} >
    <img className={classes.ava} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" />
    {props.message}
    <div className={classes.likes}>
      <span > Likes </span> <img className={classes.heart} src="https://img2.freepng.ru/20180604/ktp/kisspng-heart-clip-art-coracao-5b14e5f3d12471.3551228915280962438567.jpg" />
      {props.likesNumber}

    </div>
  </div>
}

export default Post;
