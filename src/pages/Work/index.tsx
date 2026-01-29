import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from './data';
import ProjectCard from './ProjectCard';
import WorkHeader from './WorkHeader';
import WorkFilter from './WorkFilter';

const WorkPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="bg-[#FAFAFA] dark:bg-background-dark min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <WorkHeader />
                <WorkFilter
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <div className="bg-[#111] dark:bg-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white dark:text-[#111] mb-8 tracking-tight">
                                Ready to make your<br />content viral?
                            </h2>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-4 bg-primary text-white pl-8 pr-2 py-2 rounded-full font-bold text-lg hover:scale-105 transition-all group"
                            >
                                Start a Project
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-300">
                                    <span className="material-symbols-rounded">arrow_forward</span>
                                </div>
                            </Link>
                        </div>

                        {/* Accents for CTA */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WorkPage;
