import React, { useState } from "react";
import FormDialog from "./Tab/components/form";
import { Avatar, Typography, Button, IconButton,} from "@material-ui/core";
import SettingIcon from "@material-ui/icons/Settings";
import ScrollableTabsButtonForce from "./Tab";

const CounterWithLabel = (props) => {
  const { title, count } = props;

  return (
    <Typography style={{ marginRight: "1rem" }}>
      {count} {title}
    </Typography>
  );
};

const Profile = () => {

  const [name, setName] = useState('blalbalblabl');
  
  const data = [
    {key: 'kiriman', value: 1},
    {key: 'pengikut', value: 999},
    {key: 'mengikuti', value: 15},

  ]

  return (
    <div className="profile-container">
      <div className="header-container">

        <Avatar className="avatar" src="https://picsum.photos/200/300" />
        <div className="detail-container">
          <div className="detail">
            <Typography className="profile-name">{name}</Typography>
              <FormDialog name={name} setName={setName} />
            <IconButton>
              <SettingIcon />
            </IconButton>
          </div>
          <div className="follow-container">
            <div className="follower">
              {
                data.map((element) => (
                  <CounterWithLabel count={element.value} title={element.key} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <ScrollableTabsButtonForce />
    </div>
   
  );
};

export default Profile;
