import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Mail } from 'lucide-react';

export const CTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="py-120 px-6 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,166,107,0.1),transparent_70%)]" />

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="font-['Playfair_Display'] text-6xl md:text-8xl font-bold text-[#FDFCF7] mb-12 leading-tight">
            Ready to Bring Your
            <br />
            <span className="text-[#C9A66B]">Vision to Life?</span>
          </h2>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="font-['Inter'] text-xl text-[#FDFCF7] mb-16 leading-[1.6]">
            Let's build something remarkable. We'll deliver on time, exceed expectations, and keep it simple.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <a
            href="mailto:contact@quantumstudios.com"
            className="group relative px-10 py-4 border border-[#C9A66B] rounded-lg text-[#C9A66B] font-['Inter'] font-semibold overflow-hidden hover:text-[#0D0D0D] transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Mail className="w-5 h-5" />
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-[#C9A66B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>

          <a
            href="#services"
            className="group relative px-10 py-4 border border-[#C9A66B] rounded-lg text-[#C9A66B] font-['Inter'] font-semibold overflow-hidden hover:text-[#0D0D0D] transition-all duration-500"
          >
            <span className="relative z-10">View Services Again</span>
            <div className="absolute inset-0 bg-[#C9A66B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </div>

        <div className={`mt-120 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="p-8 border border-[#C9A66B]/20 rounded-lg">
            <div className="text-3xl font-['Playfair_Display'] text-[#C9A66B] mb-4">Quick</div>
            <div className="font-['Inter'] text-[#FDFCF7] text-base">5-7 day turnaround</div>
          </div>
          <div className="p-8 border border-[#C9A66B]/20 rounded-lg">
            <div className="text-3xl font-['Playfair_Display'] text-[#C9A66B] mb-4">Honest</div>
            <div className="font-['Inter'] text-[#FDFCF7] text-base">Fixed rates, no surprises</div>
          </div>
          <div className="p-8 border border-[#C9A66B]/20 rounded-lg">
            <div className="text-3xl font-['Playfair_Display'] text-[#C9A66B] mb-4">Quality</div>
            <div className="font-['Inter'] text-[#FDFCF7] text-base">Excellent every time</div>
          </div>
        </div>
      </div>
    </section>
  );
};
