import { motion } from 'framer-motion';
import { Sparkles, Linkedin, Briefcase, GraduationCap, Trophy, Target, Eye, Globe } from 'lucide-react';
import { experienceData, educationData, contactInfo } from '../../data/portfolio';
import yongwooProfile from '../../assets/yongwoo_profile_car.png';

const AboutCard = ({ onAsk }: { onAsk?: (question: string) => void }) => {
    return (
        <div className="w-full flex flex-col gap-16 items-center">
            {/* Image Section - Standalone Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[380px] min-h-[520px] relative rounded-[40px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.12)] group mx-auto"
            >
                <img
                    src={yongwooProfile}
                    alt="Yongwoo Kim"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Artistic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />

                {/* Bottom Blur & Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex items-center justify-between">
                    {/* Blur Gradient Background for Bottom Area */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-[2px] -z-10" />

                    {/* Tag Section (Left) */}
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md overflow-hidden">
                                <img
                                    src={yongwooProfile}
                                    alt="Avatar"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full" />
                        </div>
                        <div className="flex flex-col text-white">
                            <span className="text-sm font-bold leading-none tracking-wide">@yongwoo.kim</span>
                            <span className="text-[10px] font-medium opacity-70 mt-1">Abu Dhabi, UAE</span>
                        </div>
                    </div>

                    {/* LinkedIn Connect Button (Right) */}
                    <button
                        onClick={() => window.open(contactInfo.linkedinUrl || "https://linkedin.com", '_blank')}
                        className="bg-white text-black px-5 py-2.5 rounded-full font-bold text-[11px] uppercase tracking-wider flex items-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-all"
                    >
                        <Linkedin size={14} />
                        Connect
                    </button>
                </div>
            </motion.div>

            {/* Content Section - Centered Below */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="w-full max-w-3xl flex flex-col items-center text-center px-4 mx-auto"
            >
                <div className="flex items-center gap-2 mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">Data-driven Product designer / Master Degree in France</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#1a1a1a] tracking-tight antialiased text-balance">
                    Yongwoo Kim
                </h2>

                <p className="text-[#666] text-lg leading-relaxed mb-12 antialiased font-light max-w-2xl text-balance">
                    I'm a passionate designer with expertise in UX/UI & product design, and AI solutions. I earned my Master's degree in Paris, France. I specialize in creating user-centered designs that bridge the gap between complex AI technologies and intuitive user experiences.
                </p>


            </motion.div>

            {/* Detailed Experience & Awards Section */}
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                            <Briefcase size={16} />
                        </div>
                        <h3 className="text-lg font-serif italic text-gray-800">Experience</h3>
                    </div>

                    <div className="space-y-12 border-l border-black/5 pl-8 ml-4">
                        {experienceData.map((exp, idx) => (
                            <TimelineItem
                                key={idx}
                                year={exp.year}
                                role={exp.role}
                                company={exp.company}
                                location={exp.location}
                                desc={exp.desc}
                                onAsk={onAsk ? () => onAsk(`Tell me more about the experience as a ${exp.role} at ${exp.company}`) : undefined}
                            />
                        ))}
                    </div>
                </motion.section>

                <div className="space-y-16">
                    <motion.section
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                                <Trophy size={16} />
                            </div>
                            <h3 className="text-lg font-serif italic text-gray-800">Awards & Recognition</h3>
                        </div>

                        <div className="space-y-10 border-l border-black/5 pl-8 ml-4">
                            <TimelineItem
                                year="2022"
                                role="Culture Platform UX, Grand Prize"
                                company="Newspaper Corp, MoneyToday"
                                location="Seoul, Korea"
                                onAsk={onAsk ? () => onAsk("Tell me about the Culture Platform UX Grand Prize.") : undefined}
                            />
                            <TimelineItem
                                year="Winner"
                                role="BMW Young Design Award"
                                company="BMW France Automobile Festival"
                                location="France"
                                onAsk={onAsk ? () => onAsk("What is the BMW Young Design Award?") : undefined}
                            />
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                <GraduationCap size={16} />
                            </div>
                            <h3 className="text-lg font-serif italic text-gray-800">Education</h3>
                        </div>

                        <div className="space-y-10 border-l border-black/5 pl-8 ml-4">
                            {educationData.map((edu, idx) => (
                                <TimelineItem
                                    key={idx}
                                    year={edu.year}
                                    role={edu.degree}
                                    company={edu.school}
                                    location={edu.location}
                                    desc={edu.desc}
                                    onAsk={onAsk ? () => onAsk(`Tell me more about the education at ${edu.school} for ${edu.degree}.`) : undefined}
                                />
                            ))}
                        </div>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <Sparkles size={16} />
                            </div>
                            <h3 className="text-lg font-serif italic text-gray-800">Skills & Focus</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 pl-8 ml-4">
                            {["UX/UI", "Product Design", "AI Solutions", "Autonomous UX", "HMI Design", "Mobility"].map(skill => (
                                <span key={skill} className="px-4 py-2 rounded-full border border-black/5 bg-white/40 text-[10px] font-black tracking-widest text-gray-500 uppercase">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.section>
                </div>
            </div>

            {/* Q&A / Motivation Sections */}
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pb-20">
                <QuestionItem
                    icon={<Target size={18} />}
                    question="What motivates you in design?"
                    answer="I'm driven by the challenge of making complex technologies accessible and intuitive. Seeing users effortlessly navigate through AI-powered interfaces that I've designed gives me immense satisfaction. The intersection of data, human psychology, and visual design is where I find my passion."
                    onAsk={onAsk}
                />
                <QuestionItem
                    icon={<Eye size={18} />}
                    question="How do you approach new challenges?"
                    answer="I start with thorough research and user empathy, then rapidly prototype and test solutions. My international experience has taught me to consider diverse cultural perspectives. I believe in failing fast, learning quickly, and iterating based on data and user feedback."
                    onAsk={onAsk}
                />
                <QuestionItem
                    icon={<Globe size={18} />}
                    question="What's your career vision?"
                    answer="I aim to become a leading voice in AI-human interaction design. I want to contribute to making AI technologies more democratized and accessible globally. My goal is to bridge cultural and technological gaps through thoughtful design that respects both human needs and business objectives."
                    onAsk={onAsk}
                />
                <QuestionItem
                    icon={<Sparkles size={18} />}
                    question="What makes you unique as a designer?"
                    answer="My unique combination of technical understanding, international perspective, and data-driven approach sets me apart. Having worked across Korea, Japan, France, Czech and the UAE, I bring cultural sensitivity to design. My background in both AI product management and hands-on design allows me to see the bigger picture while crafting detailed user experiences."
                    onAsk={onAsk}
                />
            </div>
        </div>
    );
};

const QuestionItem = ({ icon, question, answer, onAsk }: any) => (
    <div className="flex flex-col gap-4 p-8 rounded-[32px] bg-white/30 border border-black/5 backdrop-blur-sm group hover:bg-white/50 transition-colors">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-amber-600">
                {icon}
                <span className="text-[10px] font-black tracking-widest uppercase">{question}</span>
            </div>
            {onAsk && (
                <button
                    onClick={() => onAsk(question)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-[9px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95"
                >
                    <Sparkles size={10} />
                    Ask Chatbot
                </button>
            )}
        </div>
        <p className="text-sm text-gray-500 font-light leading-relaxed">{answer}</p>
    </div>
);

interface TimelineItemProps {
    year: string;
    role: string;
    company: string;
    location: string;
    desc?: string;
    onAsk?: () => void;
}

const TimelineItem = ({ year, role, company, location, desc, onAsk }: TimelineItemProps) => (
    <div className="relative group">
        <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-[#fcfbf9] bg-gray-200" />
        <div className="flex justify-between items-start">
            <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2 block">{year}</span>
            {onAsk && (
                <button
                    onClick={onAsk}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-[9px] font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95"
                >
                    <Sparkles size={10} />
                    Ask Chatbot
                </button>
            )}
        </div>
        <h4 className="text-[17px] font-medium text-gray-900 leading-tight mb-1">{role}</h4>
        <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-600 font-medium">{company}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-xs text-gray-400">{location}</span>
        </div>
        {desc && <p className="text-sm text-gray-500 font-light leading-relaxed">{desc}</p>}
    </div>
);

export default AboutCard;
