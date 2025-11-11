import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

interface MobileCallToActionProps {
  isDarkMode: boolean;
}

export function MobileCallToAction({ isDarkMode }: MobileCallToActionProps) {
  const navigate = useNavigate();

  return (
    <section className={`md:hidden px-4 py-6 ${
      isDarkMode 
        ? 'bg-gray-800/50 backdrop-blur-sm' 
        : 'bg-white/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-md mx-auto text-center space-y-4">
        {/* Call to Action Text */}
        <h2 className="text-[#1E7FDB] text-4xl font-bold">
          Claim your spot now!
        </h2>
        
        {/* Date */}
        <div className={`flex items-center justify-center gap-2 ${
          isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
        }`}>
          <Calendar className="w-5 h-5" />
          <span className="text-lg">December 05, 2025</span>
        </div>
        
        {/* Register Button */}
        <button
          onClick={() => navigate('/register')}
          className="w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-fuchsia-700 hover:to-pink-700 transition-all shadow-lg shadow-fuchsia-500/50 text-lg text-center"
        >
          Register Now
        </button>
      </div>
    </section>
  );
}