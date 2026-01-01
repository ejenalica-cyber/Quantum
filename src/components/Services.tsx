import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Code, Palette, Video, Globe } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Landing Page Design',
    price: '175',
    description: 'A single, high-converting landing page. Responsive, modern, and built to capture attention.',
    details: ['1 Landing Page', 'Fully Responsive', 'Basic SEO Ready', 'Deployment Support'],
    note: 'Hosting and domain not included'
  },
  {
    icon: Code,
    title: 'Website Design (2 Pages)',
    price: '400',
    description: 'Two polished pages. Perfect for portfolios, small businesses, or product showcases.',
    details: ['2 Custom Pages', 'Mobile First Design', 'Performance Optimized', 'SEO Foundation'],
    note: 'Hosting and domain not included'
  },
  {
    icon: Palette,
    title: 'Personal Branding Visuals',
    price: '250',
    description: 'Complete visual identity. Colors, fonts, and 5 social assets to launch your brand.',
    details: ['Brand Color System', 'Typography Guide', '5 Social Media Designs', 'Source Files Included'],
    note: 'Strategy consultation not included'
  },
  {
    icon: Video,
    title: 'Long-Form to Short-Form Reels',
    price: '300',
    description: 'Transform one video into 8 viral-ready clips. Optimized for Instagram and TikTok.',
    details: ['8 Short-Form Reels', 'Platform Optimized', 'Professional Editing', '5-7 Day Delivery'],
    note: 'You provide the video content'
  }
];

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="services" className="py-120 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#1a1a1a] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,166,107,0.05),transparent_50%)]" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="font-['Playfair_Display'] text-6xl md:text-7xl font-bold text-[#FDFCF7] mb-8">
            Our <span className="text-[#C9A66B]">Services</span>
          </h2>
          <p className="font-['Inter'] text-xl text-[#FDFCF7] max-w-2xl mx-auto leading-[1.6]">
            Fixed pricing. No surprises. One revision included on every service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard key={index} service={service} icon={Icon} index={index} isVisible={isVisible} />
            );
          })}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="font-['Inter'] text-sm text-[#FDFCF7] mb-2">
            Every project includes one round of revisions. Typical delivery: 5-7 days.
          </p>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, icon: Icon, index, isVisible }: any) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-[#1a1a1a] to-[#0D0D0D] border border-[#C9A66B]/20 rounded-2xl p-8 hover:border-[#C9A66B]/50 transition-all duration-500 hover:transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${300 + index * 150}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A66B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="p-3 bg-[#C9A66B]/10 rounded-lg group-hover:bg-[#C9A66B]/20 transition-colors duration-300">
            <Icon className="w-8 h-8 text-[#C9A66B]" />
          </div>
          <div className="text-right">
            <div className="text-4xl font-['Playfair_Display'] font-bold text-[#C9A66B]">{service.price}</div>
            <div className="text-sm font-['Inter'] text-[#FDFCF7]">QAR</div>
          </div>
        </div>

        <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#FDFCF7] mb-4">
          {service.title}
        </h3>

        <p className="font-['Inter'] text-lg text-[#FDFCF7] mb-8 leading-[1.6]">
          {service.description}
        </p>

        <ul className="space-y-4 mb-8">
          {service.details.map((detail: string, idx: number) => (
            <li key={idx} className="flex items-center gap-3 font-['Inter'] text-base text-[#FDFCF7]">
              <div className="w-1.5 h-1.5 bg-[#C9A66B] rounded-full" />
              {detail}
            </li>
          ))}
        </ul>

        <p className="font-['Inter'] text-sm text-[#FDFCF7] italic mb-8">
          {service.note}
        </p>

        <button className="w-full py-3 px-6 border border-[#C9A66B] rounded-lg text-[#C9A66B] font-['Inter'] font-semibold relative overflow-hidden hover:text-[#0D0D0D] transition-all duration-500 group">
          <span className="relative z-10">Request This Service</span>
          <div className="absolute inset-0 bg-[#C9A66B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>
      </div>
    </div>
  );
};
