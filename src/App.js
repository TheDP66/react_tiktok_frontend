import "./App.css";
import { Helmet } from "react-helmet";
import axios from "./axios";

import Video from "./Video";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const TITLE = "Tiktok Clone";

function isMobileDevice() {
  return "ontouchstart" in window || "onmsgesturechange" in window;
}

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className="app__videos">
        {isMobile ? <h1>Mobile</h1> : <h1>Desktop</h1>}
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => {
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />;
          }
        )}
        <Video
          url={
            "https://v16-webapp.tiktok.com/4c8fc20acb96ade285b0fbf34b51ec94/61e1b64a/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/4790dade1a104d2e9a9d84263d29e64b/?a=1988&br=3998&bt=1999&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39inz7ThxYYRlXq&l=2022011411432101024524500202D14DE0&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hydDM6Zmg5OjMzZjgzM0ApZzczNmRoNjtoNzs4ZmloNGctZmU2cjRfLWNgLS1kL2NzczFjNmNiMF5hNDMwLTQvNmM6Yw%3D%3D&vl=&vr="
          }
          channel={isMobile ? "Mobile" : "Desktop"}
          description="abcde efghijk mnlkjlafds nkjdf"
          song="99 problems but react ain one"
          likes={111}
          shares={222}
          messages={333}
        />
        <Video
          url={
            "https://v16-webapp.tiktok.com/93e39bddb799de6f034d5806da031daa/61e1b644/video/tos/alisg/tos-alisg-pve-0037c001/71fad36705ce46269be52d701d71ce29/?a=1988&br=4034&bt=2017&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-39inz7ThxYYRlXq&l=2022011411432101024524500202D14DE0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2h2bmg6ZnBlOTMzODczNEApaTQ4M2U0NDs6N2ZpO2U8ZGdyLW9rcjRfbmhgLS1kMS1zc2IzXzM2MjMwXjYwLl4yYi06Yw%3D%3D&vl=&vr="
          }
          channel="TheDP66"
          description="abcde efghijk mnlkjlafds nkjdf"
          song="99 problems but react ain one"
          likes={111}
          shares={222}
          messages={333}
        />
      </div>
      {/* APP CONTAINER */}
      {/* VIDEOS */}
    </div>
  );
}

export default App;
