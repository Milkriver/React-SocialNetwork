import React from "react";
import classes from './News.module.css'

const News = (props) => {
    return (
                <div>
                <div className={classes.header}>News</div>
                <div className={classes.newsElement}>Today</div>
                <div className={classes.newsElement}>Yesterday</div>
    
            </div>
    )
}

export default News;
