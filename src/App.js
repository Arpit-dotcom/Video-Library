import { Footer, Navbar } from "components";
import "./App.css";
import { Home } from "pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
