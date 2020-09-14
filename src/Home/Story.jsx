import React from 'react'
import { Avatar, Typography, Box } from '@material-ui/core'

const Story = (props) => {
  const {name, profile_pic, onClick} = props;


  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      mx={1}
      onClick={onClick}
    >

      <Avatar src={profile_pic}/>
      <Typography>
        {name}
      </Typography>
         
    </Box>
  )
}

export default Story
