import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "They delivered exactly what we needed. Professional, fast, and the attention to detail is on another level.",
    author: "Sarah Al-Mansouri",
    role: "Founder, Luxe Boutique",
    rating: 5
  },
  {
    quote: "Unlike other agencies, they actually listened. The result was a website that perfectly captures our brand.",
    author: "Ahmed Hassan",
    role: "Marketing Director, TechVenture",
    rating: 5
  },
  {
    quote: "Best decision we made. Our conversion rate jumped 40% after launch. Worth every dirham.",
    author: "Maya Al-Thani",
    role: "CEO, Local Commerce",
    rating: 5
  }
];

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-120 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A66B] opacity-5 blur-[150px] rounded-full" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="font-['Playfair_Display'] text-6xl md:text-7xl font-bold text-[#FDFCF7] mb-8">
            What Clients <span className="text-[#C9A66B]">Say</span>
          </h2>
          <p className="font-['Inter'] text-xl text-[#FDFCF7] max-w-2xl mx-auto leading-[1.6]">
            Real feedback from real projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index, isVisible }: any) => {
  return (
    <div
      className={`relative bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] border border-[#C9A66B]/20 rounded-2xl p-8 transition-all duration-1000 hover:border-[#C9A66B]/50 hover:transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${300 + index * 200}ms` }}
    >
      <Quote className="w-12 h-12 text-[#C9A66B] opacity-30 mb-8" />

      <p className="font-['Inter'] text-[#FDFCF7] text-lg leading-[1.6] mb-8">
        "{testimonial.quote}"
      </p>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-[#C9A66B]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <div className="border-t border-[#C9A66B]/20 pt-4">
        <div className="font-['Inter'] font-semibold text-[#FDFCF7]">
          {testimonial.author}
        </div>
        <div className="font-['Inter'] text-sm text-[#FDFCF7]">
          {testimonial.role}
        </div>
      </div>
    </div>
  );
};
