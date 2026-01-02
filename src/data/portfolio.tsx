import { Sparkles, Briefcase, Layers, Code, Compass, ArrowUpRight } from 'lucide-react';
import type { Project, Experience, Education } from '../types/chat';

export const allProjects: Project[] = [
    {
        id: 0,
        title: "AI Chat Integration: Data-Driven UX Environment",
        category: "AI Solution & UX Strategy",
        tag: "Confidential",
        color: "#0a0a0a",
        span: "md:col-span-3",
        dark: true,
        coverImage: "/images/ai_chat_hero.png",
        previewUrl: "https://nexus-ai-flax.vercel.app",
        duration: "12 Weeks (20+ Screens)",
        tools: ["Figma", "Rive", "Cursor", "Jupyter Notebook", "Photoshop", "Illustrator"],
        role: "UX/UI Designer (AI Widget System & Quantitative Validation)",
        confidential: true,
        confidentialNotice: "This project involves a highly sensitive investigative system linked to national security. Due to strict NDA obligations, actual UI/UX screenshots are prohibited. All visual materials have been reconstructed to explain the design logic.",
        overview: "Integrating a first-of-its-kind AI chat engine into a complex intelligence dashboard.",
        collaboration: {
            myRole: "UX, Widget UI Design, Virtual Data Analysis (Led: AI Widget System Design & Quantitative UX Validation)",
            teams: [
                { name: "Design Team", contribution: "Multi-layout system and GUI theme development" },
                { name: "PM & DS Team", contribution: "Business goal alignment and AI output data type definition" },
                { name: "Engineering Team", contribution: "RIVE pipeline implementation and data logging infrastructure" }
            ]
        },
        challenge: "The primary challenge was integrating AI as a 'collaborative agent' without disrupting expert workflows. In the absence of established UI patterns or user behavior data, we had to define new criteria for visual hierarchy and interaction affordances for unpredictable AI responses while managing engine limitations.",
        strategy: {
            goals: [
                { title: "Empower Users", desc: "Enable seamless task execution through AI chat interaction." },
                { title: "Tech Frontier Branding", desc: "Reflect the 'Tech Frontier' identity through modern AI design trends." },
                { title: "Optimize Wait Experience", desc: "Mitigate negative perceptions of AI computation and loading times." }
            ],
            hypotheses: [
                { title: "Layout Control", desc: "Giving users layout control according to task context will reduce initial task abandonment." },
                { title: "Widget Familiarity", desc: "Using familiar widget interfaces for AI results will eliminate learning costs and increase adoption." },
                { title: "Transparency via Motion", desc: "Revealing the system's thinking process through motion will resolve negative wait time perceptions." }
            ],
            solutions: [
                "Optimized layout options (Floating, SidePanel, FullScreen) based on user type and task nature.",
                "reused existing dashboard widget systems for AI response visualization to ensure consistency.",
                "Applied modern gradients and latest AI trends to establish a technical frontier brand image.",
                "collaborated with motion designers for a Rive-based animation pipeline providing diverse feedback.",
                "Implemented interactive motions (Drag & Drop, @mentions) to enhance the conversational environment."
            ]
        },
        implementation: [
            {
                title: "Flexible Layout System",
                desc: "Designed three distinct layouts to prioritize different working styles.",
                items: [
                    { title: "Floating Assistant", desc: "For quick queries without losing screen real estate.", image: "/images/popup.png" },
                    { title: "Side Panel (L/R)", desc: "For deeper collaboration and multitasking with the main dashboard.", image: "/images/Sidepanel.png" },
                    { title: "Full Screen Widget", desc: "For intensive data analysis and reporting.", image: "/images/Fullscreen.png" }
                ]
            },
            {
                title: "Interactive AI Motion",
                desc: "Established a 'Living Assistant' model using procedural animations for enhanced user engagement.",
                items: [
                    {
                        title: "Procedural Eye Tracking",
                        desc: "Eyes follow user cursor movements and blink to create a life-like presence.",
                        isAnimation: "eye-tracking"
                    },
                    {
                        title: "Adaptive State Motion",
                        desc: "Floating physics and halo rotation that change based on system status.",
                        isAnimation: "status-motion"
                    },
                    {
                        title: "Dynamic Drop Zone",
                        desc: "Pulsating dashed border that activates during data drag interactions.",
                        isAnimation: "drag-drop"
                    }
                ]
            },
            {
                title: "Living Interaction Environment",
                desc: "Integrated contextual interaction flows to minimize user cognitive load during complex analysis.",
                items: [
                    {
                        title: "Seamless Drag & Drop",
                        desc: "Directly attach data assets to the strategy by dragging cards into the workspace.",
                        image: "/images/motion_drag.png"
                    },
                    {
                        title: "Contextual Menu",
                        desc: "Immediate access to AI Chat or deep analysis right from the asset card.",
                        image: "/images/motion_menu.png"
                    },
                    {
                        title: "Contextual Refencing (@)",
                        desc: "Mention specific files or logs in chat using the @ trigger for faster interaction.",
                        image: "/images/motion_search.png"
                    },
                    {
                        title: "Multi-Asset Discussion",
                        desc: "Simultaneously handle multiple attached files within a single conversational thread.",
                        image: "/images/motion_chat_assets.png"
                    },
                    {
                        title: "Verification Logs",
                        desc: "Transparently display AI processing status and data integrity markers.",
                        image: "/images/motion_logs.png"
                    }
                ]
            },
            {
                title: "AI Widget System Architecture",
                desc: "Developed a modular library of 14+ specialized widgets designed for high-density intelligence analysis.",
                layout: "grid",
                items: [
                    { title: "Live Event Stream", desc: "Real-time monitoring of incoming data packets and system triggers.", image: "/images/widget1.png" },
                    { title: "Entity Map", desc: "Visualizing complex relationships between data nodes and actors.", image: "/images/widget2.png" },
                    { title: "Temporal Analysis", desc: "Tracking chronology and sequence of events across multiple sources.", image: "/images/widget3.png" },
                    { title: "Geospatial Intelligence", desc: "Interactive mapping of data points to physical coordinate systems.", image: "/images/widget4.png" },
                    { title: "Narrative Summary", desc: "AI-generated natural language insights from unstructured data.", image: "/images/widget5.png" },
                    { title: "Media Forensics", desc: "Deep analysis of audio and video assets for investigative leads.", image: "/images/widget6.png" },
                    { title: "Behavioral Patterns", desc: "Identifying anomalous activity through pattern recognition models.", image: "/images/widget7.png" },
                    { title: "Sentiment Engine", desc: "Contextual tone analysis of communication logs and social feeds.", image: "/images/widget8.png" },
                    { title: "Cross-Border Flow", desc: "Mapping international data transfers and transit pathways.", image: "/images/widget9.png" },
                    { title: "Trigger Hub", desc: "Managing automated alerts and proactive system responses.", image: "/images/widget14.png" },
                    { title: "Identity Resolution", desc: "Merging fragmented data points into unified subject profiles.", image: "/images/widget10.png" },
                    { title: "Risk Scoring Matrix", desc: "Multi-factor threat evaluation using weighted algorithmic scoring.", image: "/images/widget11.png" },
                    { title: "Resource Monitor", desc: "Tracking AI processing efficiency and computational load.", image: "/images/widget13.png" },
                    { title: "Collaborative Dossier", desc: "Shared investigation workspace for multi-user coordination.", image: "/images/widget12.png" }
                ]
            }
        ],
        validation: {
            collection: {
                title: "Raw Data Preview",
                desc: "We captured raw interaction logs to analyze how users actually behave when AI responses are slow.",
                image: "/images/PNG image.png",
                details: [
                    { label: "Column 'is_abandoned'", value: "Tracks if users leave when waiting time exceeds 8.5s or 30s." },
                    { label: "Column 'trust_score'", value: "Measures why users lose trust in complex Video/Audio widgets during long waits." }
                ],
                insight: "This data proved that technical speed issues are actually 'Design Problems' that we need to solve with better UX strategies."
            },
            abandonmentAnalysis: {
                title: "User Patience Levels",
                desc: "We analyzed how long different users are willing to wait for AI answers based on their goals.",
                image: "/images/graph.png",
                results: [
                    { title: "General Tasks (8.5s Limit)", desc: "Users lose patience quickly after 8.5 seconds for simple questions. They expect almost instant answers." },
                    { title: "Research Tasks (30s Limit)", desc: "For deep analysis, users wait up to 30 seconds because they value the high-quality results." }
                ],
                quote: "Finding these exact 8.5s and 30s 'patience limits' helped us decide exactly when to show Skeleton screens and loading logs."
            },
            feedbackAnalysis: {
                title: "User Behavior & Feedback",
                desc: "We tracked what users do after getting an AI response to see if they were happy with the result.",
                image: "/images/Chart.png",
                metrics: [
                    { title: "Retention", desc: "Did the user come back to use the same widget again for similar tasks?" },
                    { title: "Utility", desc: "Did they download or share the generated files (PDF/Video)?" },
                    { title: "Positive Interest", desc: "Did they ask more questions or give positive feedback after the answer?" }
                ],
                results: [
                    {
                        title: "PDF & Text (The 'Success' Group)",
                        desc: "These earned high trust scores (7.5~8.2) because they respond quickly or provide detailed info worth the wait. Users felt their patience was directly rewarded with real value."
                    },
                    {
                        title: "Video & Audio (The 'Utility Gap' Group)",
                        desc: "Despite waiting the longest (up to 3 mins), trust was low (2.8~3.2). Since AI performance didn't match the long wait, users felt disappointed—a far worse experience than just a simple delay."
                    }
                ],
                quote: "Our analysis showed that video was the widget users waited for the longest (3 min), but simultaneously caused the most disappointment. User patience is not infinite; when the 'wait time' vs 'result quality' balance is broken, trust drops sharply. This is why I proposed the 'Quality-based Conditional Exposure' strategy as a core design requirement."
            },
            strategyRefinement: {
                title: "Design Evaluation & Insights",
                desc: "We confirmed that it's not simply 'waiting time', but the 'Value of Waiting (Reward)' that determines abandonment. 8.5 seconds is the psychological 'Doherty Threshold' where users start misinterpreting delays as system errors.",
                image: "/images/table.png",
                subSections: [
                    {
                        title: "Contextual Feedback Strategy",
                        desc: "For waits exceeding 10s, we introduce Skeleton UI tailored to widget types and real-time logs with a 'Cancel' option to maintain user perceived control.",
                        images: ["/images/skeltonui.png", "/images/log.png"]
                    },
                    {
                        title: "Reliability-based UX Pivot",
                        desc: "If predicted reliability is < 80%, we pivot to a 'Partial Success' UI rather than forcing a long wait. We also use 'Labor Illusion' by visualizing data volume to justify processing time.",
                        images: ["/images/Sensor.png", "/images/Predictive.png"]
                    }
                ]
            },
            finalDirection: {
                title: "Design Direction: AI Analysis Studio",
                desc: "To prevent trust erosion from chat-based latency, we've separated 'AI Studio' into a dedicated high-performance menu. This guides users seeking deep analysis toward a structured, reliable tool rather than a purely conversational interface."
            }
        },
        insights: [
            "Wait time is not simply 'bad'; it's about the perceived 'Value of Waiting' (Reward).",
            "Contextual Skeleton UI and real-time logs must trigger at the 10-second mark to maintain system trust.",
            "Visualizing 'Labor Illusion' (data volume) justifies longer processing times for high-complexity tasks.",
            "Critical depth analysis should be separated into a dedicated 'AI Analysis Studio' menu when accuracy outweighs speed."
        ]
    },
    {
        id: 1,
        title: "PL@Y2: Anti-Macro Ticketing Revolution",
        category: "Product Pivot & UX Strategy",
        tag: "Co-Founder",
        color: "#881337",
        span: "md:col-span-2",
        dark: true,
        coverImage: "/images/play2_thumb.png",
        duration: "Strategic Pivot Phase",
        tools: ["Framer", "Figma", "User Testing", "Data Analysis"],
        role: "Co-founder / UX/UI Specialist",
        overview: "The company designed a strategic phase to pivot from a record-oriented productivity app to a commerce-based reservation service to drive tangible revenue. Based on co-founder insights, we established an initial hypothesis: 'If we address the unsatisfactory automated environments and complex UX of legacy booking platforms, users will favor a more convenient service even at a premium.' We then designed the UI/UX to maximize user convenience and integrated technical solutions to validate the business model's potential.",
        overviewImage: "/images/play2.png",
        appStoreUrl: "https://apps.apple.com/us/app/pl-y2/id1159328039",
        implementation: [
            {
                title: "CHAPTER 1: Redefining the Problem through Research",
                desc: "To validate our initial hypothesis, we conducted an open survey with 2,400 participants and follow-up in-depth interviews (IDI) with heavy users (attending 2+ times/week). The results revealed that the real bottleneck wasn't server instability, but the fatigue caused by macro-based illegal booking seizing premium seats. This exhaustion from previous failures and re-selection—a 'sense of helplessness regarding booking success'—was the core pain point. Consequently, we pivoted our goal from technical optimization to designing fair booking opportunities via anti-macro initiatives.",
                image: "/images/play2-1.png"
            },
            {
                title: "CHAPTER 2: Limitations of Technical Barriers and Discovery of a New Approach",
                desc: "The first alternative considered to block macros was strengthening text-based CAPTCHA, a common practice among legacy booking platforms. However, through high-fidelity (Hi-Fi) prototypes created using Framer and user testing (UT) at actual theater sites, we identified unexpected side effects. Strengthened CAPTCHA acted more as an entry barrier that increased booking time for general users rather than effectively stopping macros. While users struggled with complex characters, macros seized remaining seats even faster, leading to a greater sense of psychological deprivation. A decisive insight gained from interviews was the behavior pattern of heavy users, who showed high involvement by waiting an hour before opening. Consequently, we pivoted our UX strategy to leverage the user's 'prepared time and active participation' as a core system resource, rather than focusing on controlling the 'physical speed' of macros.",
                image: "/images/play2-2.png"
            },
            {
                title: "CHAPTER 3: Redesigning Processes and Data-Driven Filtering",
                desc: "To move beyond simple speed-based competition, we introduced a 'Pre-selection' session one hour before the official opening and implemented real-time data visualizations to guide user behavior.",
                layout: "full",
                items: [
                    {
                        title: "Pre-selection Session",
                        desc: "A strategic waiting period that validates user intent and distributes server load before peak traffic.",
                        image: "/images/play2-3.png"
                    },
                    {
                        title: "Multi-dimensional Filtering",
                        desc: "Advanced search options (date, cast, time) to help users quickly identify their preferred sessions amidst complex conditions.",
                        image: "/images/play2-4.png"
                    },
                    {
                        title: "UI Solution: Real-time Congestion Visualization",
                        desc: "Exposed real-time click density on seats. This allowed users to intuitively gauge competition and strategically move to less contested areas, naturally distributing system load and increasing individual booking success.",
                        image: "/images/play2-5.png"
                    },
                    {
                        title: "Log Analysis: Filtering Abnormal Behavior Patterns",
                        desc: "Analyzed click logs to identify mechanical macro reactions (e.g., 0.001s response times). By extracting 'valid data within human range', we built a Raffle system that prioritizes genuine users, effectively neutralizing technical advantages of bots.",
                        image: "/images/play2-8.png"
                    },
                    {
                        title: "Intelligent Re-booking Loop",
                        desc: "Designed a loop that maintains previous selection data (cast, date) upon booking failure, allowing immediate alternative seat selection and minimizing exploration costs.",
                        image: "/images/play2-6.png"
                    }
                ]
            },
            {
                title: "CHAPTER 4: Designing Async Payment UX to Overcome Technical Bottlenecks",
                desc: "Under stress tests, we found that our internal logic held but third-party payment gateways crashed. realizing we couldn't fix external infrastructure, we designed a sequence-shifted UX flow: 'Pre-emptive Reservation with Async Sequential Payment'. Users secure seats immediately, and the system processes transactions within 3 hours as traffic stabilizes.",
                image: "/images/play2-7.png",
                layout: "full",
                items: [
                    {
                        title: "Transaction De-coupling",
                        desc: "Separating seat reservation from payment processing to protect the system from gateway-induced crashes."
                    },
                    {
                        title: "Async Sequential Flow",
                        desc: "A stable processing queue that ensures 100% transaction success without overloading external servers."
                    }
                ]
            },
            {
                title: "EPILOGUE: Practical Achievements and Business Insights",
                desc: "While the project successfully proved the system's maturity and macro defense efficiency, it also highlighted the challenge of competing with giant platforms. However, it provided invaluable assets as a UX expert:",
                layout: "grid",
                items: [
                    {
                        title: "Data-Driven Flexibility",
                        desc: "Learned the value of pivoting project direction based on 2,400 real voices rather than initial assumptions."
                    },
                    {
                        title: "On-site Persistence",
                        desc: "Witnessed real user pain points first-hand with prototypes, confirming the power of design to solve practical problems."
                    },
                    {
                        title: "Systemic Problem Solving",
                        desc: "Proved how design can resolve system bottlenecks and protect user experience within technical and business constraints."
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Scalable Chart System & Internal Dashboard Builder",
        category: "Data Visualization & Design System",
        tag: "Project Lead",
        color: "#1e1e1e",
        span: "md:col-span-1",
        dark: true,
        coverImage: "/images/ds1.png",
        duration: "6 Months (Internal Tool)",
        tools: ["Figma Variables", "React", "D3.js", "Storybook"],
        role: "Lead Product Designer (Design System)",
        overview: "Developed a proprietary chart engine and dashboard builder to move beyond the limitations of Mixpanel and Power BI. By creating a 'Dashboard Builder' from scratch, we achieved 0% component errors and established high-fidelity reusable components that maintain perfect brand identity and engineering consistency.",
        implementation: [
            {
                title: "CHAPTER 1: Scalable Chart System (Atomic Structure)",
                desc: "I led the design of the 'Scalable Chart System,' the core of the dashboard builder. To solve the issue where fixed chart assets couldn't adapt to variable grid systems, I built a component hierarchy based on an Inheritance Structure (Base Component → Chart Engine → Widget Wrapper). This allows dashboards to be built by dragging widget handles, instantly yielding optimized views for any grid size.",
                image: "/images/ds2.png"
            },
            {
                title: "CHAPTER 2: Base Component & Engine Configuration",
                desc: "Established the foundational data settings and technical logic for 12 different chart types, ensuring metadata and content-aware layouts function seamlessly across the system.",
                layout: "full",
                items: [
                    {
                        title: "Base Component: Data",
                        desc: "Conducted exhaustive data setup for 12 chart types to ensure a robust foundation.",
                        image: "/images/ds3.png"
                    },
                    {
                        title: "Chart Engine & Widget Wrapper",
                        desc: "Designed the rendering and interaction rules that power the visualization experience.",
                        image: "/images/ds4.png"
                    }
                ]
            },
            {
                title: "CHAPTER 3: Technical Breakthrough - Context-Aware Responsive Logic",
                desc: "Designed responsive rules prioritized for data readability rather than simple scaling. Legend positions automatically adjust using Auto Layout Wrapping, and X-axis labels simplify for small widths (<400px). We also implemented edge case handling for data point spikes, using automatic scrolling or summarization to prevent label overlapping."
            },
            {
                title: "CHAPTER 4: The Master Container",
                desc: "I designed the 'Master Card Component' as the universal root for all widgets. It uses a Slot-based Architecture to separate Header and Content areas, supporting 1-3 charts with Auto-Responsive Distribution. When resizing, content redistributes via Dynamic Stacking for mobile. Additionally, Figma property names sync perfectly with development code, creating a 'Single Source of Truth'.",
                layout: "full",
                items: [
                    {
                        title: "Slot-based Architecture",
                        desc: "Flexible slots that optimize layouts for everything from single metrics to complex comparison charts.",
                        image: "/images/ds5.png"
                    },
                    {
                        title: "Auto-Responsive & Property Sync",
                        desc: "Dynamic stacking for mobile views and 1:1 property mapping between Figma and Code.",
                        image: "/images/ds6.png"
                    }
                ]
            },
            {
                title: "EPILOGUE: Result & Impact",
                desc: "The new builder drastically accelerated internal and client dashboard construction. Clients highly praised the result for its perfect harmony of data readability and brand identity, proving that complex technical constraints can be resolved effectively through design-system level logic.",
                layout: "full",
                items: [
                    {
                        title: "System Overview",
                        image: "/images/ds1.png"
                    },
                    {
                        title: "Final Implementation",
                        image: "/images/ds7.png"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Secret Pocket: Zero-Knowledge iOS Vault",
        category: "Mobile App & Privacy",
        tag: "Solo Launch",
        color: "#0a0a0a",
        span: "md:col-span-1",
        dark: true,
        coverImage: "/images/pocket1.png",
        duration: "3 Months (Solo Launch)",
        appStoreUrl: "https://apps.apple.com/us/app/secret-pocket/id6755483422",
        tools: ["SwiftUI", "Apple CryptoKit", "Local Auth", "Figma"],
        role: "iOS Developer & Designer",
        overview: "A standalone iOS security app designed for maximum privacy. Unlike cloud-based password managers, Secret Pocket ensures Zero-Knowledge architecture by storing data *only* on the local device with military-grade encryption.",
        implementation: [
            {
                title: "CHAPTER 1: Native Security & Zero-Cloud Architecture",
                desc: "Built entirely in SwiftUI using Apple's latest security frameworks. I implemented a Zero-Knowledge architecture where sensitive data never leaves the device. Using Apple's CryptoKit and Secure Enclave, I ensured hardware-level protection for every user vault.",
                image: "/images/pocket1.png"
            },
            {
                title: "CHAPTER 2: Human-Centric Security UX",
                desc: "Designed to give users absolute control and transparency. I focused on removing the 'fear' from security by using a friendly, card-based interface. Features like 'Panic Mode' (face-down locking) and local-only backups prioritize user sovereignty over convenience.",
                layout: "grid",
                items: [
                    { title: "Secure Enclave", desc: "Biometric auth required for every sensitive read." },
                    { title: "Local Isolation", desc: "No network permissions requested, ensuring zero external leaks." },
                    { title: "Panic UI", desc: "Instant lock mechanism for physical privacy." },
                    { title: "Master Auth", desc: "Hardware-backed master password management." }
                ]
            },
            {
                title: "Visual Vault",
                desc: "A comprehensive visual showcase of the Secret Pocket interface, demonstrating the clean, intuitive design that makes security accessible.",
                layout: "full",
                items: [
                    { title: "App Interface", image: "/images/secretpocket1.png" }
                ]
            },
            {
                title: "EPILOGUE: Result & Solo Launch",
                desc: "Secret Pocket was successfully launched on the App Store as a premium standalone utility. By handling the entire lifecycle—from encryption logic to App Store optimization—I delivered a product that resonates with privacy-conscious users globally.",
            }
        ]
    },
    {
        id: 3,
        title: "AI-based B2B Digital Advertising Marketing Solution: MADE",
        category: "AI Algorithm & B2B Marketing",
        tag: "PM & Design Lead",
        color: "#2c2c2c",
        span: "md:col-span-2",
        dark: true,
        coverImage: "/images/made1.png",
        duration: "Product Lifecycle Management",
        tools: ["Figma", "Notion", "Multi-Armed Bandit Concept", "Design Systems"],
        role: "Product Manager & Lead Designer",
        overview: "A ranking system based on AI algorithms that connects advertisers and marketers, ranking revenue-based ROAS to create the most efficient marketing plans. As both PM and Lead Designer, I orchestrated the lifecycle from algorithm conceptualization (Multi-Armed Bandit) to a scalable design system implemented across 40+ screens.",
        implementation: [
            {
                title: "CHAPTER 1: Project Architecture & Multi-Armed Bandit",
                desc: "We developed a system that refines raw advertiser data to create campaigns on Google, Facebook, and Naver. The core engine uses the Multi-Armed Bandit model to recommend advertising campaigns in real-time, achieving maximum efficiency. As PM, I coordinated the schedule between the Data Science and Web teams, ensuring the technical logic translated perfectly into the UX.",
                image: "/images/made2.png"
            },
            {
                title: "CHAPTER 2: Strategic Planning & Process Management",
                desc: "I defined the solution requirements and built detailed specifications. By establishing a WBS (Work Breakdown Structure) plan, I managed the project after the initial design system construction. We shortened the development period by modifying designs in real-time with team members to meet evolving technical requirements.",
                image: "/images/made3.png"
            },
            {
                title: "CHAPTER 3: Information Architecture & User Flow",
                desc: "I designed the IA for two distinct user groups: Advertisers and Marketers. This dual-perspective approach ensured that advertisers could easily track performance while marketers had the tools to link accounts and optimize campaign execution.",
                image: "/images/made4.png"
            },
            {
                title: "CHAPTER 4: Design System & Scalable implementation",
                desc: "I built a comprehensive design system including common components like buttons, inputs, and feedback messages. This 'Single Source of Truth' allowed us to move quickly to high-fidelity screen design and significantly reduced frontend development time.",
                image: "/images/made5.png"
            },
            {
                title: "CHAPTER 5: Solution Result (Visual Showcase)",
                desc: "The final solution consists of 40+ screens. 18 screens were dedicated to the Advertiser side (performance tracking, ad creation) and 22 screens for the Marketer side (account linking, marketing execution, verification).",
                layout: "full",
                items: [
                    { title: "Advertiser Hub", icon: <ArrowUpRight />, image: "/images/made6.png" },
                    { title: "Marketer Control Center", icon: <ArrowUpRight />, image: "/images/made7.png" },
                    { title: "Performance Analysis", icon: <ArrowUpRight />, image: "/images/made8.png" }
                ]
            },
            {
                title: "CHAPTER 6: Beyond MADE: AI Analysis Dashboard Expansion",
                desc: "To maintain consistency across the entire AI ecosystem, we successfully extended the MADE design system to a new AI analysis dashboard. By reusing proven components and layout grids, we maintained brand identity while dramatically shortening implementation speed for subsequent products.",
                layout: "grid",
                items: [
                    { title: "Dashboard Overview", image: "/images/made9.png" },
                    { title: "Data Visualization", image: "/images/made10.png" },
                    { title: "Intelligence Feed", image: "/images/made11.png" },
                    { title: "System Monitoring", image: "/images/made12.png" },
                    { title: "User Analytics", image: "/images/made13.png" },
                    { title: "Global Controls", image: "/images/made14.png" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "InnerFive: AI-Powered Eastern Wisdom",
        category: "AI Native & Data UX",
        tag: "Vibe Coding",
        color: "#4a3b32",
        span: "md:col-span-1",
        dark: true,
        duration: "2 Months",
        coverImage: "/images/inner1.png",
        tools: ["Flutter", "Midjourney", "Cursor (AI)", "Python", "Firebase"],
        role: "Maker (AI Assistance)",
        overview: "An experimental 'Vibe Coding' project exploring how ancient Eastern philosophy (Saju) can be reinterpreted through modern Data UX and Generative AI. This project modernizes 'Fortune Telling' into a sophisticated self-reflection tool, stripping away superstition to focus on psychological archetypes.",
        previewUrl: "https://innerfive.web.app/",
        implementation: [
            {
                title: "CHAPTER 1: Modernizing Archaic Texts with AI",
                desc: "Using Python and Generative AI to translate complex, archaic Eastern philosophy into modern psychological archetypes. I built a processing pipeline that identifies core behavioral patterns and maps them to contemporary insights.",
                image: "/images/ediosfati.png"
            },
            {
                title: "CHAPTER 2: Immersive Generative Aesthetics",
                desc: "Leveraging Midjourney to create a unique visual language that bridges ancient mysticism with contemporary design. I generated 50+ unique tarot-style assets to visualize abstract fortune concepts, creating an immersive, mystical experience.",
                image: "/images/InnerFive1.png",
                layout: "grid",
                items: [
                    { title: "Archetype Visualization I", image: "/images/edios2.png" },
                    { title: "Archetype Visualization II", image: "/images/edios3.png" },
                    { title: "Archetype Visualization III", image: "/images/edios4.png" }
                ]
            },

        ]
    },
    {
        id: 6,
        title: "Gesture Control: Citroën Autonomous HMI",
        category: "Automotive HMI & IoT",
        tag: "Citroën Experience",
        color: "#212529",
        span: "md:col-span-1",
        dark: true,
        coverImage: "/images/citroen.png",
        duration: "3 Months",
        tools: ["Adobe XD", "Photoshop", "After Effects", "Illustrator"],
        role: "UI/UX Designer",
        overview: "Citroen was working on a project to present a new driver experience using autonomous driving technology and smartwatches. I proposed a new gesture control design using a smartwatch.",
        implementation: [
            {
                title: "CHAPTER 1: Vision of Autonomous Interaction",
                desc: "Exploring how autonomous driving technology and wearable devices can harmonize to create a new type of driver engagement.",
                layout: "full",
                items: [
                    { title: " Citroën Vision I", image: "/images/14.png" },
                    { title: "Citroën Vision II", image: "/images/15.png" }
                ]
            },
            {
                title: "CHAPTER 2: Gesture Interaction Logic",
                desc: "Defining the core movements and logic that allow intuitive control of the vehicle's autonomous systems.",
                layout: "full",
                items: [
                    { title: "Interaction Logic I", image: "/images/16.png" },
                    { title: "Interaction Logic II", image: "/images/17.png" }
                ]
            },
            {
                title: "CHAPTER 3: Smartwatch UI Design",
                desc: "Crafting a clear, responsive interface optimized for small wearable screens and rapid interactions.",
                layout: "full",
                items: [
                    { title: "UI Design I", image: "/images/18.png" },
                    { title: "UI Design II", image: "/images/19.png" }
                ]
            },
            {
                title: "CHAPTER 4: The Gesture Ecosystem",
                desc: "A holistic view of the integrated system connecting the user, the watch, and the autonomous vehicle.",
                layout: "full",
                items: [
                    { title: "Ecosystem I", image: "/images/20.png" },
                    { title: "Ecosystem II", image: "/images/21.png" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "SKODA Vision E: Future of HMI",
        category: "Automotive & Motion Design",
        tag: "Global Concept",
        color: "#064e3b",
        span: "md:col-span-1",
        dark: true,
        coverImage: "/images/skoda1.png",
        duration: "Concept Phase (Collaborative)",
        tools: ["After Effects", "Adobe XD", "Cinema 4D", "Illustrator"],
        role: "HMI & Motion Designer",
        overview: "Participated in the SKODA Vision E project, conceptualizing various scenarios to enhance the driving experience for autonomous vehicles. I designed and proposed a motion design language that aligns with Skoda's brand identity, reimagining the cabin as a digital lifestyle hub.",
        implementation: [
            {
                title: "CHAPTER 1: Reimagining the Dashboard as a Lifestyle Hub",
                desc: "The Vision E features a panoramic display spanning the entire cockpit. I proposed various in-car activities such as ticket booking, real-time information feeds, and E-Books, integrated with a seamless payment ecosystem to utilize the dashboard as an interactive canvas.",
                image: "/images/skoda1.png"
            },
            {
                title: "CHAPTER 2: Touring On Trip (Location-Based Concierge)",
                desc: "I developed the 'Touring On Trip' service, which delivers location-aware local insights and services. This feature received highly positive feedback for transforming the commute into a journey of discovery, proving the potential of autonomous vehicles as personalized service platforms.",
                image: "/images/skoda2.png"
            },
            {
                title: "EPILOGUE: Results & Global Impact",
                desc: "The project was showcased at global auto shows, validating the feasibility of a service-oriented HMI. By defining a kinetic brand identity through motion design, we successfully translated Skoda's 'Simply Clever' philosophy into a futuristic digital experience."
            }
        ]
    }
];

export const experienceData: Experience[] = [
    { year: "2023 - Present", role: "AI UX/UI Designer", company: "Presight.ai", location: "Abu Dhabi - UAE", desc: "AI Solution Platform" },
    { year: "2022 - 2023", role: "Co-Founder", company: "RedKurtain, Inc.", location: "Seoul - South Korea", desc: "PL@Y2 - Culture Activity App, 4th generation Musical Ticket Booking Solution" },
    { year: "2020 - 2022", role: "Lead AI Product designer", company: "SmartMind. Inc.", location: "Seoul - South Korea", desc: "ThanoSQL, AI Solutions" },
    { year: "2019", role: "Product Designer", company: "PSA Citroen Prolab", location: "Paris - France", desc: "Next generation light design, Autonomous car UX design" },
    { year: "2018", role: "HMI Design Intern", company: "Aufeer Design", location: "Mlada - Czech Republic", desc: "Autonomous car HMI design" },
    { year: "2018", role: "Product Design Intern", company: "Descente & Le coq sportif Korea", location: "Seoul - South Korea", desc: "Sport bag project, UX Umbro goalkeeper gloves" },
    { year: "2017/2022", role: "Product Designer", company: "Designroad", location: "Seoul - South Korea", desc: "Product designer" }
];

export const educationData: Education[] = [
    { year: "2017 - 2019", degree: "MA Mobility Design", school: "Strate École de Design", location: "Paris, France", desc: "Mobilite design" },
    { year: "2011 - 2017", degree: "Design Department", school: "Seoul National University S&T", location: "Seoul, Korea", desc: "Design department" }
];

export const contactInfo = {
    email: "yongwoo.kim@strate.design",
    phone: "+82-10-2027-1169",
    linkedin: "linkedin.com/in/yongwoo-kim",
    linkedinUrl: "https://www.linkedin.com/in/yongwoo-kim",
    location: "Abu Dhabi, UAE"
};

export const initialSuggestions = [
    "TELL ME ABOUT YOURSELF",
    "WHAT ARE YOUR SKILLS?",
    "SHOW ME YOUR PROJECTS",
    "WHAT'S YOUR EXPERIENCE?",
    "HOW CAN I CONTACT YOU?"
];

export const getSkillData = () => [
    { name: "UX Strategy", icon: <Briefcase size={12} /> },
    { name: "AI Solution Design", icon: <Sparkles size={12} /> },
    { name: "Design Systems", icon: <Layers size={12} /> },
    { name: "Creative Coding", icon: <Code size={12} /> },
    { name: "Product Vision", icon: <Compass size={12} /> }
];
