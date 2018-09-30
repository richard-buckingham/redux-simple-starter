import React, { Component } from "react";
import ReactDom from "react-dom";

import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyBnE_nY5cJoe-IY6dgjy2pIx-3IhH1Xy0Y";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    console.log("in videoSearch. term = ", term);
    YTSearch({ key: API_KEY, term: term }, videos => {
      console.log(
        "Calling setState with the following videos from youtube... ",
        videos
      );

      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => {
            console.log("selectedVideo is", selectedVideo);
            return this.setState({ selectedVideo });
          }}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector(".container"));
