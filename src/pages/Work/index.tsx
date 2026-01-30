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
        <div className="pt-32 pb-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        </div>
    );
};

export default WorkPage;
