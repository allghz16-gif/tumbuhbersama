import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dhika from "./Dhika.jsx"; 
import Zaki from "./Zaki.jsx";
import James from "./James.jsx";
import Hapiz from "./Hapiz.jsx";
import ain from "./main.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dhika-alghazali" element={<Dhika />} />
        <Route path="/rifqi-ardhian" element={<Zaki />} />
        <Route path="/ahmad-akbar" element={<Hapiz />} />
        <Route path="/rifqi-ardhian" element={<main />} />
        <Route path="/ahmad-akbar" element={<James />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;