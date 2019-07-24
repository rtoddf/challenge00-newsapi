import React from "react";
import newsapi from "../api/newsapi";
import SourceOption from "./SourceOption";

// const getNewsSources = async () => {
//   const sources = await newsapi.get("/v2/sources", {
//     params: {
//       language: "en"
//     }
//   });

//   console.log("getNewsSources: ", sources.data.sources);
//   this.setState({ sources: sources.data.sources });
// };

class SourceSelector extends React.Component {
  state = { sources: [], term: "" };

  componentDidMount = async () => {
    // getNewsSources();

    const sources = await newsapi.get("/v2/sources", {
      params: {
        language: "en"
      }
    });

    console.log(sources.data.sources);

    this.setState({ sources: sources.data.sources });
  };

  onSelectChange = e => {
    console.log("change: ", e.target.value);

    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <div>
        <select onChange={this.onSelectChange}>
          <SourceOption sources={this.state.sources} />
        </select>
      </div>
    );
  }
}

export default SourceSelector;
