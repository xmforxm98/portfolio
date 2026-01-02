import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Components
import Orb from '../components/Orb/Orb';
import ProjectModal from '../components/ProjectModal';
import ChatInterface from '../components/chat/ChatInterface';
import Suggestions from '../components/chat/Suggestions';
import LandingHero from '../components/landing/LandingHero';
import ProjectGallery from '../components/landing/ProjectGallery';
import GradualBlur from '../components/GradualBlur';

// Data & Types
import { allProjects, initialSuggestions } from '../data/portfolio';
import type { Message, Project } from '../types/chat';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();
    const [messages, setMessages] = useState<Message[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // Initial Greeting Flow for Landing
        const timers = [
            setTimeout(() => {
                setMessages([{
                    id: 1,
                    type: 'ai',
                    contentType: 'text',
                    content: '👋 안녕하세요! I\'m YONGWOO KIM, a AI Product designer.'
                }]);
            }, 1000),
            setTimeout(() => setIsTyping(true), 2500),
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, {
                    id: 2,
                    type: 'ai',
                    contentType: 'text',
                    content: 'Currently, I\'m at Presight.ai, where I bridge the gap between high-complexity AI and human intuition. Curious about something?'
                }]);
                setShowSuggestions(true);
            }, 4500)
        ];
        return () => timers.forEach(t => clearTimeout(t));
    }, []);

    const handleSuggestionClick = (suggestion: string) => {
        // Navigate to Chat page and pass the selected suggestion
        navigate('/chat', { state: { initialMessage: suggestion } });
    };

    const openProject = (p: Project) => {
        setSelectedProject(p);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen relative bg-[#fcfbf9] overflow-x-hidden selection:bg-black/5 selection:text-black">
            <div className="paper-texture" />

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-[1000] origin-left"
                style={{ scaleX }}
            />

            {/* Background Ambient Orb */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <Orb
                    hue={isTyping ? 45 : 20}
                    hoverIntensity={isTyping ? 0.12 : 0.05}
                    backgroundColor="#fcfbf9"
                />
            </div>

            <main className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center pt-8 px-6 md:px-12 transition-all duration-700">
                <ProjectModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    project={selectedProject}
                    onChatWithProject={(p) => {
                        setIsModalOpen(false);
                        navigate('/chat', { state: { initialMessage: `Can you tell me more about ${p.title}?`, selectedProject: p } });
                    }}
                />

                <LandingHero isChatActive={false} />

                <ChatInterface
                    messages={messages}
                    isTyping={isTyping}
                    isChatActive={false}
                    onProjectClick={openProject}
                />

                <Suggestions
                    show={showSuggestions}
                    suggestions={initialSuggestions}
                    onSuggestionClick={handleSuggestionClick}
                />

                <ProjectGallery
                    isChatActive={false}
                    projects={allProjects}
                    onProjectClick={openProject}
                />
            </main>

            <GradualBlur
                target="page"
                position="bottom"
                height="12rem"
                strength={3}
                divCount={10}
                curve="bezier"
                exponential={true}
                opacity={1}
                zIndex={100}
            />
        </div>
    );
};

export default LandingPage;
