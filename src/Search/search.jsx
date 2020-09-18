import React from "react";
import Posts from "./component/Posts"
import { Card, Typography } from "@material-ui/core";

const Search = () => {
  const data = [
    { url: "https://picsum.photos/200/300" },
    { url: "https://picsum.photos/200/301" },
    { url: "https://picsum.photos/200/302" },
    { url: "https://picsum.photos/200/303" },
    { url: "https://picsum.photos/200/304" },
    { url: "https://picsum.photos/200/305" },
  ];

  return (
    <div className="Search-container">
      <div className="Search-comp">
        <Card display="flex">
          <Posts data={data}/>
        </Card>
      </div>
    </div>
  );
};

export default Search;
