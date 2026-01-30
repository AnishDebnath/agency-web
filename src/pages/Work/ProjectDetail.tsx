import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from './data';
import ProjectCard from './ProjectCard';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id);
    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] dark:bg-background-dark text-slate-900 dark:text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
                    <Link to="/work" className="text-primary hover:underline">Back to Work</Link>
                </div>
            </div>
        );
    }

    const moreWork = projects.filter(p => p.id !== project.id).slice(0, 2);

    return (
        <div className="pt-32 pb-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-20 md:mb-28 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-8 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Case Study</span>
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                                {project.title.split(":")[0]}
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                                {project.subtitle}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex-shrink-0"
                        >
                            <a
                                href={project.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#111] dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl group"
                            >
                                Visit Live Site
                                <div className="w-8 h-8 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                    <span className="material-symbols-rounded text-lg">north_east</span>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* Metadata Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/50"
                    >
                        <div>
                            <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Client</span>
                            <span className="text-lg font-display font-bold text-slate-900 dark:text-white">{project.client}</span>
                        </div>
                        <div className="col-span-2 md:col-span-2">
                            <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Services</span>
                            <div className="flex flex-wrap gap-2">
                                {project.services.map((s, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Date</span>
                            <span className="text-lg font-display font-bold text-slate-900 dark:text-white">{project.date}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Main Hero Image with Parallax */}
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-32 group relative ring-1 ring-slate-900/5 dark:ring-white/10"
                >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover will-change-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>

                {/* Content Sections */}
                <div className="max-w-5xl mx-auto mb-40 space-y-32">
                    {project.content.map((block, index) => {
                        if (block.type === 'text') {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="grid md:grid-cols-12 gap-10 items-start"
                                >
                                    <div className="md:col-span-4 sticky top-32">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-10 h-[1px] bg-primary"></span>
                                            <h3 className="text-primary text-sm font-bold uppercase tracking-widest">{block.title}</h3>
                                        </div>
                                    </div>
                                    <div className="md:col-span-8">
                                        <p className="text-xl md:text-3xl leading-relaxed font-display font-medium text-slate-800 dark:text-slate-200">
                                            {block.body}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        } else if (block.type === 'image') {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`w-full rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10 ${block.className}`}
                                >
                                    <img src={block.src} alt={block.alt} className="w-full h-auto" />
                                </motion.div>
                            );
                        } else if (block.type === 'grid') {
                            return (
                                <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-12">
                                    {block.images.map((img, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ delay: i * 0.2 }}
                                            className="rounded-[2.5rem] overflow-hidden shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10 aspect-[4/5]"
                                        >
                                            <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                        </motion.div>
                                    ))}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>

                {/* More Work */}
                <div className="border-t border-slate-200 dark:border-slate-800 pt-32 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
                    >
                        <h2 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                            More <span className="text-slate-400">Work</span>
                        </h2>
                        <Link to="/work" className="text-lg font-bold border-b border-slate-300 dark:border-slate-700 pb-1 hover:text-primary hover:border-primary transition-colors">
                            View All Projects
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                        {moreWork.map(p => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetail;
