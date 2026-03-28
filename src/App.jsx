import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dhika from "./pages/Dhika"; // <-- 1. Tambahkan baris import ini

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 2. Tambahkan baris Route di bawah ini */}
        <Route path="/dhika" element={<Dhika />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;