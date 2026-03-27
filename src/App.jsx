import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dhika from "./pages/Dhika";
// Sementara dihapus/dikomentar karena filenya belum ada
// import Zaki from "./pages/Zaki"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dhika" element={<Dhika />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;