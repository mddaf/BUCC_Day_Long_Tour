import { MapPin, Bus, Handshake, Trophy, Dumbbell, Utensils, Gamepad2, Music, Zap, Cookie, Clock } from "lucide-react";

interface ItineraryProps {
  isDarkMode: boolean;
}

export function Itinerary({ isDarkMode }: ItineraryProps) {
  const schedule = [
    { time: "7:00 AM", activity: "Meet at University Campus", icon: MapPin, color: "from-purple-500 to-fuchsia-500" },
    { time: "7:30 AM", activity: "Journey Start", icon: Bus, color: "from-fuchsia-500 to-pink-500" },
    { time: "9:30 AM", activity: "Ice-Breaking Session", icon: Handshake, color: "from-pink-500 to-rose-500" },
    { time: "10:00 AM", activity: "Tic-Tac-Toe", icon: Trophy, color: "from-rose-500 to-orange-500" },
    { time: "11:00 AM - 1:00 PM", activity: "Sports Session (Football & Cricket)", icon: Dumbbell, color: "from-orange-500 to-amber-500" },
    { time: "1:00 PM - 2:30 PM", activity: "Lunch & Prayer Break", icon: Utensils, color: "from-amber-500 to-yellow-500" },
    { time: "2:30 PM - 3:00 PM", activity: "Indoor Activity", icon: Gamepad2, color: "from-yellow-500 to-green-500" },
    { time: "3:00 PM - 4:00 PM", activity: "Musical Chairs", icon: Music, color: "from-green-500 to-cyan-500" },
    { time: "4:00 PM - 5:00 PM", activity: "Tug of War", icon: Zap, color: "from-cyan-500 to-blue-500" },
    { time: "5:00 PM - 6:00 PM", activity: "Snacks & Prize Distribution", icon: Cookie, color: "from-blue-500 to-indigo-500" },
    { time: "6:00 PM", activity: "Departure", icon: Clock, color: "from-indigo-500 to-violet-500" },
  ];

  return (
    <section id="itinerary" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`inline-block relative pb-8 text-5xl font-bold ${
            isDarkMode ? 'text-white' : 'text-[#1E7FDB]'
          }`}>
            Schedule
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-[5px] bg-[#E91E8C] rounded-full"></span>
          </h2>
        </div>
        
        <div className="relative">
          {/* Animated gradient timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-fuchsia-500 via-pink-500 via-cyan-500 to-blue-500 rounded-full shadow-lg"></div>
          
          <div className="space-y-6">
            {schedule.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative flex gap-6 items-start group">
                  {/* Enhanced timeline dot with icon */}
                  <div className="flex-shrink-0 w-16 flex items-center justify-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative z-10 border-4 ${
                      isDarkMode ? 'border-gray-900' : 'border-white'
                    }`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Enhanced content card */}
                  <div className={`flex-1 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border-cyan-400/40 hover:border-cyan-400/60' 
                      : 'bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md border-cyan-400/50 hover:border-cyan-500'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`px-4 py-1.5 rounded-full ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/40' 
                          : 'bg-gradient-to-r from-cyan-400/40 to-blue-400/40 border border-cyan-500/60'
                      }`}>
                        <p className={`font-bold ${
                          isDarkMode ? 'text-cyan-300' : 'text-cyan-700'
                        }`}>{item.time}</p>
                      </div>
                    </div>
                    <p className={`text-lg ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>{item.activity}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}