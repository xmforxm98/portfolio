import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, User, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';

// Components
import Orb from '../components/Orb/Orb';
import AboutCard from '../components/landing/AboutCard';

const AboutPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen relative bg-[#fcfbf9] overflow-x-hidden selection:bg-black/5 selection:text-black">
            <div className="paper-texture" />

            {/* Background Ambient Orb */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
                <Orb
                    hue={120} // Slightly more green-ish for About page
                    hoverIntensity={0.05}
                    backgroundColor="#fcfbf9"
                />
            </div>

            {/* Custom Header at 6% top - Reused from ChatPage */}
            <header className="fixed top-[6%] left-0 w-full z-50 px-8 md:px-16 flex items-center justify-between">
                <button
                    onClick={() => navigate(-1)} // Go back to previous page
                    className="hover:scale-110 active:scale-95 transition-all w-12 h-12 rounded-full border border-black/5 bg-white/40 backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-black shadow-[0_4px_20px_rgba(0,0,0,0.02)] group"
                >
                    <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>

                <nav className="flex items-center gap-3">
                    <Link
                        to="/about"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 bg-white/60 shadow-sm backdrop-blur-xl text-[11px] font-black tracking-widest text-black transition-all uppercase group"
                    >
                        <User size={14} />
                        About me
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/5 bg-white/40 backdrop-blur-xl text-[11px] font-black tracking-widest text-gray-400 hover:text-black hover:border-black/10 transition-all shadow-sm uppercase group"
                    >
                        <LayoutGrid size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                        Portfolio
                    </Link>
                </nav>
            </header>

            <main className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center pt-[20vh] pb-32 px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex flex-col items-center"
                >
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-black tracking-[0.5em] text-gray-400 uppercase mb-4 block">Personal Narrative</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] tracking-tighter leading-none mb-6 italic">
                            The Human <br /> Behind the AI.
                        </h1>
                    </div>

                    <AboutCard />

                    {/* Additional sections can be added here */}
                </motion.div>
            </main>
        </div>
    );
};

export default AboutPage;
