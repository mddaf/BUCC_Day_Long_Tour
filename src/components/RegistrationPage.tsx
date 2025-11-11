interface RegistrationPageProps {
  isDarkMode: boolean;
}

export function RegistrationPage({ isDarkMode }: RegistrationPageProps) {
  return (
    <>
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 border-4 border-fuchsia-500 rounded-2xl p-8 shadow-2xl ${
          isDarkMode 
            ? 'bg-gray-800/60 backdrop-blur-xl' 
            : 'bg-white/80 backdrop-blur-xl'
        }`}>
          <h1 className={`text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-[#1E7FDB]'
          }`}>
            Event Registration
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Fill out the form below to secure your spot for BUCC Day Long Tour 2025
          </p>
        </div>

        {/* Google Form Embed Container */}
        <div className={`rounded-2xl overflow-hidden shadow-2xl ${
          isDarkMode 
            ? 'bg-gray-800/60 backdrop-blur-xl border border-gray-700' 
            : 'bg-white/80 backdrop-blur-xl'
        }`}>
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full border-4 border-fuchsia-500 rounded-2xl"
            title="Registration Form"
          >
            Loading…
          </iframe>
        </div>

        
      </div>
    </div>
    
    {/* Registration Page Footer */}
    <footer className={`py-6 text-center ${
      isDarkMode 
        ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
        : 'bg-gradient-to-r from-cyan-50 to-blue-100'
    }`}>
      <p className={`text-sm ${
        isDarkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        © 2025 BUCC Day Long Tour. All rights reserved.
      </p>
    </footer>
    </>
  );
}