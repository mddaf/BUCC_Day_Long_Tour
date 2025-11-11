import { Check } from "lucide-react";
import { Card } from "./ui/card";

interface WhatsIncludedProps {
  isDarkMode: boolean;
}

export function WhatsIncluded({ isDarkMode }: WhatsIncludedProps) {
  const includedItems = [
    "Bus Transportation",
    "Breakfast",
    "Lunch",
    "Deluxe AC Rooms",
    "Swimming Pool Access",
    "Event T-shirt",
    "Photography Session",
    "Snacks",
    "Indoor Games",
    "Team Activities",
    "Gifts & Prizes",
    "First Aid Support",
  ];

  return (
    <section id="details" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`inline-block relative pb-8 text-5xl font-bold ${
            isDarkMode ? 'text-white' : 'text-[#1E7FDB]'
          }`}>
            What's Included
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-[5px] bg-[#E91E8C] rounded-full"></span>
          </h2>
        </div>
        
        {/* Registration Fee Card - Enhanced Design */}
        <Card className="py-6 px-8 mb-10 rounded-2xl border-2 bg-white/90 backdrop-blur-md border-fuchsia-500 text-center shadow-lg">
          <p className="text-4xl font-bold text-fuchsia-600">
            Registration Fee: 1,599 TK
          </p>
        </Card>

        {/* Included Items Grid - Enhanced Design */}
        <div className="grid md:grid-cols-2 gap-5">
          {includedItems.map((item, index) => (
            <div key={index} className={`flex items-center gap-4 p-5 rounded-xl border-2 shadow-md transition-all hover:shadow-lg hover:scale-[1.02] ${
              isDarkMode 
                ? 'bg-white/10 backdrop-blur-md border-cyan-400/40 hover:border-cyan-400/60' 
                : 'bg-white/70 backdrop-blur-md border-cyan-400/60 hover:border-cyan-500'
            }`}>
              <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-md">
                <Check className="w-5 h-5 text-white stroke-[3]" />
              </div>
              <span className={`font-medium ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}