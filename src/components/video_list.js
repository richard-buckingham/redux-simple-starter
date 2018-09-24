import React from "react";

const VideoList = props => {
  return (
    <ul className="col-md-4 list-group">
      <ol>{props.videos.length}</ol>
    </ul>
  );
};

export default VideoList;
