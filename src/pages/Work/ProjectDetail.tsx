import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from './data';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
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
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Case Study</span>
                    </motion.div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                                {project.title.split(":")[0]}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
                                {project.subtitle}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-10"
                        >
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#111] dark:bg-white text-white dark:text-[#111] pl-6 pr-2 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/5 group"
                            >
                                Visit Live Site
                                <div className="w-8 h-8 bg-white dark:bg-[#111] rounded-full flex items-center justify-center text-[#111] dark:text-white group-hover:rotate-45 transition-transform duration-300">
                                    <span className="material-symbols-rounded text-xl">arrow_outward</span>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* Metadata Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/50"
                    >
                        <div>
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Client</span>
                            <span className="text-base font-display font-bold text-slate-900 dark:text-white">{project.client}</span>
                        </div>
                        <div className="col-span-2 md:col-span-2">
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Services</span>
                            <div className="flex flex-wrap justify-center gap-2">
                                {project.services.map((s, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Date</span>
                            <span className="text-base font-display font-bold text-slate-900 dark:text-white">{project.date}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Main Hero Image with Parallax */}
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-24 ring-1 ring-slate-900/5 dark:ring-white/10"
                >
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover will-change-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>

                {/* Content Sections */}
                <div className="mx-auto mb-32 space-y-24">
                    {project.content.map((block, index) => {
                        if (block.type === 'text') {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="flex flex-col gap-6"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="w-6 h-[1px] bg-primary"></span>
                                        <h3 className="text-primary text-[10px] font-bold uppercase tracking-widest">{block.title}</h3>
                                    </div>
                                    <p className="text-lg md:text-xl leading-relaxed text-slate-800 dark:text-slate-200">
                                        {block.body}
                                    </p>
                                </motion.div>
                            );
                        } else if (block.type === 'image') {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`w-full rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10 ${block.className}`}
                                >
                                    <img src={block.src} alt={block.alt} className="w-full h-auto" />
                                </motion.div>
                            );
                        } else if (block.type === 'grid') {
                            return (
                                <div key={index} className="grid md:grid-cols-2 gap-6 md:gap-8">
                                    {block.images.map((img, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ delay: i * 0.2 }}
                                            className="rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10 aspect-square"
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

                <div className="border-t border-slate-200 dark:border-slate-800 my-16 w-full" />

                {/* More Work */}
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                            More <span className="text-primary">Work</span>
                        </h2>
                        <Link to="/work" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                            View All Projects
                            <span className="material-symbols-rounded text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {moreWork.map((p, idx) => (
                            <motion.div
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover="hover"
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-3 pb-6 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500"
                            >
                                <div
                                    onClick={() => navigate(`/work/${p.id}`)}
                                    className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-black mb-6 border border-slate-100 dark:border-slate-800 cursor-pointer"
                                >
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-4 right-4 px-4 py-1.5 bg-black/80 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full z-10 border border-white/10">
                                        {p.category}
                                    </div>
                                </div>

                                <div className="px-4 flex justify-between items-end">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1 font-display leading-tight">{p.title.split(':')[0]}</h3>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{p.client}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        <span className="material-symbols-rounded text-slate-400 group-hover:text-white transition-colors text-base">north_east</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetail;
