import "./App.css";
import Navbar from "./Nav/Nav";
import Home from "./Home/Home";

function App() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
