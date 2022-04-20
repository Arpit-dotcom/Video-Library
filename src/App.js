import { Footer, Navbar } from "components";
import "./App.css";
import { LikedVideos } from "pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LikedVideos />
      <Footer />
    </div>
  );
}

export default App;
