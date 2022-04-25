import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { LikedVideoProvider, VideoListingProvider, WatchLaterProvider } from "contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoListingProvider>
        <WatchLaterProvider>
          <LikedVideoProvider>
            <App />
          </LikedVideoProvider>
        </WatchLaterProvider>
      </VideoListingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
