import React from 'react';

interface ToolIconProps {
    name: string;
}

const ToolIcon: React.FC<ToolIconProps> = ({ name }) => {
    const getToolConfig = (toolName: string) => {
        const tool = toolName.toLowerCase();

        if (tool.includes('figma')) {
            return {
                color: '#F24E1E',
                bgColor: '#FFF5F3',
                icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
                        <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
                        <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
                        <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
                        <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
                    </svg>
                )
            };
        } else if (tool.includes('photoshop')) {
            return {
                color: '#31A8FF',
                bgColor: '#EBF5FF',
                icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M0 0v24h24V0H0zm1 1h22v22H1V1z" />
                        <path d="M5 5v14h6.5c1.9 0 3.5-.6 4.7-1.8 1.2-1.2 1.8-2.7 1.8-4.5 0-1.9-.6-3.4-1.8-4.6C14.9 6.9 13.3 6.3 11.4 6.3H8.5V5H5zm3.5 3.8h2.9c1.1 0 2 .3 2.6.9.6.6.9 1.4.9 2.4 0 1-.3 1.8-.9 2.4-.6.6-1.5.9-2.6.9H8.5V8.8z" />
                        <path d="M19.5 15.5c0-.8-.3-1.5-.8-2-.5-.5-1.2-.8-2-.8-.5 0-1 .1-1.4.4v-.9h-2.5v7.3h2.6v-3.9c0-.5.1-.9.4-1.2.3-.3.6-.4 1-.4.4 0 .7.1.9.4.2.3.3.6.3 1v4.1h2.6v-4z" />
                    </svg>
                )
            };
        } else if (tool.includes('illustrator')) {
            return {
                color: '#FF9A00',
                bgColor: '#FFF6E5',
                icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M0 0v24h24V0H0zm1 1h22v22H1V1z" />
                        <path d="M10.5 7.5l-3.2 9h2.4l.7-2.2h3.2l.7 2.2h2.4l-3.2-9h-3zm1.5 2.3l1 3.2h-2l1-3.2z" />
                        <path d="M17.5 7.5h-2v9h2v-9z" />
                    </svg>
                )
            };
        } else if (tool.includes('rive')) {
            return {
                color: '#FF3366',
                bgColor: '#FFF0F3',
                icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.48l7 3.5v7.84l-7-3.5V9.48zm16 0v7.84l-7 3.5v-7.84l7-3.5z" />
                    </svg>
                )
            };
        } else if (tool.includes('cursor')) {
            return {
                color: '#000000',
                bgColor: '#F5F5F5',
                icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                    </svg>
                )
            };
        } else if (tool.includes('jupyter')) {
            return {
                color: '#F37726',
                bgColor: '#FFF4ED',
                icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="6" r="1.5" fill="white" />
                        <circle cx="12" cy="18" r="1.5" fill="white" />
                        <circle cx="6" cy="12" r="1.5" fill="white" />
                    </svg>
                )
            };
        }

        // Default
        return {
            color: '#666',
            bgColor: '#F5F5F5',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z" />
                </svg>
            )
        };
    };

    const config = getToolConfig(name);

    return (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/5 bg-white/50 backdrop-blur-sm">
            <div
                className="w-6 h-6 rounded-md flex items-center justify-center"
                style={{ backgroundColor: config.bgColor, color: config.color }}
            >
                {config.icon}
            </div>
            <span className="text-xs font-medium text-gray-700">{name}</span>
        </div>
    );
};

export default ToolIcon;
