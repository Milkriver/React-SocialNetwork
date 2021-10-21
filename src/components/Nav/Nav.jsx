import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from './Nav.module.css';

const Nav = (props) => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/users' activeClassName={classes.activeLink}>Users</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
        </div>

        <div>
            {/* <Friends state={props.state}/> */}
        </div>
    </nav>
}

export default Nav;
