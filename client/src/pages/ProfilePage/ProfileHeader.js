import React from "react";
import Image from "react-bootstrap/Image";

const profileHeader = props => {
  return (
    <>
    <Image 
      src="../assets/pic.jpg"  
      roundedCircle
      style={{ width: "100px" }}
    />

    <h3>{props.username}</h3>
    </>
      
  );
};

export default profileHeader;