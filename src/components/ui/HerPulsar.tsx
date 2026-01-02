import React from 'react';
import { motion } from 'framer-motion';

const HerPulsar: React.FC = () => {
    // Generate multiple paths for a "threaded" look
    const layers = 3;

    return (
        <div className="relative w-28 h-10 flex items-center justify-center scale-125">
            {/* Ambient Bloom */}
            <div className="absolute inset-0 bg-green-500/5 blur-2xl rounded-full scale-150" />

            <svg viewBox="0 0 120 40" className="w-full h-full overflow-visible">
                <defs>
                    <linearGradient id="thread-grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
                        <stop offset="50%" stopColor="rgba(177, 255, 205, 0.25)" />
                        <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                    </linearGradient>
                    <linearGradient id="thread-grad-gold" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(251, 191, 36, 0)" />
                        <stop offset="30%" stopColor="rgba(251, 191, 36, 0.4)" />
                        <stop offset="70%" stopColor="rgba(251, 191, 36, 0.4)" />
                        <stop offset="100%" stopColor="rgba(251, 191, 36, 0)" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="0.8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {[...Array(layers)].map((_, i) => (
                    <React.Fragment key={i}>
                        {/* Green Thread Layer */}
                        <motion.path
                            d="M10,20 C30,5 45,35 60,20 C75,5 90,35 110,20"
                            stroke="url(#thread-grad-green)"
                            strokeWidth={1.2 - i * 0.2}
                            fill="none"
                            strokeLinecap="round"
                            animate={{
                                d: [
                                    "M10,20 C30,5 45,35 60,20 C75,5 90,35 110,20",
                                    "M10,20 C30,35 45,5 60,20 C75,35 90,5 110,20",
                                    "M10,20 C30,5 45,35 60,20 C75,5 90,35 110,20"
                                ]
                            }}
                            transition={{
                                duration: 3.5 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.2
                            }}
                            filter="url(#glow)"
                        />

                        {/* Gold Thread Layer */}
                        <motion.path
                            d="M10,20 C30,35 45,5 60,20 C75,35 90,5 110,20"
                            stroke="url(#thread-grad-gold)"
                            strokeWidth={0.8 - i * 0.1}
                            fill="none"
                            strokeLinecap="round"
                            animate={{
                                d: [
                                    "M10,20 C30,35 45,5 60,20 C75,35 90,5 110,20",
                                    "M10,20 C30,5 45,35 60,20 C75,5 90,35 110,20",
                                    "M10,20 C30,35 45,5 60,20 C75,35 90,5 110,20"
                                ]
                            }}
                            transition={{
                                duration: 4.2 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3 + 0.5
                            }}
                        />
                    </React.Fragment>
                ))}

                {/* Center highlight "Pulse" */}
                <motion.circle
                    r="1"
                    fill="#fbbf24"
                    animate={{
                        cx: [10, 110, 10],
                        opacity: [0, 0.8, 0]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <animate attributeName="cy" values="20;15;25;20" dur="2s" repeatCount="indefinite" />
                </motion.circle>
            </svg>
        </div>
    );
};

export default HerPulsar;
