import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Posting from "./components/post";
import IGTV from "./components/igtv";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const data = [
    { url: "https://picsum.photos/200/300", likes: 30 },
    { url: "https://picsum.photos/200/301", likes: 33 },
  ];
  const [posts, setPosts] = React.useState(data);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleDelete(index) {
    const selectedPost = [];
    for (let i = 0; i < posts.length; i++) {
      if (i !== index) {
        selectedPost.push(posts[i]);
      }
    }
    setPosts(selectedPost);
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Posting" {...a11yProps(0)} />
        <Tab label="IGTV" {...a11yProps(1)} />
        <Tab label="tersimpan" {...a11yProps(2)} />
        <Tab label="ditandai" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Posting data={posts} postDelete={(index) => handleDelete(index)} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <IGTV />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
