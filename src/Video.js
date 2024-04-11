import React, { useRef, useState } from "react";

import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={handleVideoPress}
        className="video__player"
        loop
        src={url}
        // src="https://v16m.tiktokcdn.com/f0b00a77e4a06d0924b4a84ccf21520f/5f50173b/video/tos/useast2a/tos-useaset2a-ve-0068c003/17701fe438be4573994ff56ebd54a762/?a=1233&br=2618&bt=1309&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020090216052101019020921630138937&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anRnbGY6bHlsdzMzNzczM0ApOzU3aWRlNWQ6N2Q5OjM4NmdzNWRwZ2liaTBfLS1eMTZzczYwYzBjMGIwMy9gMzVeljM6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
