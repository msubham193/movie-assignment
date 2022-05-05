import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Registration } from "./Pages/Registration/Registration";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
