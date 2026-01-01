import { Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-[#0D0D0D] border-t border-[#C9A66B]/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-[#C9A66B]" />
            <span className="font-['Playfair_Display'] text-3xl font-bold text-[#FDFCF7]">
              Quantum Studios
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-12">
            <a href="#services" className="font-['Inter'] text-base text-[#FDFCF7] hover:text-[#C9A66B] transition-colors">
              Services
            </a>
            <a href="#work" className="font-['Inter'] text-base text-[#FDFCF7] hover:text-[#C9A66B] transition-colors">
              Work
            </a>
            <a href="mailto:contact@quantumstudios.com" className="font-['Inter'] text-base text-[#FDFCF7] hover:text-[#C9A66B] transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="border-t border-[#C9A66B]/20 pt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Inter'] text-base text-[#FDFCF7]">
            © 2024 Quantum Studios. Built with purpose.
          </p>

          <p className="font-['Inter'] text-base text-[#FDFCF7]">
            Simple. Premium. Honest.
          </p>
        </div>
      </div>
    </footer>
  );
};
