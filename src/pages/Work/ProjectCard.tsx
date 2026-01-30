import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        category: string;
        image: string;
        client: string;
        subtitle: string;
        services: string[];
        date: string;
        website: string;
        price: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-[#0F0F0F] rounded-[2rem] p-3 pb-6 border border-slate-100 dark:border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col"
        >
            {/* Image Section - Home Page Style with internal padding */}
            <div
                onClick={() => navigate(`/work/${project.id}`)}
                className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-slate-50 dark:bg-slate-900 mb-4 border border-slate-100 dark:border-white/5 cursor-pointer"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />

                {/* Overlays Tags - Styled Identically */}
                <div className="absolute top-3 left-3 flex gap-1.5 font-sans">
                    <span className="px-2.5 py-1 bg-white/95 dark:bg-black/80 backdrop-blur-xl rounded-full text-[8px] font-black uppercase tracking-wider text-[#111] dark:text-white border border-white/20 shadow-sm">
                        {project.category}
                    </span>
                    <span className="px-2.5 py-1 bg-white/95 dark:bg-black/80 backdrop-blur-xl rounded-full text-[8px] font-black uppercase tracking-wider text-[#111] dark:text-white border border-white/20 shadow-sm">
                        {project.date.split(' ')[1]}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-3 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl font-display font-extrabold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">
                        {project.title.split(':')[0]}
                    </h3>
                    {/* Price removed as per request */}
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-[12px] leading-relaxed mb-4 font-medium line-clamp-2">
                    {project.subtitle}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 mb-6">
                    {project.services.slice(0, 3).map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#FF5C00]/60" />
                            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                {service}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Action Area */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5 space-y-2">
                    <div className="flex gap-2">
                        <button
                            className="flex-grow bg-[#0F172A] dark:bg-white text-white dark:text-[#0F172A] rounded-lg py-2.5 font-bold text-[9px] uppercase tracking-widest flex items-center justify-center gap-1.5 hover:bg-primary dark:hover:bg-primary hover:text-white transition-all active:scale-95"
                        >
                            <span className="material-symbols-rounded text-base">shopping_cart</span>
                            Buy Now
                        </button>
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-[0.8] bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white rounded-lg py-2.5 px-3 border border-slate-200 dark:border-white/10 flex items-center justify-center gap-1.5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all font-bold text-[9px] uppercase tracking-widest active:scale-95"
                        >
                            <span className="material-symbols-rounded text-base">visibility</span>
                            View Live
                        </a>
                    </div>
                    <Link
                        to="/contact"
                        className="w-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 rounded-lg py-2.5 font-bold text-[9px] uppercase tracking-widest flex items-center justify-center gap-1.5 hover:bg-slate-50 dark:hover:bg-white/5 transition-all active:scale-95"
                    >
                        <span className="material-symbols-rounded text-base">tune</span>
                        Customise Product
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
