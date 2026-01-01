import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="py-120 px-6 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A66B] to-transparent opacity-30" />

      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-[#FDFCF7] mb-16">
            Where Vision Meets <span className="text-[#C9A66B]">Craft</span>
          </h2>
        </div>

        <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="font-['Inter'] text-xl text-[#FDFCF7] leading-[1.6]">
            We're a boutique studio that doesn't believe in shortcuts. No templates. No cookie-cutter solutions.
          </p>

          <p className="font-['Inter'] text-xl text-[#FDFCF7] leading-[1.6]">
            Every project gets our full focus. We write clean code, craft intentional motion, and build experiences that actually convert. Your vision deserves that level of care.
          </p>

          <p className="font-['Inter'] text-xl text-[#FDFCF7] leading-[1.6]">
            The result? Websites that feel premium. Visuals that elevate your brand. Quiet confidence in every frame.
          </p>
        </div>

        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center">
            <div className="text-4xl font-['Playfair_Display'] text-[#C9A66B] mb-2">5-7</div>
            <div className="font-['Inter'] text-[#FDFCF7]">Days Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-['Playfair_Display'] text-[#C9A66B] mb-2">1</div>
            <div className="font-['Inter'] text-[#FDFCF7]">Revision Included</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-['Playfair_Display'] text-[#C9A66B] mb-2">100%</div>
            <div className="font-['Inter'] text-[#FDFCF7]">Dedicated to Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
};
