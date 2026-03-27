import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dhika from "./pages/Dhika";
import Hapiz from "./pages/Hapiz";
import Zaki from "./pages/Zaki";
import James from "./pages/James";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dhika-alghazali" element={<Dhika />} />
        <Route path="/hapiz" element={<Hapiz />} />
        <Route path="/zaki" element={<Zaki />} />
        <Route path="/james" element={<James />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;