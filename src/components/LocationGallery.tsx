import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import poolImage from '../assets/bird.jfif';
import gardenImage from '../assets/field.jfif';
import houseImage from '../assets/house.jfif';
import roadImage from '../assets/road.jfif';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";

interface LocationGalleryProps {
  isDarkMode: boolean;
}

export function LocationGallery({ isDarkMode }: LocationGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const galleryImages = [
    {
      url: poolImage,
      alt: "Resort Bird Eye View"
    },
    {
      url: gardenImage,
      alt: "Resort Field View"
    },
    {
      url: houseImage,
      alt: "Resort House View"
    },
    {
      url: roadImage,
      alt: "Resort Road View"
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play functionality
    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with underline */}
        <div className="text-center mb-16">
          <h2 className={`inline-block relative pb-8 text-5xl font-bold ${
            isDarkMode ? 'text-white' : 'text-[#1E7FDB]'
          }`}>
            Resort Gallery & Location
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-[5px] bg-[#E91E8C] rounded-full"></span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Gallery Carousel */}
          <div className={`group ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border-2 border-cyan-400/40' 
              : 'bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-lg border-2 border-purple-300/60'
          } rounded-2xl overflow-hidden shadow-2xl hover:shadow-fuchsia-500/30 transition-all duration-300 hover:scale-[1.02]`}>
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[4/3] relative">
                      <ImageWithFallback
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      {/* Image overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-lg font-semibold">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className={`left-4 ${
                isDarkMode 
                  ? 'bg-white/20 backdrop-blur-sm border-cyan-400/50 text-white hover:bg-white/30' 
                  : 'bg-white/80 backdrop-blur-sm border-cyan-400 text-gray-800 hover:bg-white/90'
              }`} />
              <CarouselNext className={`right-4 ${
                isDarkMode 
                  ? 'bg-white/20 backdrop-blur-sm border-cyan-400/50 text-white hover:bg-white/30' 
                  : 'bg-white/80 backdrop-blur-sm border-cyan-400 text-gray-800 hover:bg-white/90'
              }`} />
            </Carousel>
            
            {/* Dots indicator */}
            <div className={`flex justify-center gap-2 py-5 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-gray-800/50 to-gray-900/50' 
                : 'bg-gradient-to-r from-purple-100/70 to-pink-100/70'
            }`}>
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? isDarkMode 
                        ? "bg-gradient-to-r from-cyan-400 to-blue-400 w-8" 
                        : "bg-gradient-to-r from-cyan-600 to-blue-600 w-8"
                      : "w-2.5 bg-gray-400 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className={`group ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border-2 border-cyan-400/40' 
              : 'bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-lg border-2 border-purple-300/60'
          } rounded-2xl overflow-hidden shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-[1.02]`}>
            <div className={`p-6 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-fuchsia-600/30 to-pink-600/30 border-b-2 border-cyan-400/40' 
                : 'bg-gradient-to-r from-fuchsia-600/20 to-pink-600/20 border-b-2 border-cyan-500/60'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  isDarkMode 
                    ? 'bg-fuchsia-400/20' 
                    : 'bg-fuchsia-100'
                }`}>
                  <MapPin className={`w-6 h-6 ${isDarkMode ? 'text-fuchsia-400' : 'text-fuchsia-600'}`} />
                </div>
                <h3 className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Resort Location</h3>
              </div>
            </div>
            <div className="aspect-[4/3] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.6396842518902!2d90.44288617605885!3d24.11416347471264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755d99d3803b7cd%3A0xe68b9ebcb437c3db!2sSAHEB%20BARI%20RESORT!5e0!3m2!1sen!2sbd!4v1762821642741!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}