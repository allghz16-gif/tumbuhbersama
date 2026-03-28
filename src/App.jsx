import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dhika from "./pages/Dhika";
import Zaki from "./pages/Zaki"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dhika" element={<Dhika />} />
        <Route path="/" element={<Home />} />
        <Route path="/zaki" element={<Zaki />} /> {/* Pastikan path ini "/zaki" */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;