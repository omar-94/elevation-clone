import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/BannerAlert/Banner';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Banner />
        <div className="pages">      
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
        </Routes> 
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
