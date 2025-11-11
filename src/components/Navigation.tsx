import { Moon, Sun } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import BuccLogo from "../imports/bucc-logo.svg";

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function Navigation({ isDarkMode, toggleTheme }: NavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 ${
      isDarkMode 
        ? 'bg-gray-900/80 border-gray-700' 
        : 'bg-white/80 border-purple-200'
    } backdrop-blur-md border-b z-50 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center -ml-6">
            <button onClick={() => navigate('/')} className="focus:outline-none">
              <img 
                src={BuccLogo} 
                alt="BUCC Logo" 
                className={`h-14 w-auto transition-all ${
                  isDarkMode ? 'brightness-0 invert' : ''
                }`} 
              />
            </button>
          </div>

          {/* Navigation Links */}
          {location.pathname === '/' && (
            <div className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection("details")}
                className={`${
                  isDarkMode 
                    ? 'text-gray-200 hover:text-fuchsia-400' 
                    : 'text-gray-800 hover:text-fuchsia-600'
                } transition-colors`}
              >
                What's Included
              </button>
              <button
                onClick={() => scrollToSection("itinerary")}
                className={`${
                  isDarkMode 
                    ? 'text-gray-200 hover:text-fuchsia-400' 
                    : 'text-gray-800 hover:text-fuchsia-600'
                } transition-colors`}
              >
                Schedule
              </button>
              <button
                onClick={() => scrollToSection("terms")}
                className={`${
                  isDarkMode 
                    ? 'text-gray-200 hover:text-fuchsia-400' 
                    : 'text-gray-800 hover:text-fuchsia-600'
                } transition-colors`}
              >
                Terms and Condition
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`${
                  isDarkMode 
                    ? 'text-gray-200 hover:text-fuchsia-400' 
                    : 'text-gray-800 hover:text-fuchsia-600'
                } transition-colors`}
              >
                Contacts
              </button>
            </div>
          )}
          
          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition-all`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            {location.pathname === '/' ? (
              <button
                onClick={() => navigate('/register')}
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-fuchsia-700 hover:to-pink-700 transition-all shadow-lg shadow-fuchsia-500/50"
              >
                Register Now
              </button>
            ) : (
              <button
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/50"
              >
                Home
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}