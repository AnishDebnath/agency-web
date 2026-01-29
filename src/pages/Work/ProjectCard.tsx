import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        category: string;
        image: string;
        client: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link to={`/work/${project.id}`}>
            <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                viewport={{ once: true }}
                className="group bg-white dark:bg-slate-900/50 rounded-[3rem] p-4 pb-8 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
            >
                {/* Image Frame */}
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-black mb-8 border border-slate-100 dark:border-slate-800">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                </div>

                {/* Info Area */}
                <div className="px-6 flex justify-between items-end mt-auto">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 font-display">{project.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">{project.category}</p>
                    </div>
                    <motion.div
                        className="w-12 h-12 flex-shrink-0 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 overflow-hidden"
                    >
                        <motion.span
                            variants={{
                                initial: { x: 0, y: 0 },
                                hover: { x: 5, y: -5 }
                            }}
                            initial="initial"
                            className="material-symbols-rounded text-slate-400 group-hover:text-white transition-colors"
                        >
                            north_east
                        </motion.span>
                    </motion.div>
                </div>
            </motion.div>
        </Link>
    );
};

export default ProjectCard;
