import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Zaki from "./pages/Zaki";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zaki" element={<Zaki />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;