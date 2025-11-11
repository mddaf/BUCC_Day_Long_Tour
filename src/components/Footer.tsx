import eventLogo from '../assets/tourlogo2.png';
import { Mail, MapPin, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

export function Footer({ isDarkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={`${
      isDarkMode 
        ? 'bg-gray-900/60 border-gray-700 text-gray-300' 
        : 'bg-white/60 border-purple-200 text-gray-700'
    } backdrop-blur-md border-t py-8`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-6">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <img src={eventLogo} alt="BUCC Day Long Tour 2025" className="h-25 w-60" />
          </div>
          
          {/* Contact Info */}
          <div className="flex-1 max-w-md">
            <h3 className={`mb-4 tracking-wide ${isDarkMode ? 'text-fuchsia-400' : 'text-fuchsia-600'}`}>
              CONTACT US
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className={`w-5 h-5 flex-shrink-0 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <a href="mailto:bucc@g.bracu.ac.bd" className={`hover:underline ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  bucc@g.bracu.ac.bd
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className={`w-5 h-5 flex-shrink-0 mt-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                  BRAC University, Merul Badda, Dhaka-1212
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://www.facebook.com/share/1FpvY32z8i/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full border transition-colors ${
                    isDarkMode 
                      ? 'border-gray-600 hover:border-fuchsia-400 hover:bg-fuchsia-400/10' 
                      : 'border-gray-400 hover:border-fuchsia-600 hover:bg-fuchsia-100'
                  }`}
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/bracucc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full border transition-colors ${
                    isDarkMode 
                      ? 'border-gray-600 hover:border-fuchsia-400 hover:bg-fuchsia-400/10' 
                      : 'border-gray-400 hover:border-fuchsia-600 hover:bg-fuchsia-100'
                  }`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/bracucc?igsh=MXB5MjBrMTRhejVrMQ==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full border transition-colors ${
                    isDarkMode 
                      ? 'border-gray-600 hover:border-fuchsia-400 hover:bg-fuchsia-400/10' 
                      : 'border-gray-400 hover:border-fuchsia-600 hover:bg-fuchsia-100'
                  }`}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com/@bracucc?si=QJ3wybNYdlYUl4G6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full border transition-colors ${
                    isDarkMode 
                      ? 'border-gray-600 hover:border-fuchsia-400 hover:bg-fuchsia-400/10' 
                      : 'border-gray-400 hover:border-fuchsia-600 hover:bg-fuchsia-100'
                  }`}
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright text */}
        <div className="pt-6 border-t border-gray-700/50 text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {currentYear} BUCC Day Long Tour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}