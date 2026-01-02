import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  tag?: string;
  imageColor?: string;
  className?: string;
  height?: string;
  dark?: boolean;
  coverImage?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  tag = "New Project",
  imageColor = "#1a1a1a",
  className = "",
  height = "420px",
  dark = true,
  coverImage,
  onClick
}) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative rounded-[40px] overflow-hidden flex flex-col p-8 cursor-pointer group shadow-[0_10px_40px_rgba(0,0,0,0.02)] isolate transform-gpu will-change-transform",
        dark ? "text-white" : "text-[#1a1a1a]",
        className
      )}
      style={{
        height,
        backgroundColor: imageColor,
        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
      }}
    >
      {/* Cover Image */}
      {coverImage && (
        <div
          className="absolute inset-0 z-0 overflow-hidden rounded-[40px]"
          style={{ transform: 'translateZ(0)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
        >
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
          />
          <div className={cn("absolute inset-0 bg-gradient-to-t", dark ? "from-black/90 via-black/40 to-transparent opacity-80" : "from-white/90 via-white/40 to-transparent")} />
        </div>
      )}

      {/* Dynamic Aurora Glow */}
      <div className={cn(
        "absolute -inset-10 z-[1] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 bg-gradient-to-br",
        dark ? "from-white/20 via-transparent to-transparent" : "from-black/10 via-transparent to-transparent"
      )} />

      {/* Decorative Noise / Pattern */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10 flex justify-between items-start">
        <span className={cn(
          "inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-tight backdrop-blur-2xl transition-all border",
          dark ? "bg-white/10 text-white/90 border-white/10 group-hover:bg-white/20" : "bg-black/5 text-black/60 border-black/5 group-hover:bg-black/10"
        )}>
          {tag}
        </span>
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-2xl transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 border",
          dark ? "bg-white/10 border-white/10" : "bg-black/5 border-black/5"
        )}>
          <ExternalLink size={18} strokeWidth={1.5} />
        </div>
      </div>

      <div className="relative z-10 mt-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-6 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-[10px] font-black border border-white/20">
            YK
          </div>
          <span className={cn(
            "text-[10px] font-black uppercase tracking-[0.2em] opacity-60",
            dark ? "text-white" : "text-black"
          )}>
            {category}
          </span>
        </div>
        <h3 className="text-2xl md:text-[20px] font-semibold leading-[1.1] tracking-tight mb-4 transition-all group-hover:text-500/90">
          {title}
        </h3>

        <div className={cn(
          "pt-8 border-t flex items-center gap-6",
          dark ? "border-white/10" : "border-black/5"
        )}>
          <button className={cn(
            "flex items-center gap-2 text-[12px] font-bold transition-transform hover:translate-x-1",
            dark ? "text-white" : "text-[#1a1a1a]"
          )}>
            View Case Study <ArrowRight size={16} />
          </button>

          <div className="flex gap-1.5">
            <div className={cn("w-1 h-1 rounded-full", dark ? "bg-white/40" : "bg-black/20")} />
            <div className={cn("w-1 h-1 rounded-full", dark ? "bg-white/40" : "bg-black/20")} />
            <div className={cn("w-1 h-1 rounded-full", dark ? "bg-white/40" : "bg-black/20")} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
