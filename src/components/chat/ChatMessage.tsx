import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Mail,
    Linkedin
} from 'lucide-react';
import type { Message } from '../../types/chat';
import { cn } from '../../lib/utils';

interface ChatMessageProps {
    msg: Message;
    onProjectClick: (project: any) => void;
}

// Simple markdown parser for bold text
const parseMarkdown = (text: string): React.ReactNode => {
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="font-bold">{part}</strong> : part
    );
};

const ChatMessage: React.FC<ChatMessageProps> = ({ msg, onProjectClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn("flex w-full group", msg.type === 'user' ? "justify-end" : "justify-start")}
        >
            <div className={cn("flex gap-7 max-w-[90%]", msg.type === 'user' ? "flex-row-reverse" : "flex-row")}>
                {msg.type === 'ai' && (
                    <div className="w-12 h-12 rounded-full bg-[#fdebda] text-[#1a1a1a] flex items-center justify-center text-[13px] font-black shrink-0 shadow-[0_8px_20px_rgba(0,0,0,0.06)] border-2 border-white mt-1 relative">
                        YK
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-md">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                    </div>
                )}
                <div className="flex flex-col gap-5 w-full">
                    {msg.contentType !== 'rich_response_with_project' && (
                        <div className={cn(
                            "px-10 py-7 text-[17px] leading-[1.65] shadow-[0_12px_45px_rgba(0,0,0,0.03)] transition-all",
                            msg.type === 'user'
                                ? "bg-[#1a1a1a] text-white rounded-[40px] rounded-tr-none font-medium"
                                : "bg-white/80 backdrop-blur-3xl text-[#1a1a1a] rounded-[40px] rounded-tl-none border border-black/[0.04]"
                        )}>
                            {msg.type === 'ai' ? parseMarkdown(msg.content) : msg.content}
                        </div>
                    )}

                    {/* Diverse Components */}
                    {msg.contentType === 'skill_chips' && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 p-2"
                        >
                            {msg.data.map((skill: any, i: number) => (
                                <div key={i} className="flex items-center gap-3 px-6 py-3.5 bg-white/50 border border-black/[0.05] rounded-full text-[14px] font-bold text-gray-500 backdrop-blur-3xl hover:bg-white hover:text-black hover:scale-105 transition-all cursor-default shadow-sm group">
                                    <span className="text-amber-500 transition-transform group-hover:scale-125">{skill.icon}</span>
                                    {skill.name}
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {msg.contentType === 'experience_timeline' && (
                        <div className="flex flex-col gap-6 mt-4 px-4">
                            {msg.data.map((exp: any, i: number) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    key={i}
                                    className="relative pl-10 border-l-2 border-black/5 pb-6 last:pb-0"
                                >
                                    <div className="absolute top-0 left-[-11px] w-5 h-5 rounded-full bg-white border-2 border-amber-500/30 flex items-center justify-center shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                                    </div>
                                    <span className="text-[11px] font-black text-amber-500/80 uppercase tracking-[0.2em]">{exp.year}</span>
                                    <h4 className="text-[17px] font-bold text-[#1a1a1a] leading-tight mb-1">{exp.role}</h4>
                                    <p className="text-[13px] font-black text-gray-300 mb-3 uppercase tracking-widest">{exp.company}</p>
                                    <p className="text-[14px] text-gray-500 leading-relaxed font-medium bg-black/[0.01] p-4 rounded-2xl border border-black/[0.02]">{exp.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {msg.contentType === 'projects_brief' && (
                        <div className="grid grid-cols-1 gap-5 mt-4">
                            {msg.data.slice(0, 3).map((p: any) => (
                                <motion.div
                                    whileHover={{ x: 12, backgroundColor: '#fff', scale: 1.02 }}
                                    onClick={() => onProjectClick(p)}
                                    key={p.id}
                                    className="p-6 bg-white/70 border border-black/[0.05] rounded-[32px] flex items-center gap-6 transition-all cursor-pointer group shadow-sm backdrop-blur-3xl"
                                >
                                    <div className="w-16 h-16 rounded-[24px] shrink-0 shadow-inner flex items-center justify-center relative overflow-hidden bg-gray-100" style={{ backgroundColor: p.color }}>
                                        {p.coverImage && (
                                            <img src={p.coverImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                        )}
                                        <div className="absolute inset-0 bg-black/10 opacity-40 group-hover:opacity-20 transition-opacity" />
                                        <ArrowUpRight size={24} className="relative z-10 text-white opacity-80 group-hover:opacity-100 transition-all scale-75 group-hover:scale-110" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">{p.category}</p>
                                        <h4 className="text-[17px] font-black text-[#1a1a1a] tracking-tight">{p.title}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {msg.contentType === 'contact_card' && (
                        <div className="p-10 bg-white/90 backdrop-blur-3xl border border-black/[0.06] rounded-[48px] shadow-[0_30px_100px_rgba(0,0,0,0.06)] mt-4 flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <span className="text-[11px] font-black tracking-[.3em] text-amber-500/60 uppercase">Collaboration</span>
                                <h4 className="text-3xl md:text-4xl font-serif italic text-[#1a1a1a]">Design is a <br /> collective effort.</h4>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href={`mailto:${msg.data.email}`} className="flex items-center gap-5 p-6 rounded-[32px] bg-black/[0.02] hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all group border border-transparent hover:border-black/5">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg text-amber-500">
                                        <Mail size={22} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[11px] font-black text-gray-300 uppercase tracking-[.2em]">Primary Channel</p>
                                        <p className="text-[16px] font-bold text-[#1a1a1a]">{msg.data.email}</p>
                                    </div>
                                    <ArrowUpRight size={20} className="text-gray-200 group-hover:text-amber-500 transition-colors" />
                                </a>
                                <a href="#" className="flex items-center gap-5 p-6 rounded-[32px] bg-black/[0.02] hover:bg-white hover:shadow-xl hover:scale-[1.02] transition-all group border border-transparent hover:border-black/5">
                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg text-blue-600">
                                        <Linkedin size={22} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[11px] font-black text-gray-300 uppercase tracking-[.2em]">Network</p>
                                        <p className="text-[16px] font-bold text-[#1a1a1a]">Yongwoo Kim</p>
                                    </div>
                                    <ArrowUpRight size={20} className="text-gray-200 group-hover:text-blue-500 transition-colors" />
                                </a>
                            </div>
                            <div className="pt-8 border-t border-black/5 flex items-center justify-between">
                                <span className="text-[12px] font-black text-gray-400 tracking-wider flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" /> {msg.data.location}
                                </span>
                                <div className="px-4 py-1.5 rounded-full bg-green-500/5 border border-green-500/20 flex items-center gap-2.5">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[11px] font-black text-green-700 uppercase">Available</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {msg.contentType === 'rich_response_with_project' && (
                        <div className="flex flex-col gap-6 mt-4">
                            {/* Rich Text with Markdown-like bolding support if needed, simple whitespace for now */}
                            <div className="whitespace-pre-wrap text-[15px] leading-relaxed text-gray-600 font-medium px-4">
                                {msg.content.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g).map((part, i) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                        return <strong key={i} className="text-black font-bold">{part.slice(2, -2)}</strong>;
                                    } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
                                        const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
                                        if (match) {
                                            let text = match[1];
                                            const url = match[2];
                                            let isBold = false;
                                            if (text.includes('**')) {
                                                text = text.replace(/\*\*/g, '');
                                                isBold = true;
                                            }
                                            return <a key={i} href={url} target="_blank" rel="noopener noreferrer" className={`text-amber-600 hover:underline ${isBold ? 'font-bold' : 'font-medium'}`}>{text}</a>;
                                        }
                                    }
                                    return part;
                                })}
                            </div>

                            {/* Embedded Project Card */}
                            {msg.data && (
                                <motion.div
                                    whileHover={{ x: 12, backgroundColor: '#fff', scale: 1.02 }}
                                    onClick={() => onProjectClick(msg.data)}
                                    className="p-6 bg-white/70 border border-black/[0.05] rounded-[32px] flex items-center gap-6 transition-all cursor-pointer group shadow-sm backdrop-blur-3xl mx-2"
                                >
                                    <div className="w-16 h-16 rounded-[24px] shrink-0 shadow-inner flex items-center justify-center relative overflow-hidden bg-gray-100" style={{ backgroundColor: msg.data.color }}>
                                        {msg.data.coverImage && (
                                            <img src={msg.data.coverImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                        )}
                                        <div className="absolute inset-0 bg-black/10 opacity-40 group-hover:opacity-20 transition-opacity" />
                                        <ArrowUpRight size={24} className="relative z-10 text-white opacity-80 group-hover:opacity-100 transition-all scale-75 group-hover:scale-110" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Related Case Study</p>
                                        </div>
                                        <h4 className="text-[17px] font-black text-[#1a1a1a] tracking-tight">{msg.data.title}</h4>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ChatMessage;
