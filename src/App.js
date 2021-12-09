import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/BannerAlert/Banner';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Banner />      
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
        </Routes>  
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
