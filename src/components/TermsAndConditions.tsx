import { Shield, CreditCard, AlertTriangle, XCircle, Users, AlertCircle } from "lucide-react";

interface TermsAndConditionsProps {
  isDarkMode: boolean;
}

export function TermsAndConditions({ isDarkMode }: TermsAndConditionsProps) {
  const terms = [
    {
      title: "Eligibility",
      content: "Must be a BRAC University Computer Club (BUCC) member.",
      icon: Users,
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
      bgGradient: "from-purple-500/20 via-fuchsia-500/20 to-pink-500/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-fuchsia-600"
    },
    {
      title: "Payment",
      content: "Requires a non-refundable 1599 BDT pre-registration fee.",
      icon: CreditCard,
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      bgGradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600"
    },
    {
      title: "Transaction Responsibility",
      content: "You are fully responsible for any payment errors (e.g., wrong amount or number). Payments must be exact.",
      icon: AlertTriangle,
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      bgGradient: "from-yellow-500/20 via-orange-500/20 to-red-500/20",
      iconBg: "bg-gradient-to-br from-yellow-500 to-orange-600"
    },
    {
      title: "Refund Policy",
      content: "No refunds for participant cancellations. You will get a 100% refund only if the organizers cancel the event.",
      icon: XCircle,
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgGradient: "from-pink-500/20 via-rose-500/20 to-red-500/20",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      title: "Conduct",
      content: "Follow all university and resort rules. Misconduct may result in removal without a refund.",
      icon: Shield,
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "Liability",
      content: "Organizers are not liable for personal loss, injury, or damage to your belongings.",
      icon: AlertCircle,
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgGradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="terms" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`inline-block relative pb-8 text-5xl font-bold ${
            isDarkMode ? 'text-white' : 'text-[#1E7FDB]'
          }`}>
            Terms and Conditions
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-[5px] bg-[#E91E8C] rounded-full"></span>
          </h2>
        </div>

        {/* Terms Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {terms.map((term, index) => {
            const Icon = term.icon;
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gray-800/60 backdrop-blur-xl border border-gray-700' 
                    : 'bg-white/90 backdrop-blur-xl shadow-lg'
                }`}
              >
                {/* Content */}
                <div className="relative p-6">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${term.iconBg} p-3 rounded-2xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`bg-gradient-to-r ${term.gradient} bg-clip-text text-transparent`}>
                        {term.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`ml-[60px] leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {term.content}
                  </p>

                  {/* Decorative gradient bar at bottom */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${term.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className={`mt-12 relative overflow-hidden rounded-3xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-red-900/40 via-pink-900/40 to-red-900/40 backdrop-blur-xl border-2 border-red-500/50' 
            : 'bg-gradient-to-r from-red-50 via-pink-50 to-red-50 border-2 border-red-300'
        } p-8 shadow-xl`}>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 opacity-10"></div>
          <div className="relative flex items-center justify-center gap-4">
            <AlertCircle className={`w-8 h-8 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
            <p className={`text-center ${
              isDarkMode ? 'text-red-300' : 'text-red-700'
            }`}>
              <strong className="text-xl">Important:</strong> By registering for this event, you agree to all the terms and conditions listed above.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}