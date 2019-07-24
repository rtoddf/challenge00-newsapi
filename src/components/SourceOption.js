import React from "react";

const SourceOption = props => {
  const sources = props.sources.map((source, index) => {
    return (
      <option key={index} value="{source.id}">
        {source.name}
      </option>
    );
  });

  return sources;
};

export default SourceOption;
