import React, { Component } from "react";
import ReactDom from "react-dom";

import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "AIzaSyBnE_nY5cJoe-IY6dgjy2pIx-3IhH1Xy0Y";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      console.log("videos = ", videos);
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector(".container"));
