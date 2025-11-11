import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { MobileCallToAction } from "./components/MobileCallToAction";
import { LocationGallery } from "./components/LocationGallery";
import { WhatsIncluded } from "./components/WhatsIncluded";
import { Itinerary } from "./components/Itinerary";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { RegistrationPage } from "./components/RegistrationPage";
import { Footer } from "./components/Footer";
import darkBgImage from './assets/darkbg.png';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div 
        className={`min-h-screen ${
          isDarkMode 
            ? 'bg-gray-900' 
            : 'bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200'
        }`}
        style={isDarkMode ? {
          backgroundImage: `url(${darkBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        } : {}}
      >
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero isDarkMode={isDarkMode} />
              <MobileCallToAction isDarkMode={isDarkMode} />
              <LocationGallery isDarkMode={isDarkMode} />
              <WhatsIncluded isDarkMode={isDarkMode} />
              <Itinerary isDarkMode={isDarkMode} />
              <TermsAndConditions isDarkMode={isDarkMode} />
              <Footer isDarkMode={isDarkMode} />
            </>
          } />
          <Route path="/register" element={
            <RegistrationPage isDarkMode={isDarkMode} />
          } />
        </Routes>
      </div>
    </Router>
  );
}