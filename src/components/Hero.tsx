import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const [showHeadline, setShowHeadline] = useState(false);
  const [showSubheadline, setShowSubheadline] = useState(false);
  const [showCTAs, setShowCTAs] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowHeadline(true), 300);
    const timer2 = setTimeout(() => setShowSubheadline(true), 1200);
    const timer3 = setTimeout(() => setShowCTAs(true), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D0D0D] via-[#1a1a1a] to-[#0D0D0D] py-120">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,166,107,0.03),transparent_70%)]" />

      <div className="absolute inset-0 opacity-[0.015]"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")' }}
      />

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#C9A66B] opacity-5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A66B] opacity-5 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <Sparkles className={`w-8 h-8 text-[#C9A66B] transition-all duration-1000 ${showHeadline ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        </div>

        <h1 className={`font-['Playfair_Display'] text-6xl md:text-8xl lg:text-9xl font-bold text-[#FDFCF7] mb-12 leading-tight transition-all duration-1000 ${showHeadline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Crafting Digital Experiences<br />
          <span className="text-[#C9A66B]">That Feel Alive</span>
        </h1>

        <p className={`font-['Inter'] text-lg md:text-xl text-[#FDFCF7] max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-1000 delay-300 ${showSubheadline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Websites and visuals built to perform. Every detail matters. Every animation has purpose.
        </p>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-500 ${showCTAs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="#services" className="group relative px-8 py-4 border border-[#C9A66B] rounded-lg text-[#C9A66B] font-['Inter'] font-semibold overflow-hidden hover:text-[#0D0D0D] transition-all duration-500 animate-pulse-soft">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#C9A66B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>

          <a href="#services" className="group relative px-8 py-4 border border-[#C9A66B] rounded-lg text-[#C9A66B] font-['Inter'] font-semibold overflow-hidden hover:text-[#0D0D0D] transition-all duration-500">
            See Pricing & Services
            <div className="absolute inset-0 bg-[#C9A66B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#C9A66B] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#C9A66B] rounded-full" />
        </div>
      </div>
    </section>
  );
};
