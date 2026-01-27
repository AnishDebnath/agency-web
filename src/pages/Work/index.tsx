import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <div className="bg-[#FAFAFA] dark:bg-background-dark min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <WorkHeader />
                <WorkFilter
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
