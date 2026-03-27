import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dhika from "./pages/Dhika";
import Zaki from "./pages/Zaki";
import Hapiz from "./pages/Hapiz";
import James from "./pages/James";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dhika-alghazali" element={<Dhika />} />
        <Route path="/zaki" element={<Zaki />} />
        <Route path="/hapiz" element={<Hapiz />} />
        <Route path="/james" element={<James />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;