'use client'
import { HiArrowUpRight } from 'react-icons/hi2';

interface ArticleEmbedProps {
  title: string;
  url: string;
  type: 'substack' | 'medium';
}

export default function ArticleEmbed({ title, url }: ArticleEmbedProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 rounded-lg border border-white/5 hover:bg-[#161616] hover:border-[#c9ada7]/30 transition-all duration-300"
    >
      <span className="text-gray-300 group-hover:text-[#c9ada7] transition-colors duration-300">
        {title}
      </span>
      
      <div className="text-[#c9ada7]/50 group-hover:text-[#c9ada7] group-hover:translate-x-0.5 transition-all duration-300">
        <HiArrowUpRight size={18} />
      </div>
    </a>
  );
}
