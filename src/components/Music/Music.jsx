import React from "react";
import classes from './Music.module.css'

const Music = (props) => {
    return (
        <div>
            <div className={classes.playlist}>My playlist</div>
            <div className={classes.playlistElement}><audio controls="controls" src="C:\Users\Marina\Desktop\ReactMyProject\my-project\React-SocialNetwork\src\components\Music\audio\Aqua - Be My Saviour Tonight.mp3"></audio></div>
            <div className={classes.playlistElement}>Audio2</div>
            <div className={classes.playlistElement}>Audio3</div>
            <div className={classes.playlistElement}>Audio4</div>

        </div>
    )
}

export default Music;
