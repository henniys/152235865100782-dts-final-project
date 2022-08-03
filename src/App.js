import { Route } from "react-router-dom";
import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
