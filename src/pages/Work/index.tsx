import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import WorkHeader from './WorkHeader';
import WorkFilter, { categories } from './WorkFilter';
import { FreePrototype, Process, WorkTestimonials, CTA } from '../../components';

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
        id: "ecommerce-pro-template",
        title: "E-Commerce Pro Template",
        category: "Website Templates",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        client: "Template Marketplace",
        subtitle: "Modern, conversion-optimized e-commerce template.",
        description: "A fully responsive e-commerce template with advanced features including product filtering, cart management, and seamless checkout experience. Built with modern web technologies for optimal performance.",
        services: ["UI/UX Design", "Frontend Development", "E-Commerce Integration"],
        date: "Oct 2023",
        liveLink: "https://demo.example.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=ecommerce-pro",
        customiseLink: "/contact?service=templates",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80", alt: "Main Hero" },
            { type: 'text', title: "The Challenge", body: "Creating a template that works for various e-commerce businesses while maintaining high performance and conversion rates. The template needed to be both beautiful and functional out of the box." },
            { type: 'image', src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80", alt: "Product Pages" },
            { type: 'text', title: "The Solution", body: "We designed a modular template system with customizable components, integrated payment gateways, and optimized for mobile-first shopping experiences. The result was a 40% increase in conversion rates for early adopters." },
            { type: 'grid', images: ["https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"] }
        ]
    },
    {
        id: "corporate-website-redesign",
        title: "Corporate Website Redesign",
        category: "Custom Websites",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        client: "TechCorp Solutions",
        subtitle: "Professional, modern corporate web presence.",
        description: "Complete redesign of a corporate website with focus on user experience, brand consistency, and lead generation. Implemented modern design principles and optimized for conversions.",
        services: ["Web Design", "Development", "SEO Optimization"],
        date: "Nov 2023",
        liveLink: "https://techcorp.example.com",
        liveLabel: "View Live",
        buyLink: "/contact?project=corporate-redesign",
        customiseLink: "/contact?service=custom-websites",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80", alt: "Hero" },
            { type: 'text', title: "Narrative Flow", body: "The old website lacked clear navigation and modern design. We created a streamlined user journey with clear CTAs and engaging content sections that guide visitors toward conversion." },
            { type: 'image', src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80", alt: "Design System" }
        ]
    },
    {
        id: "social-media-campaign",
        title: "Social Media Growth Campaign",
        category: "Social Media",
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
        client: "FitLife Brand",
        subtitle: "Strategic social media management and growth.",
        description: "Comprehensive social media strategy and content creation that resulted in 300% follower growth and 5x engagement increase across all platforms.",
        services: ["Content Strategy", "Social Media Management", "Analytics"],
        date: "Dec 2023",
        liveLink: "https://instagram.com/fitlife",
        liveLabel: "View Profile",
        buyLink: "/contact?project=social-media",
        customiseLink: "/contact?service=social-media",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1600&q=80", alt: "Social Campaign" },
            { type: 'text', title: "Growth Strategy", body: "We developed a data-driven content calendar with engaging posts, stories, and reels optimized for each platform's algorithm. Consistent posting schedule and community engagement drove remarkable growth." }
        ]
    },
    {
        id: "saas-dashboard-platform",
        title: "SaaS Analytics Dashboard",
        category: "SaaS Products",
        image: "https://images.unsplash.com/photo-1621504450168-b8c437517b3d?auto=format&fit=crop&w=800&q=80",
        client: "DataFlow Inc",
        subtitle: "Powerful analytics platform for businesses.",
        description: "Built a comprehensive SaaS analytics platform from MVP to full production. Features real-time data visualization, custom reporting, and team collaboration tools.",
        services: ["SaaS Development", "UI/UX Design", "Backend Architecture"],
        date: "Jan 2024",
        liveLink: "https://dataflow.example.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=saas-platform",
        customiseLink: "/contact?service=saas",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1621504450168-b8c437517b3d?auto=format&fit=crop&w=1600&q=80", alt: "Dashboard" }
        ]
    },
    {
        id: "portfolio-template",
        title: "Creative Portfolio Template",
        category: "Website Templates",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        client: "Template Store",
        subtitle: "Stunning portfolio template for creatives.",
        description: "A beautiful, minimalist portfolio template designed for photographers, designers, and creative professionals. Features smooth animations and gallery layouts.",
        services: ["Template Design", "Frontend Development", "Animation"],
        date: "Feb 2024",
        liveLink: "https://portfolio-demo.example.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=portfolio-template",
        customiseLink: "/contact?service=templates",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80", alt: "Portfolio" }
        ]
    },
    {
        id: "restaurant-booking-app",
        title: "Restaurant Booking SaaS",
        category: "SaaS Products",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
        client: "DineEasy",
        subtitle: "Complete reservation management system.",
        description: "Full-stack SaaS application for restaurant reservations with table management, customer CRM, and automated notifications. Serving 50+ restaurants.",
        services: ["Full-Stack Development", "Database Design", "API Integration"],
        date: "Mar 2024",
        liveLink: "https://dineeasy.example.com",
        liveLabel: "View Demo",
        buyLink: "/contact?project=booking-saas",
        customiseLink: "/contact?service=saas",
        content: [
            { type: 'image', src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80", alt: "App Interface" }
        ]
    }
];



const WorkPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="pt-25 pb-0 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
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
            <CTA />
        </div>
    );
};

export default WorkPage;
