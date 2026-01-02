import { ExternalLink, Github, Calendar, User, Tag, ShieldAlert, Target, Zap, Lightbulb, BarChart3, Presentation, Apple } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../types/chat';
import StrategyDiagram from './StrategyDiagram';

interface ProjectDetailProps {
    project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
    return (
        <div className="flex-1 overflow-y-auto custom-scrollbar pb-20 md:pr-4">
            {/* Hero Visual */}
            <div
                className="w-full h-64 md:h-80 rounded-[32px] relative overflow-hidden mb-12 shadow-sm group"
                style={{ backgroundColor: project.color }}
            >
                {project.coverImage ? (
                    <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                ) : (
                    <>
                        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center">
                                <Presentation size={48} className="text-white opacity-20 md:w-16 md:h-16" />
                            </div>
                        </div>
                    </>
                )}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-white/60 bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.5em]">
                    Case Study / {project.id === 0 ? "00" : `0${project.id}`}
                </div>
            </div>

            <div className="px-2 md:px-0">
                {/* Metadata Grid */}
                <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-16">
                    <MetaItem icon={<Calendar size={14} />} label="Duration" value={project.duration || "N/A"} />
                    <MetaItem icon={<User size={14} />} label="Role" value={project.role || "Lead Designer"} />
                    <MetaItem icon={<Tag size={14} />} label="Tools" value={project.tools?.join(", ") || "Figma"} />
                    <MetaItem icon={<ShieldAlert size={14} />} label="Privacy" value={project.confidential ? "Proprietary" : "Public"} />
                    {project.appStoreUrl && (
                        <div className="col-span-2 mt-4">
                            <button
                                onClick={() => window.open(project.appStoreUrl, '_blank')}
                                className="w-full h-12 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition-all text-xs uppercase tracking-widest shadow-lg"
                            >
                                App Store <Apple size={14} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Confidential Notice */}
                {project.confidentialNotice && (
                    <div className="p-6 md:p-8 rounded-[32px] bg-amber-50/50 border border-amber-200/50 mb-16 flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                            <ShieldAlert size={20} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-amber-700">Confidentiality Notice</h4>
                            <p className="text-sm text-amber-800/80 leading-relaxed italic">{project.confidentialNotice}</p>
                        </div>
                    </div>
                )}

                {/* Overview Section */}
                <Section title="00. Overview" icon={<Target className="text-amber-500" />}>
                    <p className="text-[17px] text-gray-700 leading-relaxed font-serif italic mb-8">
                        "{project.overview}"
                    </p>
                    {project.overviewImage && (
                        <div className="rounded-[32px] overflow-hidden border border-black/[0.03] shadow-sm mb-8">
                            <img src={project.overviewImage} alt="Overview" className="w-full h-auto" />
                        </div>
                    )}

                    {project.collaboration && (
                        <div className="mt-8 flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">My Role</h4>
                                <p className="text-sm font-bold text-gray-900 leading-relaxed bg-amber-50/50 p-4 rounded-2xl border border-amber-200/20">{project.collaboration.myRole}</p>
                            </div>
                            {project.collaboration.teams && (
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Collaboration</h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        {project.collaboration.teams.map((team, i) => (
                                            <div key={i} className="p-4 rounded-[20px] bg-white border border-black/5 shadow-sm">
                                                <h5 className="text-[11px] font-bold text-gray-900 mb-1">{team.name}</h5>
                                                <p className="text-[11px] text-gray-500 leading-relaxed">{team.contribution}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Section>

                {/* Challenge Section */}
                {project.challenge && (
                    <Section title="01. The Challenge" icon={<Zap className="text-amber-500" />}>
                        <p className="text-[#1a1a1a] leading-relaxed mb-6 text-[15px] md:text-[16px]">
                            {project.challenge}
                        </p>
                    </Section>
                )}

                {/* Strategy Section */}
                {project.strategy && (
                    <Section title="02. Strategy" icon={<Lightbulb className="text-amber-500" />}>
                        <div className="mb-8 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
                            <div className="min-w-[500px] md:min-w-0">
                                <StrategyDiagram strategy={project.strategy} color={project.color} />
                            </div>
                        </div>
                    </Section>
                )}

                {/* Implementation Sections */}
                {project.implementation?.map((section, idx) => (
                    <Section key={idx} title={(section.title.startsWith('CHAPTER') || section.title.startsWith('EPILOGUE')) ? section.title : `03.${idx + 1} ${section.title}`} icon={<Zap className="text-amber-500" />}>
                        <p className="text-[#1a1a1a] opacity-80 leading-relaxed mb-8 text-[15px] md:text-[16px]">{section.desc}</p>

                        {section.image && (
                            <div className="rounded-[32px] overflow-hidden border border-black/[0.03] bg-white relative shadow-sm mb-12">
                                <img src={section.image} alt={section.title} className="w-full" />
                            </div>
                        )}

                        {section.items && (
                            <div className={section.layout === 'full' ? "flex flex-col gap-10 mb-8" : "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"}>
                                {section.items.map((item, i) => (
                                    <div key={i} className="flex flex-col gap-4 group">
                                        {item.isAnimation ? (
                                            <div className="aspect-[4/3] w-full rounded-[32px] overflow-hidden bg-[#f8f9fa] border border-black/[0.03] relative shadow-sm group-hover:shadow-xl transition-all duration-500 flex items-center justify-center p-8">
                                                <div className="scale-125">
                                                    <MotionPreview type={item.isAnimation} />
                                                </div>
                                            </div>
                                        ) : item.image && (
                                            <div className="rounded-[24px] overflow-hidden bg-black/5 border border-black/5 relative shadow-sm">
                                                <img src={item.image} alt={item.title} className="w-full h-auto" />
                                            </div>
                                        )}
                                        <div>
                                            <h6 className="text-[14px] font-bold text-gray-900 mb-1">{item.title}</h6>
                                            <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Section>
                ))}

                {/* Validation Section */}
                {project.validation && (
                    <Section title="04. Validation & Analytics" icon={<BarChart3 className="text-amber-500" />}>
                        {project.validation.collection && (
                            <div className="p-8 rounded-[32px] bg-[#1a1a1a] text-white mb-10">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Data Collection</h4>
                                <p className="text-base leading-relaxed font-serif italic text-white/90 mb-6">{project.validation.collection.desc}</p>
                                {project.validation.collection.image && (
                                    <div className="rounded-2xl overflow-hidden border border-white/10 mb-4">
                                        <img src={project.validation.collection.image} alt="Data Collection" className="w-full h-auto" />
                                    </div>
                                )}
                            </div>
                        )}

                        {project.validation.abandonmentAnalysis && (
                            <div className="mb-10">
                                <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4">Abandonment Analysis</h4>
                                <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">"{project.validation.abandonmentAnalysis.desc}"</p>
                                {project.validation.abandonmentAnalysis.image && (
                                    <div className="rounded-2xl overflow-hidden border border-black/5 mb-4 shadow-sm">
                                        <img src={project.validation.abandonmentAnalysis.image} alt="Abandonment Graph" className="w-full h-auto" />
                                    </div>
                                )}
                                <div className="grid grid-cols-1 gap-4">
                                    {project.validation.abandonmentAnalysis.results?.map((res, i) => (
                                        <div key={i} className="p-4 rounded-2xl bg-white border border-black/5">
                                            <h5 className="text-[12px] font-black text-gray-900 uppercase tracking-tight mb-1">{res.title}</h5>
                                            <p className="text-xs text-gray-500 leading-relaxed">{res.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.validation.feedbackAnalysis && (
                            <div className="mb-10">
                                <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4">Feedback Analysis</h4>
                                <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">"{project.validation.feedbackAnalysis.desc}"</p>
                                {project.validation.feedbackAnalysis.image && (
                                    <div className="rounded-2xl overflow-hidden border border-black/5 mb-4 shadow-sm">
                                        <img src={project.validation.feedbackAnalysis.image} alt="Feedback Analysis" className="w-full h-auto" />
                                    </div>
                                )}
                                <div className="grid grid-cols-1 gap-4">
                                    {project.validation.feedbackAnalysis.results?.map((res, i) => (
                                        <div key={i} className="p-4 rounded-2xl bg-white border border-black/5">
                                            <div className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">{res.title}</div>
                                            <p className="text-xs text-gray-500 leading-relaxed">{res.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.validation.strategyRefinement && (
                            <div className="mt-10 pt-10 border-t border-black/5">
                                <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4">04.4 {project.validation.strategyRefinement.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">"{project.validation.strategyRefinement.desc}"</p>
                                {project.validation.strategyRefinement.image && (
                                    <div className="rounded-2xl overflow-hidden border border-black/5 mb-6 shadow-sm">
                                        <img src={project.validation.strategyRefinement.image} alt="Strategy Refinement" className="w-full h-auto" />
                                    </div>
                                )}
                                <div className="flex flex-col gap-8">
                                    {project.validation.strategyRefinement.subSections?.map((sub, i) => (
                                        <div key={i} className="space-y-4">
                                            <div>
                                                <h5 className="text-[11px] font-black text-amber-600 mb-1 uppercase tracking-widest">{sub.title}</h5>
                                                <p className="text-xs text-gray-700 leading-relaxed">{sub.desc}</p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {sub.images?.map((img, j) => (
                                                    <div key={j} className="rounded-xl overflow-hidden border border-black/5 aspect-video">
                                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </Section>
                )}

                {/* Insights Section */}
                {project.insights && (
                    <Section title="05. Final Insights" icon={<Zap className="text-amber-500" />}>
                        <div className="space-y-4 text-[17px]">
                            {project.insights.map((insight, i) => (
                                <div key={i} className="p-5 rounded-[24px] bg-white border border-black/5 font-medium text-gray-700 flex gap-4 items-center">
                                    <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                                        <Zap size={16} />
                                    </div>
                                    <p className="text-[15px]">{insight}</p>
                                </div>
                            ))}
                        </div>
                    </Section>
                )}

                {/* Links */}
                <div className="pt-12 border-t border-black/5 flex flex-wrap gap-4">
                    {project.previewUrl && (
                        <button
                            onClick={() => window.open(project.previewUrl, '_blank')}
                            className="px-6 py-3 bg-[#1a1a1a] text-white rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all shadow-xl text-xs md:text-sm"
                        >
                            Live Preview <ExternalLink size={16} />
                        </button>
                    )}
                    {project.repoUrl && (
                        <button
                            onClick={() => window.open(project.repoUrl, '_blank')}
                            className="px-6 py-3 bg-white border border-black/5 text-[#1a1a1a] rounded-xl font-bold flex items-center gap-2 hover:bg-black/5 transition-all text-xs md:text-sm"
                        >
                            GitHub Repo <Github size={16} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};


const MetaItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
            {icon} {label}
        </div>
        <p className="text-[12px] font-bold text-[#1a1a1a] leading-tight text-balance">{value}</p>
    </div>
);

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <section className="mb-20 flex flex-col">
        <div className="flex items-center gap-3 mb-8 overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center scale-90">
                {icon}
            </div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-900">{title}</h3>
            <div className="h-px flex-1 bg-black/[0.03] ml-2" />
        </div>
        <div>
            {children}
        </div>
    </section>
);


const MotionPreview = ({ type }: { type: string }) => {
    switch (type) {
        case 'eye-tracking':
            return (
                <div className="relative w-24 h-24">
                    <svg viewBox="0 0 100 110" className="w-full h-full" fill="none">
                        <path d="M50 5C25.1472 5 5 25.1472 5 50C5 74.8528 25.1472 95 50 95C55.4853 95 60.7107 94.0202 65.5534 92.2384L80 105L78.5 90.5C88.0044 82.5 95 70.0044 95 50C95 25.1472 74.8528 5 50 5Z" stroke="black" strokeWidth="4" fill="white" />
                        <motion.circle
                            animate={{ cx: [40, 44, 36, 40], cy: [45, 48, 42, 45] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                            cx="40" cy="45" r="4" fill="black"
                        />
                        <motion.circle
                            animate={{ cx: [60, 64, 56, 60], cy: [45, 48, 42, 45] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                            cx="60" cy="45" r="4" fill="black"
                        />
                    </svg>
                </div>
            );
        case 'status-motion':
            return (
                <div className="relative w-24 h-24">
                    <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full"
                    />
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full h-full"
                    >
                        <svg viewBox="0 0 100 110" className="w-full h-full" fill="none">
                            <path d="M50 5C25.1472 5 5 25.1472 5 50C5 74.8528 25.1472 95 50 95C55.4853 95 60.7107 94.0202 65.5534 92.2384L80 105L78.5 90.5C88.0044 82.5 95 70.0044 95 50C95 25.1472 74.8528 5 50 5Z" stroke="black" strokeWidth="4" fill="white" />
                            <circle cx="40" cy="45" r="4" fill="black" />
                            <circle cx="60" cy="45" r="4" fill="black" />
                        </svg>
                    </motion.div>
                </div>
            );
        case 'drag-drop':
            return (
                <div className="relative w-24 h-24 flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 border-2 border-dashed border-amber-500 rounded-3xl"
                    />
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-black flex items-center justify-center relative z-10">
                        <svg viewBox="0 0 100 110" className="w-10 h-10" fill="none">
                            <path d="M50 5C25.1472 5 5 25.1472 5 50C5 74.8528 25.1472 95 50 95C55.4853 95 60.7107 94.0202 65.5534 92.2384L80 105L78.5 90.5C88.0044 82.5 95 70.0044 95 50C95 25.1472 74.8528 5 50 5Z" stroke="black" strokeWidth="5" fill="white" />
                        </svg>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default ProjectDetail;
