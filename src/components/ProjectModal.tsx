import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Tag, User, ShieldAlert, Target, Lightbulb, Zap, BarChart3, ExternalLink, MessageSquare, Maximize2, Sparkles, Apple } from 'lucide-react';
import type { Project } from '../types/chat';
import ToolIcon from './ToolIcon';
import StrategyDiagram from './StrategyDiagram';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
    onChatWithProject?: (project: Project) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project, onChatWithProject }) => {
    const [expandedImage, setExpandedImage] = useState<string | null>(null);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-xl"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 40 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-6xl bg-[#fcfbf9] rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col h-[90vh]"
                    >
                        {/* Header Info (Static) */}
                        <div className="flex-shrink-0 px-10 py-8 md:px-16 md:py-10 bg-white/80 backdrop-blur-md border-b border-black/5 flex justify-between items-center z-20">
                            <div className="flex flex-col gap-1">
                                <div className="flex gap-2 mb-1">
                                    <span className="px-3 py-1 bg-black text-white rounded-full text-[9px] font-black uppercase tracking-widest">
                                        {project.tag}
                                    </span>
                                    <span className="px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full text-[9px] font-black uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a] tracking-tight">{project.title}</h2>
                            </div>
                            <div className="flex items-center gap-2">
                                {project.previewUrl && (
                                    <button
                                        onClick={() => window.open(project.previewUrl, '_blank')}
                                        className="h-11 px-6 bg-[#1a1a1a] text-white rounded-full font-bold flex items-center gap-2 hover:bg-black transition-all shadow-xl text-xs uppercase tracking-widest"
                                    >
                                        Live Demo <ExternalLink size={14} />
                                    </button>
                                )}
                                {project.appStoreUrl && (
                                    <button
                                        onClick={() => window.open(project.appStoreUrl, '_blank')}
                                        className="h-11 px-6 bg-black text-white rounded-full font-bold flex items-center gap-2 hover:bg-gray-900 transition-all shadow-xl text-xs uppercase tracking-widest"
                                    >
                                        App Store <Apple size={14} />
                                    </button>
                                )}
                                {onChatWithProject && (
                                    <button
                                        onClick={() => onChatWithProject(project)}
                                        className="w-11 h-11 bg-white border border-black/5 text-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm group"
                                        title="Chat about this project"
                                    >
                                        <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                                    </button>
                                )}
                                <div className="w-px h-6 bg-black/5 mx-2" />
                                <button
                                    onClick={onClose}
                                    className="w-12 h-12 rounded-full border border-black/5 bg-white flex items-center justify-center hover:rotate-90 transition-all duration-500"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            {/* Hero Visual */}
                            <div
                                className="w-full h-[40vh] relative overflow-hidden"
                                style={{ backgroundColor: project.color }}
                            >
                                {project.coverImage && (
                                    <img src={project.coverImage} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
                                )}
                                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                                {!project.coverImage && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-48 h-48 rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 flex items-center justify-center">
                                            <Zap size={64} className="text-white opacity-20" />
                                        </div>
                                    </div>
                                )}
                                <div className="absolute bottom-8 right-8 text-white/40 text-[10px] font-black uppercase tracking-[0.5em]">
                                    Case Study / {project.id === 0 ? "00" : `0${project.id}`}
                                </div>
                            </div>

                            <div className="max-w-4xl mx-auto px-10 py-16 md:px-0">
                                {/* Metadata Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                                    <MetaItem icon={<Calendar size={14} />} label="Duration" value={project.duration || "N/A"} />
                                    <MetaItem icon={<User size={14} />} label="Role" value={project.role || "Lead Designer"} />
                                    <MetaItem icon={<ShieldAlert size={14} />} label="Privacy" value={project.confidential ? "Proprietary" : "Public"} />
                                </div>

                                {/* Tools Section */}
                                {project.tools && project.tools.length > 0 && (
                                    <div className="mb-20">
                                        <div className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
                                            <Tag size={14} /> TOOLS
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {project.tools.map((tool, i) => (
                                                <ToolIcon key={i} name={tool} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Confidential Notice */}
                                {project.confidentialNotice && (
                                    <div className="p-8 md:p-10 rounded-[40px] bg-amber-50/50 border border-amber-200/50 mb-20 flex gap-6 items-start">
                                        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                                            <ShieldAlert size={24} />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-[12px] font-black uppercase tracking-widest text-amber-700">Confidentiality Notice</h4>
                                            <p className="text-sm text-amber-800/80 leading-relaxed italic">{project.confidentialNotice}</p>
                                        </div>
                                    </div>
                                )}

                                {/* Overview Section */}
                                <Section title="00. Overview" icon={<Target className="text-amber-500" />}>
                                    <p className="text-[17px] text-gray-800 leading-relaxed font-medium mb-10">
                                        {project.overview}
                                    </p>

                                    {project.overviewImage && (
                                        <div
                                            className="rounded-[40px] overflow-hidden border border-black/[0.03] bg-white cursor-zoom-in group/strat relative shadow-sm mb-12"
                                            onClick={() => setExpandedImage(project.overviewImage || null)}
                                        >
                                            <img src={project.overviewImage} alt="Overview" className="w-full transition-transform duration-1000 group-hover/strat:scale-[1.05]" />
                                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/strat:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover/strat:scale-100 transition-transform duration-500">
                                                    <Maximize2 size={24} />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Collaboration Details */}
                                    {project.collaboration && (
                                        <div className="mb-8 space-y-6">
                                            {/* My Role */}
                                            <div className="p-6 rounded-[32px] bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/30">
                                                <h4 className="text-[11px] font-black uppercase tracking-widest text-amber-700 mb-3">My Role</h4>
                                                <p className="text-sm text-gray-800 leading-relaxed font-medium">{project.collaboration.myRole}</p>
                                            </div>

                                            {/* Team Collaboration */}
                                            <div>
                                                <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-4">Collaboration</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    {project.collaboration.teams.map((team, i) => (
                                                        <div key={i} className="p-5 rounded-[24px] bg-white border border-black/5 shadow-sm">
                                                            <h5 className="text-xs font-bold text-gray-900 mb-2">{team.name}</h5>
                                                            <p className="text-xs text-gray-600 leading-relaxed">{team.contribution}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Section>

                                {/* Challenge Section */}
                                {project.challenge && (
                                    <Section title="01. The Challenge: Lack of Data & References" icon={<Zap className="text-amber-500" />}>
                                        <p className="text-[#1a1a1a] leading-relaxed mb-10 text-[17px]">
                                            {project.challenge}
                                        </p>
                                    </Section>
                                )}

                                {/* Strategy Section */}
                                {project.strategy && (
                                    <Section title="02. Strategy" icon={<Lightbulb className="text-amber-500" />}>
                                        <StrategyDiagram strategy={project.strategy} color={project.color} />
                                    </Section>
                                )}

                                {/* Implementation Sections */}
                                {project.implementation?.map((section, idx) => (
                                    <Section key={idx} title={(section.title.startsWith('CHAPTER') || section.title.startsWith('EPILOGUE')) ? section.title : `03.${idx + 1} ${section.title}`} icon={<Zap className="text-amber-500" />}>
                                        <p className="text-[#1a1a1a] opacity-80 leading-relaxed mb-12 text-[17px] max-w-4xl">
                                            {section.desc}
                                        </p>

                                        {section.image && (
                                            <div
                                                className="rounded-[40px] overflow-hidden border border-black/[0.03] bg-white cursor-zoom-in group/strat relative shadow-sm mb-16"
                                                onClick={() => setExpandedImage(section.image || null)}
                                            >
                                                <img src={section.image} alt={section.title} className="w-full transition-transform duration-1000 group-hover/strat:scale-[1.05]" />
                                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/strat:opacity-100 transition-opacity flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover/strat:scale-100 transition-transform duration-500">
                                                        <Maximize2 size={24} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {section.items && section.items.length > 0 && (
                                            <div className={section.layout === 'full' ? "flex flex-col gap-16 mb-12" : "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"}>
                                                {section.items.map((item, i) => {
                                                    const isFloating = item.image?.includes('popup.png');
                                                    const isSidepanel = item.image?.includes('Sidepanel.png');
                                                    const isFull = section.layout === 'full';

                                                    return (
                                                        <div key={i} className={`flex flex-col ${isFull ? 'gap-8' : 'gap-5'} group`}>
                                                            {item.image ? (
                                                                <div
                                                                    className={`${isFull ? 'w-full rounded-[40px]' : 'aspect-[4/3] w-full rounded-[32px]'} overflow-hidden bg-black/5 border border-black/5 relative shadow-sm group-hover:shadow-xl transition-all duration-500 cursor-zoom-in`}
                                                                    onClick={() => setExpandedImage(item.image || null)}
                                                                >
                                                                    <img
                                                                        src={item.image}
                                                                        alt={item.title}
                                                                        className={`${isFull ? 'w-full h-auto' : 'w-full h-full object-cover'} transition-all duration-700 group-hover:scale-[1.03] ${isFloating ? 'scale-[1.4] translate-y-4' : ''} ${isSidepanel ? 'scale-[1.3] translate-x-4' : ''}`}
                                                                    />
                                                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                                                                            <Maximize2 size={24} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : item.isAnimation ? (
                                                                <div className="aspect-[4/3] w-full rounded-[32px] overflow-hidden bg-[#f8f9fa] border border-black/[0.03] relative shadow-sm group-hover:shadow-xl transition-all duration-500 flex items-center justify-center p-8">
                                                                    <div className="scale-125">
                                                                        <MotionPreview type={item.isAnimation} />
                                                                    </div>
                                                                </div>
                                                            ) : null}
                                                            <div className={isFull ? 'max-w-4xl' : ''}>
                                                                <h4 className={`${isFull ? 'text-2xl' : ''} font-bold text-gray-900 mb-2`}>{item.title}</h4>
                                                                <p className={`${isFull ? 'text-lg' : 'text-sm'} text-gray-600 leading-relaxed font-medium`}>{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </Section>
                                ))}

                                {/* Validation Section */}
                                {project.validation && (
                                    <Section title="04. Validation & Analytics" icon={<BarChart3 className="text-amber-500" />}>
                                        {/* Data Collection */}
                                        {project.validation.collection && (
                                            <div className="mb-20">
                                                <div className="p-10 rounded-[40px] bg-[#1a1a1a] text-white overflow-hidden relative">
                                                    <div className="relative z-10">
                                                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/30 mb-8 flex items-center gap-3">
                                                            <div className="w-8 h-[1px] bg-white/10" />
                                                            04.1 Data Collection Method
                                                        </h4>

                                                        <p className="text-xl leading-relaxed font-serif italic text-white/90 mb-10 max-w-2xl">
                                                            {project.validation.collection.desc}
                                                        </p>

                                                        {project.validation.collection.image && (
                                                            <div
                                                                className="rounded-[32px] overflow-hidden border border-white/10 mb-10 cursor-zoom-in group/img relative"
                                                                onClick={() => setExpandedImage(project.validation?.collection?.image || null)}
                                                            >
                                                                <img src={project.validation.collection.image} alt="Data Preview" className="w-full transition-transform duration-700 group-hover/img:scale-105" />
                                                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                                            </div>
                                                        )}

                                                        {project.validation.collection.details && (
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                                                {project.validation.collection.details.map((detail, i) => (
                                                                    <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all">
                                                                        <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">{detail.label}</div>
                                                                        <div className="text-[14px] text-white/70 leading-relaxed font-medium">{detail.value}</div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {project.validation.collection.insight && (
                                                            <div className="p-8 rounded-[32px] bg-white/5 border border-white/5 flex gap-6 items-center">
                                                                <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center shrink-0">
                                                                    <Lightbulb size={24} />
                                                                </div>
                                                                <p className="text-[15px] text-white/80 leading-relaxed font-medium">{project.validation.collection.insight}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Abandonment Analysis */}
                                        {project.validation.abandonmentAnalysis && (
                                            <div className="mb-20">
                                                <h4 className="text-[13px] font-black text-gray-900 mb-8 uppercase tracking-widest flex items-center gap-4">
                                                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                                                    04.2 User Patience Thresholds
                                                </h4>

                                                <p className="text-[18px] text-gray-600 leading-relaxed font-medium mb-12 max-w-3xl italic">
                                                    "{project.validation.abandonmentAnalysis.desc}"
                                                </p>

                                                {project.validation.abandonmentAnalysis.image && (
                                                    <div
                                                        className="rounded-[40px] overflow-hidden border border-black/[0.03] bg-[#fcfcfc] mb-12 cursor-zoom-in group/graph relative p-8 md:p-12"
                                                        onClick={() => setExpandedImage(project.validation?.abandonmentAnalysis?.image || null)}
                                                    >
                                                        <img src={project.validation.abandonmentAnalysis.image} alt="Abandonment Curve" className="w-full transition-all duration-700 group-hover/graph:scale-[1.02]" />
                                                        <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-gray-400 opacity-0 group-hover/graph:opacity-100 transition-all">
                                                            <Maximize2 size={20} />
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                                    {project.validation.abandonmentAnalysis.results?.map((result, i) => (
                                                        <div key={i} className="p-10 rounded-[40px] bg-white border border-black/[0.05] hover:border-black/10 transition-all shadow-sm">
                                                            <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 mb-6 font-black text-xs">
                                                                0{i + 1}
                                                            </div>
                                                            <h5 className="text-[15px] font-black text-gray-900 uppercase tracking-tight mb-4">{result.title}</h5>
                                                            <p className="text-[15px] text-gray-500 leading-relaxed font-medium">{result.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {project.validation.abandonmentAnalysis.quote && (
                                                    <div className="relative p-12 rounded-[48px] bg-amber-50/50 border border-amber-100/50 italic overflow-hidden">
                                                        <div className="absolute -top-4 -left-2 text-[120px] text-amber-200/30 font-serif leading-none select-none">“</div>
                                                        <p className="relative z-10 text-[18px] text-amber-900/80 font-medium leading-[1.6] indent-8">
                                                            {project.validation.abandonmentAnalysis.quote}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Feedback Analysis */}
                                        {project.validation.feedbackAnalysis && (
                                            <div>
                                                <h4 className="text-[13px] font-black text-gray-900 mb-8 uppercase tracking-widest flex items-center gap-4">
                                                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                                                    04.3 Quality & Behavior Analysis
                                                </h4>

                                                <p className="text-[18px] text-gray-600 leading-relaxed font-medium mb-12 max-w-3xl italic">
                                                    "{project.validation.feedbackAnalysis.desc}"
                                                </p>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                                    {project.validation.feedbackAnalysis.metrics?.map((metric, i) => (
                                                        <div key={i} className="p-8 rounded-[32px] bg-gray-50/50 border border-black/[0.02] hover:bg-white hover:shadow-xl hover:border-amber-500/20 transition-all duration-500 group">
                                                            <div className="w-8 h-8 rounded-full bg-white border border-black/[0.05] flex items-center justify-center text-[10px] font-black text-gray-300 mb-6 group-hover:bg-amber-500 group-hover:text-white group-hover:border-transparent transition-all">
                                                                {i + 1}
                                                            </div>
                                                            <h6 className="text-[15px] font-black text-gray-900 mb-3 tracking-tight">{metric.title}</h6>
                                                            <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{metric.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {project.validation.feedbackAnalysis.image && (
                                                    <div
                                                        className="rounded-[40px] overflow-hidden border border-black/[0.03] bg-white cursor-zoom-in group/chart relative shadow-sm mb-12"
                                                        onClick={() => setExpandedImage(project.validation?.feedbackAnalysis?.image || null)}
                                                    >
                                                        <img src={project.validation.feedbackAnalysis.image} alt="Feedback Analysis" className="w-full transition-transform duration-1000 group-hover/chart:scale-[1.05]" />
                                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/chart:opacity-100 transition-opacity flex items-center justify-center">
                                                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover/chart:scale-100 transition-transform duration-500">
                                                                <Maximize2 size={24} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                                    {project.validation.feedbackAnalysis.results?.map((result, i) => (
                                                        <div key={i} className="p-10 rounded-[40px] bg-white border border-black/[0.05] hover:border-black/10 transition-all shadow-sm">
                                                            <div className="text-[10px] font-black text-amber-600 mb-6 uppercase tracking-widest">{result.title}</div>
                                                            <p className="text-[15px] text-gray-500 leading-relaxed font-medium">{result.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {project.validation.feedbackAnalysis.quote && (
                                                    <div className="relative p-12 rounded-[48px] bg-gray-900 text-white overflow-hidden shadow-2xl mb-20">
                                                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full" />
                                                        <div className="absolute -top-4 -left-2 text-[120px] text-white/5 font-serif leading-none select-none">“</div>
                                                        <p className="relative z-10 text-[18px] text-white/90 font-medium leading-[1.6] indent-8">
                                                            {project.validation.feedbackAnalysis.quote}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Strategy Refinement (New) */}
                                                {project.validation.strategyRefinement && (
                                                    <div className="mt-20 border-t border-black/5 pt-20">
                                                        <h4 className="text-[13px] font-black text-gray-900 mb-8 uppercase tracking-widest flex items-center gap-4">
                                                            <div className="w-2 h-2 rounded-full bg-amber-500" />
                                                            04.4 {project.validation.strategyRefinement.title}
                                                        </h4>
                                                        <p className="text-[18px] text-gray-600 leading-relaxed font-medium mb-12 max-w-3xl italic">
                                                            "{project.validation.strategyRefinement.desc}"
                                                        </p>

                                                        {project.validation.strategyRefinement.image && (
                                                            <div
                                                                className="rounded-[40px] overflow-hidden border border-black/[0.03] bg-white cursor-zoom-in group/strat relative shadow-sm mb-12"
                                                                onClick={() => setExpandedImage(project.validation?.strategyRefinement?.image || null)}
                                                            >
                                                                <img src={project.validation.strategyRefinement.image} alt="Evaluation Table" className="w-full transition-transform duration-1000 group-hover/strat:scale-[1.05]" />
                                                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/strat:opacity-100 transition-opacity flex items-center justify-center">
                                                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover/strat:scale-100 transition-transform duration-500">
                                                                        <Maximize2 size={24} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}

                                                        <div className="grid grid-cols-1 gap-12 mt-12">
                                                            {project.validation.strategyRefinement.subSections?.map((sub, i) => (
                                                                <div key={i} className="space-y-8">
                                                                    <div className="max-w-3xl">
                                                                        <h5 className="text-[11px] font-black text-amber-600 mb-3 uppercase tracking-widest">{sub.title}</h5>
                                                                        <p className="text-[16px] text-gray-700 leading-relaxed font-medium">{sub.desc}</p>
                                                                    </div>
                                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                        {sub.images?.map((img, j) => (
                                                                            <div
                                                                                key={j}
                                                                                className="rounded-[32px] overflow-hidden border border-black/5 cursor-zoom-in group/subimg relative aspect-video"
                                                                                onClick={() => setExpandedImage(img)}
                                                                            >
                                                                                <img src={img} alt={`${sub.title} view ${j}`} className="w-full h-full object-cover transition-transform duration-700 group-hover/subimg:scale-105" />
                                                                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/subimg:opacity-100 transition-opacity flex items-center justify-center">
                                                                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                                                                        <Maximize2 size={20} />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        )}
                                    </Section>
                                )}

                                {project.insights && (
                                    <Section title="05. Final Insights & Next Step" icon={<Sparkles className="text-amber-500" />}>
                                        <div className="space-y-4 mb-20">
                                            {project.insights.map((insight, i) => (
                                                <div key={i} className="p-6 rounded-[32px] bg-white border border-black/5 font-medium text-gray-700 flex gap-4 items-center">
                                                    <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                                                        <Zap size={18} />
                                                    </div>
                                                    {insight}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Derived Design Direction */}
                                        {project.validation?.finalDirection && (
                                            <div className="relative p-12 rounded-[56px] bg-[#fcfbf9] border border-amber-500/30 overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/4" />
                                                <div className="relative z-10">
                                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                                                        <Zap size={12} className="fill-white" />
                                                        Strategic Outcome
                                                    </div>
                                                    <h3 className="text-3xl font-serif italic text-gray-900 mb-6">
                                                        {project.validation.finalDirection.title}
                                                    </h3>
                                                    <p className="text-[16px] text-gray-600 leading-relaxed font-medium">
                                                        {project.validation.finalDirection.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </Section>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div >
            )}

            {/* Image Lightbox */}
            <AnimatePresence>
                {expandedImage && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setExpandedImage(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full h-full flex items-center justify-center z-10"
                            onClick={() => setExpandedImage(null)}
                        >
                            <img
                                src={expandedImage}
                                className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                                alt="Expanded view"
                            />
                            <button
                                onClick={() => setExpandedImage(null)}
                                className="absolute top-0 right-0 w-16 h-16 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
                            >
                                <X size={32} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </AnimatePresence >
    );
};

const MetaItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
            {icon} {label}
        </div>
        <p className="text-[13px] font-bold text-[#1a1a1a] leading-tight">{value}</p>
    </div>
);

const Section = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <section className="mb-24 flex flex-col">
        <div className="flex items-center gap-3 mb-10 overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center scale-90">
                {icon}
            </div>
            <h3 className="text-[13px] font-black uppercase tracking-[0.4em] text-gray-900">{title}</h3>
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

export default ProjectModal;
