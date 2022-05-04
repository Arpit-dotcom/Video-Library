import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  HistoryProvider,
  LikedVideoProvider,
  PlaylistProvider,
  VideoListingProvider,
  WatchLaterProvider,
} from "contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <VideoListingProvider>
          <PlaylistProvider>
            <HistoryProvider>
              <WatchLaterProvider>
                <LikedVideoProvider>
                  <App />
                </LikedVideoProvider>
              </WatchLaterProvider>
            </HistoryProvider>
          </PlaylistProvider>
        </VideoListingProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
