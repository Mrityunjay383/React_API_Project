import React from "react";

function Post(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} alt="img" />
    </div>
  );
}

export default Post;
