import heroImage from '../assets/banner.png';

interface HeroProps {
  isDarkMode: boolean;
}

export function Hero({ isDarkMode }: HeroProps) {
  const scrollToRegistration = () => {
    const element = document.getElementById("registration");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-16"
    >
      <img 
        src={heroImage} 
        alt="BUCC Day Long Tour 2025" 
        className="w-full h-auto cursor-pointer"
        onClick={scrollToRegistration}
      />
    </section>
  );
}