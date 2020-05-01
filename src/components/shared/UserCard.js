import React from 'react';
import { useUserCardStyles } from '../../styles';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
  const classes = useUserCardStyles();
  const { username } = user;
  return (
    <div className={classes.wrapper}>
      <Link to={`/${user.username}`}>
        <Avatar
          src={profile_image}
          alt='User Avatar'
          className={classes.avatar}
        />
      </Link>
      <div></div>
    </div>
  );
}

export default UserCard;
