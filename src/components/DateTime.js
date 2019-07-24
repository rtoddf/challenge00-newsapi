import React from "react";
import Moment from "react-moment";

const DateTime = props => {
  return <Moment format="LLL" date={props.publishedAt} />;
};

export default DateTime;

// https://www.npmjs.com/package/react-moment
// https://momentjs.com/docs/#/parsing/string-format/
// https://momentjs.com/docs/#/parsing/string-format/
