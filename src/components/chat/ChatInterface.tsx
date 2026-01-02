import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Message } from '../../types/chat';
import { cn } from '../../lib/utils';
import ChatMessage from './ChatMessage';

interface ChatInterfaceProps {
    messages: Message[];
    isTyping: boolean;
    isChatActive: boolean;
    onProjectClick: (project: any) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
    messages,
    isTyping,
    isChatActive,
    onProjectClick
}) => {
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isChatActive) {
            const timer = setTimeout(() => {
                chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [messages, isTyping, isChatActive]);

    return (
        <motion.section
            className={cn(
                "w-full max-w-2xl flex flex-col transition-all duration-1000 ease-[0.16,1,0.3,1]",
                isChatActive ? "pt-0 mb-8 mt-12" : "mb-8"
            )}
        >
            <div className={cn("flex flex-col", isChatActive ? "gap-14" : "gap-6")}>
                <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                        <ChatMessage key={msg.id} msg={msg} onProjectClick={onProjectClick} />
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="flex gap-7">
                                <div className="w-12 h-12 rounded-full bg-[#fdebda] border-2 border-white flex items-center justify-center text-[13px] font-black shrink-0 shadow-md relative">
                                    YK
                                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 shadow-sm"></span>
                                    </span>
                                </div>
                                <div className="bg-white/70 backdrop-blur-3xl border border-black/[0.04] px-10 py-7 rounded-[40px] rounded-tl-none flex gap-3 items-center shadow-sm">
                                    <span className="dot" />
                                    <span className="dot" style={{ animationDelay: '0.2s' }} />
                                    <span className="dot" style={{ animationDelay: '0.4s' }} />
                                </div>
                            </div>
                        </div>
                    )}
                </AnimatePresence>
                <div ref={chatEndRef} />
            </div>
        </motion.section>
    );
};

export default ChatInterface;
