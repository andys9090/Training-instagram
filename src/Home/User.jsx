import React, { useState } from "react";
import { Typography, Button, Box, Avatar } from "@material-ui/core";

function FollowEd(props) {
  const { followed, users, index, setUsers } = props;

  function onFollowClick() {
    const newUsersData = [];

    for (let i = 0; i < users.length; i++) {
      if (i === index) {
        newUsersData.push({
          ...users[i],
          followed: !users[i].followed,
        })
      } else {
        newUsersData.push(users[i]);
      }
    }
    setUsers(newUsersData);
  }
  return (
    <Button onClick={onFollowClick}>{followed ? "mengikuti" : "ikuti"}</Button>
  );
}

const User = (props) => {
  const { name, avatar, followed, onClick, users, index, setUsers } = props;
  return (
    <Box display="flex" alignItems="center">
      <Avatar src={avatar} />
      <Typography onClick={onClick}>{name}</Typography> 
      <FollowEd followed={followed} users={users} index={index} setUsers={setUsers} />
    </Box>
  );
};

export default User;
