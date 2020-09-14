import React from "react";
const Postes = (props) => {
  const { like, url } = props;

  return (
    <div className="post">
      <img src={url} />
      {like}
    </div>
  );
};
const Posting = (props) => {
  const { data } = props;
  return (
    <div className="posting">
      {data.map((element) => (
        <Postes like={element.likes} url={element.url} />
      ))}
    </div>
  );
};

export default Posting;
