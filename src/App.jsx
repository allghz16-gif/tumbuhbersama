import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dhika from "./Dhika.jsx"; 
import Zaki from "./Zaki.jsx";
import James from "./James.jsx";
import Hapiz from "./Hapiz.jsx";

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