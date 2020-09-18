import React from "react";

const Posting = (props) => {
  const { url } = props;

  return (
    <div className="post">
      <img src={url} />  
    </div>
  );
};

const Posts = (props) => {
  const {data} = props;
  return (
    <div className="post-image">
       {data.map((element) => (
        <Posting url={element.url} />
      ))}
    </div>
  )
}

export default Posts