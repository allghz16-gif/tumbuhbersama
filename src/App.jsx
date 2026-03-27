import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dhika from "./pages/Dhika";
import Zaki from "./pages/Zaki";
import James from "./pages/James";
import Hapiz from "./pages/Hapiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dhika-alghazali" element={<Dhika />} />
        <Route path="/rifqi-ardhian" element={<Rifqi />} />
        <Route path="/ahmad-akbar" element={<Akbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;