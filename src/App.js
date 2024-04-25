import { Routes, Route } from "react-router-dom";
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import Main from './pages/Home/Home';
import Location from "./pages/location/Location";
import Amenities from "./pages/amenities/Amenities";
import Rooms from "./pages/rooms/Rooms";
import Pricing from "./pages/price/Price";
import Galery from "./pages/gallery/Galery";

function App() {
  return (
    <div style={{ width: "100vw", height: "auto", padding: "12px", boxSizing: "border-box", background: "rgb(14,88,76)"}}>
      <div style={{ background: "rgb(245,238,233)"}}>
        <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/location" element={<Location />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/price" element={<Pricing />} />
            <Route path="/gallery" element={<Galery />} />
          </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
