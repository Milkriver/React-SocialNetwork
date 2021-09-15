import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
    return <div className={classes.item}>
        <div>
            <img className={classes.avatar} src={props.avatar} width='30' height='30' />
        </div>
        <div className={classes.name}>{props.name}</div>
    </div>
}

export default Friend;
