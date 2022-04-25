import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { HistoryProvider, LikedVideoProvider, VideoListingProvider, WatchLaterProvider } from "contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoListingProvider>
        <HistoryProvider>
          <WatchLaterProvider>
            <LikedVideoProvider>
              <App />
            </LikedVideoProvider>
          </WatchLaterProvider>
        </HistoryProvider>
      </VideoListingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
