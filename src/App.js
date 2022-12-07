import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AvailableCapsule from "./pages/AvailableCapsule";
import Info from "./pages/Info";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/capsule" element={<AvailableCapsule />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
