import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { VideoListingProvider, WatchLaterProvider } from "contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoListingProvider>
        <WatchLaterProvider>
          <App />
        </WatchLaterProvider>
      </VideoListingProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
