export type MessageType = 'text' | 'projects_brief' | 'skill_chips' | 'experience_timeline' | 'contact_card' | 'rich_response_with_project';

export interface Message {
    id: number;
    type: 'ai' | 'user';
    contentType: MessageType;
    content: string;
    data?: any;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    tag: string;
    color: string;
    span?: string;
    dark?: boolean;
    coverImage?: string;
    // Extended fields for case studies
    duration?: string;
    tools?: string[];
    role?: string;
    overview?: string;
    overviewImage?: string;
    challenge?: string;
    strategy?: {
        goals: { title: string; desc: string }[];
        hypotheses: { title: string; desc: string }[];
        solutions: string[];
    };
    implementation?: {
        title: string;
        desc: string;
        image?: string;
        layout?: 'grid' | 'full';
        items?: { title: string; desc?: string; image?: string; isAnimation?: string; icon?: React.ReactNode }[];
    }[];
    validation?: {
        collection?: {
            title: string;
            desc: string;
            image?: string;
            details?: { label: string; value: string }[];
            insight?: string;
        };
        abandonmentAnalysis?: {
            title: string;
            desc: string;
            image?: string;
            results?: { title: string; desc: string }[];
            quote?: string;
        };
        feedbackAnalysis?: {
            title: string;
            desc: string;
            image?: string;
            metricsTitle?: string;
            metricsDesc?: string;
            metrics?: { title: string; desc: string }[];
            results?: { title: string; desc: string }[];
            quote?: string;
        };
        strategyRefinement?: {
            title: string;
            desc: string;
            image?: string;
            subSections?: {
                title: string;
                desc: string;
                images?: string[];
            }[];
        };
        finalDirection?: {
            title: string;
            desc: string;
            image?: string;
        };
    };
    insights?: string[];
    confidential?: boolean;
    confidentialNotice?: string;
    previewUrl?: string;
    appStoreUrl?: string;
    repoUrl?: string;
    collaboration?: {
        myRole: string;
        teams: { name: string; contribution: string }[];
    };
}

export interface Education {
    year: string;
    degree: string;
    school: string;
    location: string;
    desc: string;
}

export interface Experience {
    year: string;
    role: string;
    company: string;
    location: string;
    desc: string;
}

export interface Skill {
    name: string;
    icon: React.ReactNode;
}

export interface ContactData {
    email: string;
    phone: string;
    linkedin: string;
    linkedinUrl?: string;
    location: string;
}
