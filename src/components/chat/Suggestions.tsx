import React from 'react';
import { motion } from 'framer-motion';

interface SuggestionsProps {
    show: boolean;
    suggestions: string[];
    onSuggestionClick: (suggestion: string) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({
    show,
    suggestions,
    onSuggestionClick
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: show ? 1 : 0, y: 0 }}
            className="flex flex-col items-center gap-4 mt-4 pb-10 w-full"
        >
            {/* Row 1: 3 items */}
            <div className="flex flex-wrap justify-center gap-4 w-full px-4">
                {suggestions.slice(0, 3).map((s, i) => (
                    <motion.button
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i + 0.5, type: "spring" }}
                        key={s}
                        onClick={() => onSuggestionClick(s)}
                        className="suggestion-btn"
                    >
                        {s}
                    </motion.button>
                ))}
            </div>
            {/* Row 2: 2 items */}
            <div className="flex flex-wrap justify-center gap-4 w-full px-4">
                {suggestions.slice(3, 5).map((s, i) => (
                    <motion.button
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * (i + 3) + 0.5, type: "spring" }}
                        key={s}
                        onClick={() => onSuggestionClick(s)}
                        className="suggestion-btn"
                    >
                        {s}
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

export default Suggestions;
