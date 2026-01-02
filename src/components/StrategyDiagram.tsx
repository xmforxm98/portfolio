import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Check } from 'lucide-react';

interface StrategyDiagramProps {
    strategy: {
        goals: { title: string; desc: string }[];
        hypotheses: { title?: string; desc: string }[];
        solutions: string[];
    };
    color?: string;
}

const StrategyDiagram: React.FC<StrategyDiagramProps> = ({ strategy, color = "#ffbf00" }) => {
    return (
        <div className="relative w-full py-10 flex flex-col items-center gap-12 overflow-visible">
            {/* Goals Row */}
            <div className="flex flex-col items-center gap-8 w-full">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-px bg-gray-200" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">02.1 CORE GOALS</span>
                    <div className="w-12 h-px bg-gray-200" />
                </div>
                <div className="flex flex-wrap justify-center gap-6 max-w-6xl relative px-4">
                    {strategy.goals.map((goal, i) => (
                        <div key={i} className="relative group">
                            <NodePill
                                icon={<div className="text-[10px] font-black">{i + 1}</div>}
                                label={goal.title}
                                subLabel={goal.desc}
                                accentColor="#d9ff00"
                            />
                        </div>
                    ))}
                </div>
                {/* Connection line */}
                <div className="w-px h-8 border-l border-dashed border-gray-300 mx-auto" />
            </div>

            {/* Hypotheses Row */}
            <div className="flex flex-col items-center gap-8 w-full">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-px bg-gray-200" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">02.2 UX HYPOTHESES</span>
                    <div className="w-12 h-px bg-gray-200" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
                    {strategy.hypotheses.map((h, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-black/[0.08] p-6 rounded-[32px] shadow-sm hover:shadow-xl transition-all relative overflow-hidden flex flex-col gap-3"
                        >
                            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${color}15`, color: color }}>
                                <Zap size={18} />
                            </div>
                            <div>
                                <h4 className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: color }}>{h.title || `Hypothesis 0${i + 1}`}</h4>
                                <p className="text-[14px] text-gray-700 leading-relaxed italic font-serif opacity-90">"{h.desc}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* Connection line */}
                <div className="w-px h-8 border-l border-dashed border-gray-300 mx-auto" />
            </div>

            {/* Tactical Solutions Row - Realigned to match requested image */}
            <div className="flex flex-col items-center gap-8 w-full">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-px bg-gray-200" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">02.3 TACTICAL SOLUTIONS</span>
                    <div className="w-12 h-px bg-gray-200" />
                </div>

                <div className="flex flex-col gap-3 w-full max-w-4xl px-4">
                    {strategy.solutions.map((solution, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.01, x: 5 }}
                            className="flex items-center gap-5 px-8 py-5 bg-white border border-black/[0.06] rounded-[48px] shadow-sm hover:shadow-md transition-all cursor-default group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#d9ff00] flex items-center justify-center text-black border border-black/5 shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                                <Check size={18} strokeWidth={3} />
                            </div>
                            <span className="text-[15px] font-bold text-gray-800 tracking-tight leading-snug">{solution}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface NodePillProps {
    label: string;
    subLabel?: string;
    icon?: React.ReactNode;
    isPrimary?: boolean;
    accentColor?: string;
}

const NodePill: React.FC<NodePillProps> = ({ label, subLabel, icon, accentColor = "#ffbf00" }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="relative flex flex-col items-start gap-3 bg-white border border-black/[0.08] rounded-[32px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 min-w-[280px] max-w-[320px]"
    >
        <div className="flex items-center gap-4 w-full">
            {icon && (
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-black/5 shadow-sm"
                    style={{ backgroundColor: accentColor }}>
                    {icon}
                </div>
            )}
            <div className="flex flex-col">
                <span className="text-[12px] font-black uppercase tracking-widest text-gray-900">{label}</span>
            </div>
        </div>

        {subLabel && (
            <p className="text-[14px] text-gray-600 leading-relaxed font-medium opacity-80">
                {subLabel}
            </p>
        )}
    </motion.div>
);

export default StrategyDiagram;
