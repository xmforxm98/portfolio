import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft, User, LayoutGrid, X, ArrowUpRight, Maximize2, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Orb from '../components/Orb/Orb';
import GradualBlur from '../components/GradualBlur';
import ProjectDetail from '../components/ProjectDetail';
import ProjectModal from '../components/ProjectModal';
import ChatInterface from '../components/chat/ChatInterface';
import AboutCard from '../components/landing/AboutCard';
import Suggestions from '../components/chat/Suggestions';

// Data & Types
import { allProjects, experienceData, getSkillData, initialSuggestions, contactInfo } from '../data/portfolio';
import type { Message, Project } from '../types/chat';

const ChatPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [sidebarMode, setSidebarMode] = useState<'about' | 'portfolio' | 'project' | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const hasInitialized = useRef(false);

    // --- Unified Project Knowledge Base ---
    // Each project has multiple Q&A pairs with trigger keywords and optional widget data
    type ProjectQA = {
        triggers: string[];
        answer: string;
        contentType?: string;  // Optional: 'skill_chips', 'projects_brief', etc.
        data?: any;            // Optional: data for the widget
    };

    // Helper function to create skill chip data
    const createSkillChips = (skills: string[]) => skills.map(name => ({ name, icon: '◆' }));

    // --- Experience Knowledge Base ---
    // Maps company names and roles to detailed responses
    type ExperienceQA = {
        triggers: string[];
        answer: string;
        contentType?: string;
        data?: any;
    };

    const ExperienceKnowledge: Record<string, ExperienceQA[]> = {
        'presight': [
            {
                triggers: ['presight', 'ux/ui designer', 'current', 'abu dhabi', 'uae', 'ai onthology'],
                answer: "At **Presight.ai** (2023-Present), I lead the design for the **AI Chat Integration: Data-Driven UX Environment** and the **Scalable Chart System & Internal Dashboard Builder**.",
                contentType: 'projects_brief',
                data: [allProjects[0], allProjects[2]]
            }
        ],
        'redkurtain': [
            {
                triggers: ['redkurtain', 'red kurtain', 'co-founder', 'play2', 'pl@y2', 'musical', 'ticket'],
                answer: "As **Co-Founder at RedKurtain, Inc.**, I led the product strategy and UX for **PL@Y2**—an anti-macro ticketing revolution.",
                contentType: 'projects_brief',
                data: [allProjects[1]]
            }
        ],
        'smartmind': [
            {
                triggers: ['smartmind', 'smart mind', 'ai product designer', 'pm', 'thanosql', 'made'],
                answer: "At **SmartMind Inc.**, I was the Lead AI Product Designer for **MADE**, an AI-based B2B marketing solution.",
                contentType: 'projects_brief',
                data: [allProjects[4]]
            }
        ],
        'descente': [
            {
                triggers: ['descente', 'le coq', 'sportif', 'umbro'],
                answer: "At **Descente & Le coq sportif Korea**, I worked on the **Sport bag project** and designed **UX for Umbro goalkeeper gloves**.",
                contentType: 'projects_brief',
                data: [
                    { id: 101, title: "Sport Bag Project", category: "Product Design", color: "#1a1a1a" },
                    { id: 102, title: "Umbro Goalkeeper Gloves", category: "UX/Product Design", color: "#1a1a1a" }
                ]
            }
        ],
        'designroad': [
            {
                triggers: ['designroad', 'product designer', '3d print', 'car interior'],
                answer: "At **Designroad**, I worked on **industrial product design, 3D printing design, and automotive interior design**.",
                contentType: 'projects_brief',
                data: [
                    { id: 103, title: "Industrial Product Design", category: "Product Design", color: "#333" },
                    { id: 104, title: "3D Printing & Automotive Interior", category: "Automotive Design", color: "#333" }
                ]
            }
        ],
        'citroen': [
            {
                triggers: ['citroen', 'citroën', 'psa', 'prolab', 'paris', 'france', 'autonomous', 'light design'],
                answer: "At **PSA Citroën Prolab** (2019) in Paris, I worked as a Designer on next-generation light design and autonomous car UX. I proposed gesture control systems using smartwatches for autonomous vehicles.",
                contentType: 'projects_brief',
                data: [allProjects[6]]
            }
        ],
        'aufeer': [
            {
                triggers: ['aufeer', 'skoda', 'hmi', 'czech', 'mlada', 'vision e'],
                answer: "During my **HMI Design Internship at Aufeer Design** (2018) in Czech Republic, I worked on the **SKODA Vision E** project—designing motion language and the 'Touring On Trip' location-based concierge system for autonomous vehicles.",
                contentType: 'projects_brief',
                data: [allProjects[7]]
            }
        ],
        'awards': [
            {
                triggers: ['culture platform', 'ux grand prize', 'moneytoday', 'newspaper', 'award'],
                answer: "**Grand Prize: Culture Platform UX Design** (2022)\n\nI received the Grand Prize from **MoneyToday** for designing a fair and transparent musical ticket booking platform. The project was recognized for resolving the 'macro bot' issue with a 'Pre-verify & Raffle' system.\n\n[Read Article (MoneyToday)](https://www.mt.co.kr/industry/2022/12/27/2022122717102413085)"
            },
            {
                triggers: ['bmw', 'young design award', 'france', 'festival', 'blossome'],
                answer: "**BMW Young Designer Award** (2018)\n\nI won the Young Designer Award by BMW for my project 'Blossome', presented at the **Festival Automobile International** in Paris. The project exploring the future of autonomous interiors was recognized by industry leaders.",
                contentType: 'rich_response_with_project',
                data: {
                    id: 99,
                    title: "BMW Young Designer Award",
                    category: "International Award",
                    color: "#000000",
                    coverImage: "/images/awards/bmw_award.png"
                }
            }
        ],
        'education': [
            {
                triggers: ['strate', 'ecole de design', 'mobility design', 'paris', 'school'],
                answer: "**Strate École de Design (Paris)**\n\nRanked among the top design schools by *l'Étudiant* and *Car Design News*. I completed my **MA in Mobility Design** here, immersing myself in the world-class transportation design ecosystem."
            },
            {
                triggers: ['seoul national university', 'snust', 'design department', 'bachelor'],
                answer: "**Seoul National University of Science and Technology (SNUST)**\n\nKnown as a top-tier design school in Korea for its engineering-design convergence. I built my foundation in industrial design here with a focus on practical output."
            }
        ],
        'about_me_qa': [
            {
                triggers: ['motivate', 'motivation', 'drive', 'passion'],
                answer: "**What motivates me in design?**\n\nI'm driven by the challenge of making complex technologies accessible and intuitive. Seeing users effortlessly navigate through AI-powered interfaces that I've designed gives me immense satisfaction."
            },
            {
                triggers: ['approach', 'challenge', 'methodology', 'process'],
                answer: "**How do I approach challenges?**\n\nI start with thorough research and user empathy, then rapidly prototype and test. My international experience taught me to consider diverse cultural perspectives—I believe in failing fast, learning quickly, and iterating based on data."
            },
            {
                triggers: ['vision', 'career', 'future', 'goal'],
                answer: "**My Career Vision**\n\nI aim to become a leading voice in AI-human interaction design. I want to contribute to making AI technologies more democratized and accessible globally, bridging cultural and technological gaps."
            },
            {
                triggers: ['unique', 'stand out', 'different', 'special'],
                answer: "**What makes me unique?**\n\nMy combination of technical understanding, international perspective (Korea, Japan, France, Czech, UAE), and a data-driven approach sets me apart. I bridge the gap between engineering constraints and user delight."
            }
        ]
    };

    const ProjectKnowledge: Record<number, { questions: string[]; responses: ProjectQA[] }> = {
        0: { // AI Chat Integration
            questions: ["What was your role?", "What was the main challenge?", "How did you validate data?", "Tell me about the AI widgets", "Show me other projects"],
            responses: [
                { triggers: ["role", "did you do", "contribution"], answer: "I led the **UX Strategy & Widget Design**. My goal was to make the AI feel like a 'Collaborative Partner' rather than just a command-line tool.", contentType: 'skill_chips', data: createSkillChips(['UX Strategy', 'Widget Design', 'User Research', 'Prototyping']) },
                { triggers: ["challenge", "problem", "difficult"], answer: "The main challenge was **Uncertainty**. AI outputs can be unpredictable. We needed a UI that could gracefully handle partial failures or long generation times without breaking trust." },
                { triggers: ["validate", "data", "test"], answer: "We used **A/B testing** on widget interactions and tracked user engagement with heatmaps. The 'Labor Illusion' increased task completion confidence by **40%** in user surveys.", contentType: 'skill_chips', data: createSkillChips(['A/B Testing', 'Heatmaps', 'User Surveys', 'Quantitative Analysis']) },
                { triggers: ["widget", "ai", "design"], answer: "I designed specialized widgets like **'Live Analysis'** (shows real-time processing), **'Partial Failure'** (graceful degradation), and **'Labor Illusion'** (visual feedback during AI thinking)." },
                { triggers: ["solution", "outcome", "result"], answer: "I designed a **'Labor Illusion'** widget system that visualizes the AI's 'thinking process' to give users confidence in the result." },
                { triggers: ["overview", "tell me more", "explain"], answer: "This project was about integrating a conversational AI agent into a complex intelligence dashboard for **Presight.ai**." },
                { triggers: ["other projects", "show me other"], answer: "Here are some related projects you might find interesting:", contentType: 'projects_brief', data: [allProjects[4], allProjects[1], allProjects[7]] }
            ]
        },
        1: { // PL@Y2
            questions: ["How did you stop macros?", "What was the user feedback?", "Why a raffle system?", "What data did you collect?", "Show me other projects"],
            responses: [
                { triggers: ["stop", "macro", "bot", "scalp"], answer: "We changed the rules entirely. Instead of fighting bots with speed, we built a **'Pre-verify & Raffle'** system. Bots became useless because speed no longer mattered—everyone had an equal chance." },
                { triggers: ["feedback", "user", "reaction"], answer: "Users were incredibly positive! **93%** said they felt the system was more fair than traditional ticketing. The stress of 'clickwars' was completely eliminated." },
                { triggers: ["raffle", "why", "reason"], answer: "Raffles eliminate the speed advantage. Macros can react in 0.001s, but humans can't. By randomizing selection, we made the playing field **completely level**." },
                { triggers: ["data", "collect", "analytics"], answer: "We collected behavioral data from **2,400 user surveys** and analyzed GA logs with SQL to identify 4 core user personas.", contentType: 'skill_chips', data: createSkillChips(['SQL', 'Google Analytics', 'User Survey', 'Persona Research']) },
                { triggers: ["role", "did you do"], answer: "As **Co-Founder & Product Lead**, I designed the 'Pre-verify & Raffle' logic and the entire mobile user experience." },
                { triggers: ["challenge", "problem"], answer: "Genuine fans were losing out to bots that could buy tickets in 0.001s. It was a technical arms race we couldn't win with just firewalls." },
                { triggers: ["other projects", "show me other"], answer: "Here are some related projects:", contentType: 'projects_brief', data: [allProjects[3], allProjects[0], allProjects[4]] }
            ]
        },
        3: { // Secret Pocket
            questions: ["Why local-only storage?", "What is Zero-Knowledge?", "What tools did you use?", "How does Panic Mode work?", "Show me other projects"],
            responses: [
                { triggers: ["local", "storage", "why", "cloud"], answer: "Cloud sync creates a central point of failure. If a server is breached, millions of passwords leak. **Local-only storage** means your data physically *cannot* be accessed remotely." },
                { triggers: ["zero-knowledge", "zero knowledge", "encryption"], answer: "Zero-Knowledge means even I, as the developer, cannot decrypt your data. Only your device's **Secure Enclave** holds the key. I never see your passwords." },
                { triggers: ["tool", "stack", "tech"], answer: "I built this with iOS-native technologies for maximum security:", contentType: 'skill_chips', data: createSkillChips(['SwiftUI', 'Apple CryptoKit', 'Face ID / Touch ID', 'Secure Enclave']) },
                { triggers: ["panic", "mode", "emergency"], answer: "**Panic Mode** locks the app instantly when you flip your phone face-down. It's for situations where you might be physically coerced to unlock—a quick gesture hides everything." },
                { triggers: ["role", "did you do"], answer: "I was the **Solo Maker**—handling iOS development, encryption logic, and UI/UX design." },
                { triggers: ["other projects", "show me other"], answer: "Here are some other mobile and security-focused projects:", contentType: 'projects_brief', data: [allProjects[5], allProjects[1], allProjects[4]] }
            ]
        },
        4: { // MADE
            questions: ["What is MAB algorithm?", "How did you simplify data?", "What was the business impact?", "How did you work with Data Science?", "Show me other projects"],
            responses: [
                { triggers: ["mab", "algorithm", "bandit"], answer: "**Multi-Armed Bandit (MAB)** is an AI algorithm that optimizes ad combinations by 'exploring' new options and 'exploiting' known winners. It's like a smart slot machine that learns which ads make money." },
                { triggers: ["simplify", "data", "visualize"], answer: "Instead of showing complex probability graphs, I designed a simple **'Winner vs Loser' card** interface. Marketers could see 'Ad A is beating Ad B by 15%' at a glance—no statistics degree required." },
                { triggers: ["business", "impact", "result"], answer: "The dashboard increased client self-service by **60%**, reducing support tickets. The internal 'Dashboard Builder' tool cut new screen development time by half." },
                { triggers: ["data science", "engineer", "collaborate"], answer: "I translated Data Science jargon into designer language. I proposed **3-stage wireframes** so engineers could build incrementally.", contentType: 'skill_chips', data: createSkillChips(['Figma', 'Data Visualization', 'Wireframing', 'Cross-functional Collaboration']) },
                { triggers: ["role", "did you do"], answer: "I served as **PM & Lead Designer**, bridging the gap between Data Scientists and Marketers." },
                { triggers: ["other projects", "show me other"], answer: "Here are some other data-focused projects:", contentType: 'projects_brief', data: [allProjects[0], allProjects[1], allProjects[7]] }
            ]
        },
        5: { // InnerFive
            questions: ["What is Vibe Coding?", "How did you use AI assistance?", "Why Eastern philosophy?", "What is the Flutter stack?", "Show me other projects"],
            responses: [
                { triggers: ["vibe", "coding", "what is"], answer: "**Vibe Coding** is my term for using AI assistants (like Cursor/Claude) to rapidly prototype ideas. It's less about precise code, more about capturing the 'vibe' of an idea quickly." },
                { triggers: ["ai", "assistance", "cursor", "claude"], answer: "I used **Cursor IDE with Claude** to generate Flutter code from natural language prompts. It accelerated development by 3x—I could focus on UX decisions while AI handled boilerplate." },
                { triggers: ["eastern", "philosophy", "why", "saju"], answer: "Eastern philosophy (like Saju) offers deep psychological archetypes that resonate across cultures. I wanted to modernize this ancient wisdom with data-driven visuals instead of superstition." },
                { triggers: ["flutter", "stack", "tech"], answer: "Here's the full tech stack I used:", contentType: 'skill_chips', data: createSkillChips(['Flutter', 'Dart', 'Midjourney', 'Firebase', 'Cursor IDE']) },
                { triggers: ["role", "did you do"], answer: "I was an **AI-Assisted Solo Developer**. This was an experiment in 'Hyper-Productivity' for designers." },
                { triggers: ["other projects", "show me other"], answer: "Check out my other solo maker projects:", contentType: 'projects_brief', data: [allProjects[3], allProjects[1], allProjects[4]] }
            ]
        },
        6: { // Citroen Gesture Control
            questions: ["What is gesture control?", "How does the watch work?", "What gestures did you define?", "How was the user reaction?", "Show me other projects"],
            responses: [
                { triggers: ["gesture", "control", "what is"], answer: "**Gesture Control** replaces buttons and screens with hand movements. For autonomous cars, it means you can 'summon' or 'park' your car with a wave—like magic, but backed by sensors." },
                { triggers: ["watch", "how", "work"], answer: "The smartwatch acts as a **digital car key**. It detects your gestures (raise hand = summon, halt motion = stop) via accelerometer and sends encrypted commands to the car." },
                { triggers: ["define", "gestures", "which"], answer: "I defined 3 core gestures: **'Come to me'** (beckon motion), **'Stop'** (palm halt), and **'Park here'** (point down). Each had to feel intuitive without prior training." },
                { triggers: ["user", "reaction", "feedback"], answer: "In user testing, **8 out of 10** participants guessed the gestures correctly without instruction. The 'magical' feeling of summoning a car scored highest in emotional response surveys." },
                { triggers: ["role", "did you do"], answer: "I was the **UX/HMI Designer**, focusing on gesture interactions using wearable devices.", contentType: 'skill_chips', data: createSkillChips(['HMI Design', 'Gesture UI', 'User Testing', 'Wearable UX']) },
                { triggers: ["other projects", "show me other"], answer: "See my other automotive HMI projects:", contentType: 'projects_brief', data: [allProjects[7], allProjects[0], allProjects[4]] }
            ]
        },
        7: { // SKODA Vision E
            questions: ["What is Touring on Trip?", "How did you design the motion?", "What was the global impact?", "What tools did you use?", "Show me other projects"],
            responses: [
                { triggers: ["touring", "trip", "what is"], answer: "**'Touring on Trip'** is a location-based concierge. When you pass a landmark, the dashboard pops up info: history, ratings, nearby stops. The car becomes a discovery window, not just a gauge cluster." },
                { triggers: ["motion", "design", "animate"], answer: "I used **Principle and After Effects** to prototype kinetic UI transitions. The goal was 'Simply Clever'—smooth, informative animations that don't distract from the scenery outside." },
                { triggers: ["global", "impact", "result"], answer: "The concept influenced **SKODA's production HMI direction** for 2020+ models. Elements of the 'lifestyle hub' philosophy appeared in the ENYAQ iV interior." },
                { triggers: ["tool", "stack", "tech"], answer: "Here's my HMI design toolkit:", contentType: 'skill_chips', data: createSkillChips(['Sketch', 'Figma', 'Principle', 'After Effects', 'Motion Design']) },
                { triggers: ["role", "did you do"], answer: "I worked as an **HMI & Motion Designer** at Aufeer Design, creating the 'Digital Lifestyle Hub' concept." },
                { triggers: ["other projects", "show me other"], answer: "Check out my other automotive/motion projects:", contentType: 'projects_brief', data: [allProjects[6], allProjects[0], allProjects[4]] }
            ]
        }
    };

    // Derived suggestions from knowledge base
    const currentSuggestions = (sidebarMode === 'project' && selectedProject && ProjectKnowledge[selectedProject.id])
        ? ProjectKnowledge[selectedProject.id].questions
        : initialSuggestions;

    const handleSendMessage = (content: string, skipUserMsg = false) => {
        if (!content.trim()) return;

        // 1. Add User Message
        if (!skipUserMsg) {
            setMessages(prev => [...prev, {
                id: Date.now(),
                type: 'user',
                contentType: 'text',
                content
            }]);
        }

        const lowerMsg = content.toLowerCase();

        // 2. Immediate UI Actions (Responsive Sidebar)
        // Check for Project Names
        const projectMatch = allProjects.find(p =>
            lowerMsg.includes(p.title.toLowerCase()) ||
            lowerMsg.includes(p.title.split(':')[0].toLowerCase()) ||
            (p.id === 1 && lowerMsg.includes("play2")) ||
            (p.id === 4 && lowerMsg.includes("made")) ||
            (p.id === 7 && lowerMsg.includes("skoda"))
        );

        // Helper for exact phrase matching
        const matchesPhrase = (phrases: string[]) => phrases.some(p => lowerMsg.includes(p));

        // Specific triggers - avoid false positives
        const isAboutRequest = matchesPhrase(["about yourself", "about you", "who are you", "your profile", "tell me about yourself"]);
        const isPortfolioRequest = matchesPhrase(["show me your projects", "your portfolio", "your work", "see your projects", "show me projects"]);
        const isBackRequest = matchesPhrase(["go back", "back to list", "other projects", "show me other"]);

        if (projectMatch) {
            setSelectedProject(projectMatch);
            setSidebarMode('project');
        }
        else if (isAboutRequest) {
            setSidebarMode('about');
        }
        else if (isPortfolioRequest || isBackRequest) {
            setSidebarMode('portfolio');
            setSelectedProject(null);
        }

        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            let response: Message | null = null;
            let nextSidebarMode = sidebarMode; // Initialize with current state after immediate actions
            let nextSelectedProject = selectedProject; // Initialize with current state after immediate actions

            // --- 3. Navigation Intents (use same helper logic) ---
            const matchesPhrase = (phrases: string[]) => phrases.some(p => lowerMsg.includes(p));
            const isAboutRequest = matchesPhrase(["about yourself", "about you", "who are you", "your profile", "tell me about yourself"]);
            const isPortfolioRequest = matchesPhrase(["show me your projects", "your portfolio", "your work", "see your projects", "show me projects"]);
            const isBackRequest = matchesPhrase(["go back", "back to list", "other projects", "show me other"]);
            const isExperienceRequest = matchesPhrase(["your experience", "work history", "career", "where have you worked"]);

            if (isBackRequest) {
                response = {
                    id: Date.now() + 1,
                    type: 'ai',
                    contentType: 'text',
                    content: "Sure! Here's the portfolio list. Click any card to see the full story."
                };
            }
            else if (isAboutRequest) {
                response = {
                    id: Date.now() + 1,
                    type: 'ai',
                    contentType: 'text',
                    content: "I've opened my profile. I'm a Product Designer who loves solving complex problems with data and AI."
                };
            }
            else if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("hire")) {
                response = {
                    id: Date.now() + 1,
                    type: 'ai',
                    contentType: 'contact_card',
                    content: "I'm always open to new opportunities! Here is how you can reach me.",
                    data: contactInfo
                };
            }
            else if (isPortfolioRequest) {
                response = {
                    id: Date.now() + 1,
                    type: 'ai',
                    contentType: 'projects_brief',
                    content: "I've curated a few projects that highlight my approach to complex systems. Click any card to explore the full story:",
                    data: allProjects.slice(0, 3)
                };
            }
            else if (isExperienceRequest) {
                response = {
                    id: Date.now() + 1,
                    type: 'ai',
                    contentType: 'experience_timeline',
                    content: "I've had the privilege of working with some incredible teams globally. Here's my path so far:",
                    data: experienceData
                };
            }
            else if (lowerMsg.includes("skill") || lowerMsg.includes("stack") || lowerMsg.includes("tool")) {
                response = {
                    id: Date.now() + 1,
                    type: 'ai',
                    contentType: 'skill_chips',
                    content: "Here is my technical toolkit. I bridge the gap between design and code.",
                    data: getSkillData()
                };
            }

            // --- 3. Context-Aware Questions (Reference Open Project) ---
            else if (sidebarMode === 'project' && selectedProject) {
                const knowledge = ProjectKnowledge[selectedProject.id];

                if (knowledge) {
                    // Find matching response by checking triggers
                    const matchedQA = knowledge.responses.find(qa =>
                        qa.triggers.some(trigger => lowerMsg.includes(trigger))
                    );

                    if (matchedQA) {
                        response = {
                            id: Date.now() + 1,
                            type: 'ai',
                            contentType: matchedQA.contentType || 'text',
                            content: matchedQA.answer,
                            ...(matchedQA.data && { data: matchedQA.data })
                        };
                    }
                }
            }

            // --- 3.5. Experience-Based Questions ---
            // Check if user is asking about specific work experience
            if (!response) {
                for (const qaList of Object.values(ExperienceKnowledge)) {
                    const matchedQA = qaList.find(qa =>
                        qa.triggers.some(trigger => lowerMsg.includes(trigger.toLowerCase()))
                    );

                    if (matchedQA) {
                        response = {
                            id: Date.now() + 1,
                            type: 'ai',
                            contentType: matchedQA.contentType || 'text',
                            content: matchedQA.answer,
                            ...(matchedQA.data && { data: matchedQA.data })
                        };
                        break;
                    }
                }
            }

            // --- 4. Project Switching (Name Search) ---
            if (!response) {
                const projectMatch = allProjects.find(p =>
                    lowerMsg.includes(p.title.toLowerCase()) ||
                    lowerMsg.includes(p.title.split(':')[0].toLowerCase()) ||
                    (p.id === 1 && lowerMsg.includes("play2")) ||
                    (p.id === 4 && lowerMsg.includes("made")) ||
                    (p.id === 7 && lowerMsg.includes("skoda"))
                );

                if (projectMatch) {
                    nextSelectedProject = projectMatch;
                    nextSidebarMode = 'project';
                    response = {
                        id: Date.now() + 1,
                        type: 'ai',
                        contentType: 'rich_response_with_project',
                        content: `I've pulled up the details for **${projectMatch.title}**. \n\nYou can ask me about my **Role**, the **Challenge**, or the **Solution** for this project.`,
                        data: projectMatch
                    };
                }
            }

            // --- 5. Fallback (General Conversation) ---
            if (!response) {
                response = {
                    id: Date.now() + 1,
                    type: 'ai',
                    contentType: 'text',
                    content: "I'm listening. You can ask me about my **Projects**, **Skills**, or just say **'Show me your portfolio'**!"
                };
            }

            // Update state ONLY if we found a project in the response logic (Section 4)
            // The "Immediate Actions" above already handle sidebar navigation correctly.
            if (nextSelectedProject && nextSelectedProject !== selectedProject) {
                setSidebarMode(nextSidebarMode);
                setSelectedProject(nextSelectedProject);
            }
            setMessages(prev => [...prev, response!]);

        }, 1000);
    };

    // Initialize with greeting + initial message from landing if exists
    useEffect(() => {
        if (hasInitialized.current) return;
        hasInitialized.current = true;

        const initialGreeting: Message = {
            id: 1,
            type: 'ai',
            contentType: 'text',
            content: "Hello! Let's talk more about my work and how I can help you."
        };

        setMessages([initialGreeting]);

        const state = location.state as { initialMessage?: string; selectedProject?: Project };

        if (state?.selectedProject) {
            setSelectedProject(state.selectedProject);
            setSidebarMode('project');
        }

        if (state?.initialMessage) {
            handleSendMessage(state.initialMessage, true);
        }
    }, [location.state]);

    const openProject = (p: Project) => {
        setSelectedProject(p);
        setSidebarMode('project');

        // Notify chat context
        setMessages(prev => [...prev, {
            id: Date.now(),
            type: 'ai',
            contentType: 'text',
            content: `I've opened the case study for **${p.title}**. Feel free to ask me about the design challenges, data validation, or specific implementation details!`
        }]);
    };

    const handleChatWithProject = (project: Project) => {
        setIsModalOpen(false);

        if (window.innerWidth >= 768) {
            setSidebarMode('project');
            setSelectedProject(project);
        } else {
            setSidebarMode(null);
        }

        handleSendMessage(`Can you tell me more about ${project.title}?`);
    };

    return (
        <div className="min-h-screen relative bg-[#fcfbf9] overflow-x-hidden selection:bg-black/5 selection:text-black">
            <div className="paper-texture" />

            {/* Background Ambient Orb */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <Orb
                    hue={sidebarMode === 'about' ? 45 : (sidebarMode === 'project' ? 200 : (sidebarMode === 'portfolio' ? 180 : (isTyping ? 30 : 20)))}
                    hoverIntensity={isTyping ? 0.12 : 0.05}
                    backgroundColor="#fcfbf9"
                />
            </div>

            {/* Custom Header at 6% top */}
            <header className={`fixed top-[6%] left-0 w-full z-[60] px-8 md:px-16 flex items-center justify-between transition-opacity duration-300 ${isModalOpen ? "opacity-0 pointer-events-none" : (sidebarMode ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100")}`}>
                <button
                    onClick={() => navigate('/')}
                    className="hover:scale-110 active:scale-95 transition-all w-12 h-12 rounded-full border border-black/5 bg-white/40 backdrop-blur-xl flex items-center justify-center text-gray-400 hover:text-black shadow-[0_4px_20px_rgba(0,0,0,0.02)] group"
                >
                    <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>

                <nav className="flex items-center gap-3">
                    <button
                        onClick={() => setSidebarMode(sidebarMode === 'about' ? null : 'about')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all shadow-sm uppercase group backdrop-blur-xl ${sidebarMode === 'about'
                            ? "bg-black text-white border-black"
                            : "bg-white/40 border-black/5 text-gray-400 hover:text-black hover:border-black/10"
                            }`}
                    >
                        <User size={14} className={sidebarMode === 'about' ? "opacity-100" : "opacity-40 group-hover:opacity-100 transition-opacity"} />
                        <span className="text-[11px] font-black tracking-widest">About me</span>
                    </button>
                    <button
                        onClick={() => setSidebarMode(sidebarMode === 'portfolio' ? null : 'portfolio')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all shadow-sm uppercase group backdrop-blur-xl ${sidebarMode === 'portfolio'
                            ? "bg-black text-white border-black"
                            : "bg-white/40 border-black/5 text-gray-400 hover:text-black hover:border-black/10"
                            }`}
                    >
                        <LayoutGrid size={14} className={sidebarMode === 'portfolio' ? "opacity-100" : "opacity-40 group-hover:opacity-100 transition-opacity"} />
                        <span className="text-[11px] font-black tracking-widest">Portfolio</span>
                    </button>
                </nav>
            </header>

            <main className="relative z-10 w-full h-[100vh] flex overflow-hidden">
                <div className={`w-full h-full flex pt-[15vh] px-6 md:px-12 transition-all duration-1000 ease-[0.16,1,0.3,1] ${sidebarMode ? "md:gap-12" : "gap-0"}`}>
                    {/* Chat Section - Independently Scrollable */}
                    <div className={`relative h-full flex flex-col transition-all duration-1000 ease-[0.16,1,0.3,1] ${sidebarMode ? "w-full md:w-1/2" : "w-full max-w-2xl mx-auto"}`}>
                        <GradualBlur position="bottom" height="160px" preset="smooth" className="z-20 pointer-events-none" />
                        <div className="flex-1 overflow-y-auto custom-scrollbar pb-32">
                            <ChatInterface
                                messages={messages}
                                isTyping={isTyping}
                                isChatActive={true}
                                onProjectClick={openProject}
                            />
                            <div className="max-w-xl mx-auto w-full px-4">
                                <Suggestions
                                    show={!isTyping}
                                    suggestions={currentSuggestions}
                                    onSuggestionClick={handleSendMessage}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Interactive Sidebar Section */}
                    <AnimatePresence mode="wait">
                        {sidebarMode && (
                            <motion.div
                                key={sidebarMode}
                                initial={{ opacity: 0, x: window.innerWidth < 768 ? 0 : "20%", y: window.innerWidth < 768 ? "5%" : 0 }}
                                animate={{ opacity: 1, x: 0, y: 0 }}
                                exit={{ opacity: 0, x: window.innerWidth < 768 ? 0 : "20%", y: window.innerWidth < 768 ? "5%" : 0 }}
                                transition={{ type: "spring", damping: 30, stiffness: 200 }}
                                className="fixed inset-0 z-[100] bg-[#fcfbf9]/95 backdrop-blur-xl md:bg-transparent md:relative md:inset-auto md:z-auto md:w-1/2 h-full flex flex-col"
                            >
                                <div className="max-w-4xl mx-auto w-full h-full flex flex-col px-6 pt-12 md:p-0">
                                    <div className="flex-shrink-0 flex justify-between items-center mb-8 md:mb-12 sticky top-0 bg-[#fcfbf9]/60 backdrop-blur-md py-4 z-10 rounded-b-2xl md:static md:bg-transparent md:py-0 md:backdrop-blur-none transition-all">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-black tracking-[.3em] text-amber-600 uppercase">Interactive Panel</span>
                                            <h2 className="text-3xl md:text-3xl font-serif italic text-gray-900 leading-none">
                                                {sidebarMode === 'about' ? "About Me" : (sidebarMode === 'project' && selectedProject ? "Case Study" : "Portfolio Showcase")}
                                            </h2>
                                        </div>
                                        <div className="flex gap-2">
                                            {sidebarMode === 'project' && (
                                                <>
                                                    {selectedProject?.previewUrl && (
                                                        <button
                                                            onClick={() => window.open(selectedProject.previewUrl, '_blank')}
                                                            className="w-12 h-12 rounded-full border border-black/5 bg-white/50 backdrop-blur-md flex items-center justify-center text-gray-500 hover:text-amber-500 transition-all hover:scale-110 active:scale-95 shadow-sm"
                                                            title="Live Demo"
                                                        >
                                                            <ExternalLink size={20} />
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => setIsModalOpen(true)}
                                                        className="w-12 h-12 rounded-full border border-black/5 bg-white/50 backdrop-blur-md flex items-center justify-center text-gray-500 hover:text-black transition-all hover:scale-110 active:scale-95 shadow-sm"
                                                        title="Expand to Full Screen"
                                                    >
                                                        <Maximize2 size={20} />
                                                    </button>
                                                    <button
                                                        onClick={() => setSidebarMode('portfolio')}
                                                        className="w-12 h-12 rounded-full border border-black/5 bg-white/50 backdrop-blur-md flex items-center justify-center text-gray-500 hover:text-black transition-all hover:scale-110 active:scale-95 shadow-sm"
                                                        title="Back to Portfolio"
                                                    >
                                                        <LayoutGrid size={20} />
                                                    </button>
                                                </>
                                            )}
                                            <button
                                                onClick={() => setSidebarMode(null)}
                                                className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95 shadow-lg"
                                            >
                                                <X size={24} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Sidebar Content Area - Independently Scrollable */}
                                    <div className="flex-1 overflow-y-auto custom-scrollbar pb-20 md:pr-4">
                                        <div className="md:scale-[0.85] md:origin-top-left">
                                            {sidebarMode === 'about' ? (
                                                <AboutCard onAsk={(q) => {
                                                    if (window.innerWidth < 768) setSidebarMode(null);
                                                    handleSendMessage(q);
                                                }} />
                                            ) : sidebarMode === 'project' && selectedProject ? (
                                                <ProjectDetail project={selectedProject} />
                                            ) : (
                                                <motion.div
                                                    className="grid grid-cols-1 gap-6 pb-20"
                                                    variants={{
                                                        hidden: { opacity: 0 },
                                                        show: {
                                                            opacity: 1,
                                                            transition: {
                                                                staggerChildren: 0.15,
                                                                delayChildren: 0.6
                                                            }
                                                        }
                                                    }}
                                                    initial="hidden"
                                                    animate="show"
                                                >
                                                    {allProjects.map((p) => (
                                                        <motion.div
                                                            key={p.id}
                                                            variants={{
                                                                hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                                                                show: {
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    filter: 'blur(0px)',
                                                                    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
                                                                }
                                                            }}
                                                            onClick={() => openProject(p)}
                                                            className="group relative h-56 rounded-[32px] overflow-hidden cursor-pointer shadow-sm isolate transform-gpu transition-all duration-500 hover:scale-[1.01]"
                                                            style={{
                                                                backgroundColor: p.color,
                                                                WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                                                            }}
                                                        >
                                                            {/* Cover Image in Sidebar */}
                                                            {p.coverImage && (
                                                                <div
                                                                    className="absolute inset-0 z-0 rounded-[32px] overflow-hidden"
                                                                    style={{ transform: 'translateZ(0)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
                                                                >
                                                                    <img
                                                                        src={p.coverImage}
                                                                        alt={p.title}
                                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                                        style={{ backfaceVisibility: 'hidden', transform: 'translate3d(0,0,0)' }}
                                                                    />
                                                                    <div className={`absolute inset-0 bg-gradient-to-t ${p.dark ? 'from-black/95 via-black/40 to-transparent' : 'from-white/95 via-white/40 to-transparent'}`} />
                                                                </div>
                                                            )}

                                                            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-[1]" />

                                                            <div className="relative h-full p-8 flex flex-col justify-between z-10">
                                                                <div className="flex justify-between items-start">
                                                                    <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${p.dark ? 'bg-white/10 text-white/90 group-hover:bg-white/20' : 'bg-black/5 text-black/60 group-hover:bg-black/10'} backdrop-blur-md transition-colors`}>
                                                                        {p.tag}
                                                                    </span>
                                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 ${p.dark ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
                                                                        <ArrowUpRight size={16} />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <span className={`text-[9px] font-black uppercase tracking-[.2em] opacity-60 mb-2 block ${p.dark ? 'text-white' : 'text-black'}`}>
                                                                        {p.category}
                                                                    </span>
                                                                    <h3 className={`text-xl font-black leading-tight ${p.dark ? 'text-white' : 'text-black'} transition-colors`}>
                                                                        {p.title}
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            {/* Modal Moved to Root Level to avoid clipping */}
            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={selectedProject}
                onChatWithProject={handleChatWithProject}
            />
        </div>
    );
};

export default ChatPage;
