import React from 'react';
import { motion } from 'framer-motion';

interface ServiceItemProps {
    service: {
        title: string;
        description: string;
        image: string;
        tags: string[];
        price: string;
        timeline: string;
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
            className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 last:border-b-0"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start group">

                {/* 1. Title Section (Left) */}
                <div className="lg:col-span-3">
                    <div className="sticky top-32">
                        <h3 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">
                            {service.title}
                        </h3>
                        <div className="w-12 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block hidden" />
                    </div>
                </div>

                {/* 2. Visual Section (Center) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="relative overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-[#0F0F0F] border border-slate-100 dark:border-white/5 shadow-2xl">
                        {/* Image Hover Scale */}
                        <div className="aspect-[4/3] w-full overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </div>

                {/* 3. Details Section (Right) */}
                <div className="lg:col-span-4 flex flex-col h-full lg:pl-4">
                    <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                        {service.description}
                    </p>

                    {/* Tags - Matching ProjectCard Features style */}
                    <div className="flex flex-wrap gap-2 mb-10">
                        {service.tags.map((tag, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 rounded-full px-3 py-1.5 border border-slate-200 dark:border-white/5">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-[10px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                    {tag}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto border-t border-slate-200 dark:border-white/10 pt-8">
                        <div className="flex items-end justify-between">
                            <div>
                                <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Starts at</span>
                                <span className="text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">{service.price}</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Timeline</span>
                                <span className="text-2xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">{service.timeline}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ServiceItem;
