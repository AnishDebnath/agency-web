import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    project: {
        title: string;
        category: string;
        image: string;
        client: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] cursor-pointer"
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-bold font-display">{project.title}</h3>
                <p className="text-white/80 text-sm mt-1">{project.client}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
