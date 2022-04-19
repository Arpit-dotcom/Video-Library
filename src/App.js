import { Footer, Navbar } from "components";
import "./App.css";
import { VideoListing } from "pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoListing />
      <Footer />
    </div>
  );
}

export default App;
