import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={classes.background} src='https://i.ucrazy.ru/files/i/2012.11.11/1352571682_2012-11-11_171_00122.jpg' />
      </div>
      <div className={classes.blockAvaDescription}>
        <div><img className={classes.ava} src='https://demotivation.ru/wp-content/uploads/2020/07/unnamed-1.jpg' width='100' heigth='100' /></div>
        <div className={classes.description}>Ava+description </div>


      </div>
    </div>
  )
}

export default ProfileInfo;
