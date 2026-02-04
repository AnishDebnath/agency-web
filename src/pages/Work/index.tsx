import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import WorkHeader from './WorkHeader';
import WorkFilter, { categories } from './WorkFilter';
import FreePrototype from '../../components/FreePrototype';
import Process from '../Home/Process';
import WorkTestimonials from './WorkTestimonials';

export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    client: string;
    subtitle: string;
    description: string;
    services: string[];
    date: string;
    liveLink: string;
    liveLabel?: string;
    buyLink?: string;
    customiseLink?: string;
    content: (
        | { type: 'image'; src: string; alt: string; className?: string }
        | { type: 'text'; title: string; body: string }
        | { type: 'grid'; images: string[] }
    )[];
}

export const projects: Project[] = [
    {
        id: "tech-review-iphone-15",
        title: "Tech Review: iPhone 15 Pro",
        category: "Long-form",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
        client: "TechDaily",
        subtitle: "Cinematic tech storytelling that drives engagement.",
        description: "We transformed a standard tech review into a cinematic experience, using dynamic b-roll and sound design to keep retention high throughout the 15-minute runtime.",
        services: ["Video Editing", "Sound Design", "Motion Graphics"],
        date: "Oct 2023",
        liveLink: "https://youtube.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=iphone15",
        customiseLink: "/contact?service=editing",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80", alt: "Main Hero" },
            { type: 'text', title: "The Challenge", body: "Tech reviews often suffer from 'talking head' syndrome. The goal was to visualize every spec and feature mentioned without losing the creator's personal touch." },
            { type: 'image', src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80", alt: "Editing Timeline" },
            { type: 'text', title: "The Solution", body: "We utilized custom motion graphics to display specs and layered sound effects to give weight to the product shots. The result was a 40% increase in average view duration." },
            { type: 'grid', images: ["https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"] }
        ]
    },
    {
        id: "day-in-life-ceo",
        title: "Day in the Life of a CEO",
        category: "Vlog",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        client: "Sarah J.",
        subtitle: "Authentic, fast-paced personal branding content.",
        description: "Capturing the chaos and control of a CEO's daily routine. We focused on pacing and music to reflect the energy of the day.",
        services: ["Vlog Editing", "Color Grading"],
        date: "Nov 2023",
        liveLink: "https://instagram.com",
        liveLabel: "View Live",
        buyLink: "/contact?project=ceo-vlog",
        customiseLink: "/contact?service=vlog",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80", alt: "Hero" },
            { type: 'text', title: "Narrative Flow", body: "Vlogs can easily feel disjointed. We created a clear three-act structure: The Morning Routine, The Grind, and The Wind Down." },
            { type: 'image', src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80", alt: "Meeting Scene" }
        ]
    },
    {
        id: "viral-tiktok-dance",
        title: "Viral TikTok Dance Edit",
        category: "Shorts",
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
        client: "DanceSquad",
        subtitle: "High-energy beats synced to perfection.",
        description: "A snappy, beat-synced edit designed to loop perfectly and catch eyes on the For You Page.",
        services: ["Social Cuts", "Effects"],
        date: "Dec 2023",
        liveLink: "https://tiktok.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=tiktok-dance",
        customiseLink: "/contact?service=shorts",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1600&q=80", alt: "Dance Hero" },
            { type: 'text', title: "Retention Hacks", body: "We used subtle zoom-ins on every beat drop and added dynamic object tracking to keep the focus strictly on the movement." }
        ]
    },
    {
        id: "crypto-market-update",
        title: "Crypto Market Update",
        category: "Educational",
        image: "https://images.unsplash.com/photo-1621504450168-b8c437517b3d?auto=format&fit=crop&w=800&q=80",
        client: "CoinFlow",
        subtitle: "Complex data made simple and visual.",
        description: "Breaking down complex market trends into easy-to-digest visual segments using heavy motion graphics.",
        services: ["Motion Design", "Editing"],
        date: "Jan 2024",
        liveLink: "https://twitter.com",
        liveLabel: "View Live",
        buyLink: "/contact?project=crypto",
        customiseLink: "/contact?service=educational",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1621504450168-b8c437517b3d?auto=format&fit=crop&w=1600&q=80", alt: "Crypto Chart" }
        ]
    },
    {
        id: "travel-vlog-japan",
        title: "Travel Vlog: Japan",
        category: "Vlog",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        client: "Wanderlust",
        subtitle: "A visual journey through the streets of Tokyo.",
        description: "Atmospheric sound design and color grading that transports the viewer straight to Japan.",
        services: ["Sound Design", "Color Grading", "Editing"],
        date: "Feb 2024",
        liveLink: "https://youtube.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=japan-vlog",
        customiseLink: "/contact?service=vlog",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80", alt: "Tokyo Streets" }
        ]
    },
    {
        id: "fitness-transformation",
        title: "Fitness Transformation",
        category: "Shorts",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        client: "FitFam",
        subtitle: "Motivating and high-impact short form content.",
        description: "A fast-paced transformation reveal designed to stop the scroll and drive coaching signups.",
        services: ["Vertical Editing", "Sound Design"],
        date: "Mar 2024",
        liveLink: "https://instagram.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=fitness",
        customiseLink: "/contact?service=shorts",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80", alt: "Gym" }
        ]
    }
];



const WorkPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="pt-32 pb-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24">
                <WorkHeader />
                <WorkFilter
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <FreePrototype />
            <Process />
            <WorkTestimonials />
        </div>
    );
};

export default WorkPage;

