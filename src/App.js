import Landing from "./Landing";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
}

export default App;
