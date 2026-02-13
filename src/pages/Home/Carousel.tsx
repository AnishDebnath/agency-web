import React from 'react';
import { motion } from 'framer-motion';

const carouselItems = [
    {
        id: 1,
        title: "Portfoy",
        category: "Portfolio Template",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        id: 2,
        title: "CourseSite",
        category: "Education Platform",
        img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        id: 3,
        title: "LanderOS",
        category: "SaaS Landing",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        id: 4,
        title: "Alter",
        category: "Fintech Dashboard",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        id: 5,
        title: "Nexus",
        category: "Design System",
        img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
];

interface CarouselProps {
    windowWidth: number;
}

const Carousel: React.FC<CarouselProps> = ({ windowWidth }) => {
    // Duplicate items for seamless loop
    const marqueeItems = [...carouselItems, ...carouselItems, ...carouselItems];

    return (
        <div className="w-full relative z-20 pb-12 md:pb-20 pt-0 overflow-hidden bg-transparent">
            {/* Fade Filters */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-30 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-30 pointer-events-none" />

            <div className="flex overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-33.33%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                    className="flex gap-4 md:gap-6 px-4 min-w-max"
                >
                    {marqueeItems.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="relative flex-shrink-0 w-[85vw] sm:w-[500px] bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-4 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col gap-4"
                        >
                            {/* Image & Content Container */}
                            <div className="w-full h-[400px] rounded-[2rem] overflow-hidden relative isolate group/image">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover/image:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Floating Glass Content Card */}
                                <div className="absolute bottom-4 left-4 right-4 px-5 py-3.5 rounded-[1.5rem] bg-white/10 dark:bg-black/60 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between z-10 transition-transform duration-300 group-hover:scale-[1.02]">
                                    <div>
                                        <h3 className="text-lg font-display font-bold text-white mb-0 tracking-tight group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                                        <p className="text-xs text-slate-200 font-medium opacity-80 uppercase tracking-wider">{item.category}</p>
                                    </div>

                                    <button
                                        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white shadow-md group-hover:rotate-45"
                                    >
                                        <span className="material-symbols-rounded text-[20px]">arrow_outward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Carousel;
