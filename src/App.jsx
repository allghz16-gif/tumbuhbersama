import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dhika from "./pages/Dhika";
import Zaki from "./pages/Zaki"; 
import James from "./pages/James";
import Hapizh from "./pages/Hapizh"; // Pastikan ini sudah diimpor

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dhika" element={<Dhika />} />
        <Route path="/" element={<Home />} />
        <Route path="/zaki" element={<Zaki />} />
        <Route path="/james" element={<James />} />
        <Route path="/hapizh" element={<Hapizh />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;