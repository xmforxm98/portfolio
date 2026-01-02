import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HerPulsar from '../ui/HerPulsar';

interface LandingHeroProps {
    isChatActive: boolean;
}

const LandingHero: React.FC<LandingHeroProps> = ({ isChatActive }) => {
    const navigate = useNavigate();
    return (
        <AnimatePresence>
            {!isChatActive && (
                <motion.header
                    exit={{ opacity: 0, y: -100, scale: 0.9, filter: 'blur(30px)' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-12 flex flex-col items-center select-none"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="mb-8 w-32 h-14 flex items-center justify-center relative group"
                    >
                        <HerPulsar />
                    </motion.div>
                    <h1 className="text-5xl md:text-5xl font-serif mb-6 text-[#1a1a1a] tracking-tight leading-[0.9] antialiased">
                        Hello, I'm <br className="md:hidden" /> Yongwoo.
                    </h1>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-black/10 to-transparent mb-6" />
                    <p className="text-[10px] md:text-[11px] tracking-[.6em] text-[#999] font-black uppercase mb-8">
                        DATA-DRIVEN UX/UI DESIGNER • AI SOLUTION SPECIALIST • MA in design
                    </p>

                    <div className="flex gap-4 items-center">
                        <button
                            onClick={() => navigate('/chat', { state: { initialMessage: "Tell me about yourself." } })}
                            className="text-[11px] font-bold tracking-widest text-black/40 hover:text-amber-600 transition-colors uppercase py-2 px-4 border border-black/5 hover:border-amber-600/20 rounded-full"
                        >
                            About Me
                        </button>
                        <div className="w-1 h-1 rounded-full bg-black/10" />
                        <button
                            onClick={() => navigate('/chat', { state: { initialMessage: "Show me your portfolio gallery." } })}
                            className="text-[11px] font-bold tracking-widest text-black/40 hover:text-amber-600 transition-colors uppercase py-2 px-4 border border-black/5 hover:border-amber-600/20 rounded-full"
                        >
                            Portfolio
                        </button>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
};

export default LandingHero;
