import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { count: '1,200+', label: 'Videos Delivered', icon: 'edit_square' },
    { count: '300+', label: 'Creators Served', icon: 'groups' },
    { count: '450M+', label: 'Total Views', icon: 'visibility' },
    { count: '98%', label: 'Retention Rate', icon: 'analytics' },
];

const AboutStats: React.FC = () => {
    return (
        <div className="mb-20 lg:mb-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-[2rem] p-4 shadow-xl shadow-black/5 border border-slate-200 dark:border-white/10 max-w-5xl mx-auto"
            >
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col items-center justify-center py-6 md:py-8 px-4 ${idx !== stats.length - 1 ? 'md:border-r border-slate-200 dark:border-white/5' : ''
                            } group transition-colors duration-500`}
                    >
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                            <span className="material-symbols-rounded text-xl">{stat.icon}</span>
                        </div>
                        <div className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-1 font-display tracking-tight group-hover:text-primary transition-colors">
                            {stat.count}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400 font-bold text-[8px] md:text-[9px] uppercase tracking-[0.1em] text-center">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default AboutStats;
