import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import James from "./pages/James";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/james" element={<James />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;