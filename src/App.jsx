import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Tours from './Pages/Tours/Tours';
import TourDetail from './Pages/Tours/TourDetail';
import Booking from './Pages/Booking/Booking';
import Destination from './Pages/Destination/Destination';
import PhotoGallery from './Pages/PhotoGallery/PhotoGallery';
import Header from './Components/common/Header/Header';
import Footer from './Components/common/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tour-details' element={<TourDetail />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/gallery' element={<PhotoGallery />} />
      
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
