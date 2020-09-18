import React, { useState } from "react";
import TrashIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
const Postes = (props) => {
  const { like, url, onClick } = props;
  return (
    <div className="post">
      <img src={url} />
      {like}
      <IconButton onClick={onClick}>
        <TrashIcon />
      </IconButton>
    </div>
  );
};

const Posting = (props) => {
  const { data, postDelete } = props;
  return (
    <div className="posting">
      {data.map((element, index) => (
        <Postes like={element.likes} url={element.url} onClick={() => postDelete(index, 'hello')}/>
      ))}
    </div>
  );
};

export default Posting;
