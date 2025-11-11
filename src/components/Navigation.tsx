import { Moon, Sun, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import BuccLogo from "../imports/bucc-logo.svg";

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export function Navigation({ isDarkMode, toggleTheme }: NavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // Close mobile menu
    setIsMobileMenuOpen(false);
    
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

  const navLinks = [
    { id: "details", label: "What's Included" },
    { id: "itinerary", label: "Schedule" },
    { id: "terms", label: "Terms and Condition" },
    { id: "contact", label: "Contacts" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 ${
      isDarkMode 
        ? 'bg-gray-900/80 border-gray-700' 
        : 'bg-white/80 border-purple-200'
    } backdrop-blur-md border-b z-50 shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center ml-0 md:-ml-6">
            <button onClick={() => navigate('/')} className="focus:outline-none">
              <img 
                src={BuccLogo} 
                alt="BUCC Logo" 
                className={`h-10 w-auto transition-all ${
                  isDarkMode ? 'brightness-0 invert' : ''
                }`} 
              />
            </button>
          </div>

          {/* Desktop Navigation Links */}
          {location.pathname === '/' && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`${
                    isDarkMode 
                      ? 'text-gray-200 hover:text-fuchsia-400' 
                      : 'text-gray-800 hover:text-fuchsia-600'
                  } transition-colors`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
          
          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
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
            
            {/* Register/Home Button - Hidden on small mobile */}
            {location.pathname === '/' ? (
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScExVF0Ii7g9A_IgqEI0Gp54bVNduyTddoNE3y3ZYQmjGZ2JQ/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-fuchsia-700 hover:to-pink-700 transition-all shadow-lg shadow-fuchsia-500/50"
              >
                Register Now
              </a>
            ) : (
              <button
                onClick={() => navigate('/')}
                className="hidden sm:block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/50"
              >
                Home
              </button>
            )}
            
            {/* Mobile Menu Button - Only show on home page */}
            {location.pathname === '/' && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition-all`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Drawer */}
      {location.pathname === '/' && (
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className={`px-4 pt-2 pb-4 space-y-2 ${
            isDarkMode 
              ? 'bg-gray-900/95 border-gray-700' 
              : 'bg-white/95 border-purple-200'
          } border-t backdrop-blur-md`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  isDarkMode 
                    ? 'text-gray-200 hover:bg-gray-800 hover:text-fuchsia-400' 
                    : 'text-gray-800 hover:bg-purple-50 hover:text-fuchsia-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Register Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScExVF0Ii7g9A_IgqEI0Gp54bVNduyTddoNE3y3ZYQmjGZ2JQ/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-fuchsia-700 hover:to-pink-700 transition-all shadow-lg shadow-fuchsia-500/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}