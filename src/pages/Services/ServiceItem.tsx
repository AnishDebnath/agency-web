import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceItemProps {
    service: {
        title: string;
        description: string;
        image: string;
        tags: string[];
    };
    index: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="py-16 md:py-25 border-t border-slate-200 dark:border-slate-800"
        >
            <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Visual Section (Image) */}
                <div className="w-full lg:w-1/2">
                    <div className="relative group perspective-1000">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-[#0F0F0F] border border-slate-200 dark:border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <div className="aspect-[4/3] w-full overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-95 group-hover:opacity-100 dark:opacity-80 dark:group-hover:opacity-100"
                                />
                            </div>
                            {/* Inner Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="w-12 h-[2px] bg-primary" />
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">0{index + 1}</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
                        {service.title}
                    </h3>

                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium max-w-xl">
                        {service.description}
                    </p>

                    {/* Features/Tags Grid */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {service.tags.map((tag, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 rounded-full px-4 py-2 border border-slate-200 dark:border-white/5 group hover:border-primary/30 transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                    {tag}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                        <Link
                            to="/free-prototype"
                            className="bg-[#111] dark:bg-white text-white dark:text-[#111] px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 group/btn"
                        >
                            Free Prototype
                            <span className="material-symbols-rounded text-base group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>

                        <Link
                            to="/work"
                            className="group flex items-center gap-2 px-5 py-3 rounded-full font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            View Work
                            <span className="w-6 h-6 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-rounded text-xs">arrow_outward</span>
                            </span>
                        </Link>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ServiceItem;
