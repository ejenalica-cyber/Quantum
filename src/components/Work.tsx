import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Luxury E-Commerce',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-end shopping site with smooth interactions and premium feel'
  },
  {
    title: 'Creative Portfolio',
    category: 'Landing Page',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Minimal, gallery-focused site that lets the work speak for itself'
  },
  {
    title: 'Brand System',
    category: 'Visual Design',
    image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete identity with palette, typography, and application guidelines'
  },
  {
    title: 'Social Campaign',
    category: 'Video Editing',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Series of short-form videos optimized for maximum engagement'
  }
];

export const Work = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-120 px-6 bg-[#E6E6E6] relative">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="font-['Playfair_Display'] text-6xl md:text-7xl font-bold text-[#0D0D0D] mb-8">
            Recent <span className="text-[#C9A66B]">Projects</span>
          </h2>
          <p className="font-['Inter'] text-xl text-[#0D0D0D] max-w-2xl mx-auto leading-[1.6]">
            A selection of work we're proud of.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isVisible }: any) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-[#0D0D0D] transition-all duration-700 hover:transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${200 + index * 150}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="mb-3 inline-flex">
          <span className="px-3 py-1 bg-[#C9A66B]/20 border border-[#C9A66B]/50 rounded-full text-xs font-['Inter'] text-[#C9A66B] backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#FDFCF7] mb-2">
          {project.title}
        </h3>

        <p className="font-['Inter'] text-[#FDFCF7] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-[#C9A66B] font-['Inter'] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
          View Project
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
