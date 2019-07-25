import React from "react";

const Header = props => {
  //   console.log("header:, ", props.publisher.source);

  console.log(
    "props.src: ",
    props.src && props.src.source && props.src.source.name
      ? props.src.source.name
      : ""
  );

  return (
    <h3>
      {props.src && props.src.source && props.src.source.name
        ? props.src.source.name
        : ""}
    </h3>
  );
};

export default Header;
