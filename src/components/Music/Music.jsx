import React from "react";
import classes from './Music.module.css'

const Music = (props) => {
    return (
        <div>
            <div className={classes.playlist}>My playlist</div>
            <div className={classes.playlistElement}>Audio1</div>
            <div className={classes.playlistElement}>Audio2</div>
            <div className={classes.playlistElement}>Audio3</div>
            <div className={classes.playlistElement}>Audio4</div>

        </div>
    )
}

export default Music;
