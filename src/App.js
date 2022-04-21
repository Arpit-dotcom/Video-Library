import { Footer, Navbar } from "components";
import "./App.css";
import { VideoPlayer } from "pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoPlayer />
      <Footer />
    </div>
  );
}

export default App;
