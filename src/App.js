import { Footer, Navbar } from "components";
import "./App.css";
import { Playlist } from "pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Playlist />
      <Footer />
    </div>
  );
}

export default App;
