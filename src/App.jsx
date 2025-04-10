import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/common/Header/Header';
import Footer from './Components/common/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
      
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
