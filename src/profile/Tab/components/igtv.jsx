import React from 'react';
import { Icon, Typography, Button } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';

const IGTV = () => {
  return (
    <div>
      <Icon>
        <RoomIcon />
      </Icon>
      <Typography>
        Unggah Video
      </Typography>
      <Typography>
        Video berdursai 1 sampai 60 menit
      </Typography>
      <Button className="post-button">Post</Button>
    </div>
  )
}
export default IGTV;