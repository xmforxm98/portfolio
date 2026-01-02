import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send } from 'lucide-react';

interface ChatInputProps {
    isChatActive: boolean;
    inputValue: string;
    setInputValue: (value: string) => void;
    onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
    isChatActive,
    inputValue,
    setInputValue,
    onSend
}) => {
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSend(inputValue);
        }
    };

    return (
        <AnimatePresence>
            {isChatActive && (
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 150, opacity: 0 }}
                    transition={{ type: "spring", damping: 32, stiffness: 280 }}
                    className="fixed bottom-12 left-0 w-full px-8 flex justify-center z-[60] pointer-events-none"
                >
                    <div className="w-full max-w-2xl bg-white/70 backdrop-blur-[60px] border border-black/[0.07] rounded-[48px] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.18)] flex items-center pointer-events-auto group focus-within:ring-[12px] ring-amber-500/[0.03] transition-all duration-700">
                        <div className="flex-1 flex items-center px-6">
                            <div className="w-10 h-10 rounded-2xl bg-black/[0.03] flex items-center justify-center mr-5 transition-colors group-focus-within:bg-amber-500/10">
                                <MessageSquare size={20} className="text-gray-400 group-focus-within:text-amber-600 transition-colors" />
                            </div>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask about design, AI, or collaborate..."
                                className="w-full bg-transparent py-5 outline-none text-[18px] placeholder:text-gray-300 font-medium antialiased tracking-tight"
                            />
                        </div>
                        <button
                            onClick={() => onSend(inputValue)}
                            disabled={!inputValue.trim()}
                            className="w-16 h-16 bg-[#1a1a1a] text-white flex items-center justify-center rounded-[32px] hover:scale-110 active:scale-95 disabled:opacity-5 disabled:scale-100 transition-all shadow-3xl group/btn overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700 blur-2xl translate-y-10 group-hover/btn:translate-y-0" />
                            <Send size={24} className="relative z-10 transition-transform duration-500 group-hover/btn:-rotate-12" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ChatInput;
