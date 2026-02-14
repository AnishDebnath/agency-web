import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface Stat {
    count: string;
    label: string;
    icon: string;
}

const stats: Stat[] = [
    { count: '1,200', label: 'Videos Delivered', icon: 'edit_square' },
    { count: '300', label: 'Creators Served', icon: 'groups' },
    { count: '450', label: 'Total Views', icon: 'visibility' },
    { count: '98', label: 'Retention Rate', icon: 'analytics' },
];

const StatItem: React.FC<{ stat: Stat; idx: number; isLast: boolean }> = ({ stat, idx, isLast }) => {
    const [displayCount, setDisplayCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const numericValue = parseFloat(stat.count.replace(/,/g, ''));
            const controls = animate(0, numericValue, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (value) => setDisplayCount(Math.floor(value)),
            });
            return () => controls.stop();
        }
    }, [isInView, stat.count]);

    // Handle suffixes/prefixes for labels
    const getFormattedCount = () => {
        const formatted = displayCount.toLocaleString();
        if (stat.label === 'Total Views') return `${formatted}M+`;
        if (stat.label === 'Retention Rate') return `${formatted}%`;
        return `${formatted}+`;
    };

    return (
        <motion.div
            ref={ref}
            whileHover="hover"
            className={`flex flex-col items-center justify-center py-8 md:py-10 px-4 ${!isLast ? 'md:border-r border-slate-200/50 dark:border-white/5' : ''
                } group relative overflow-hidden transition-all duration-500`}
        >
            {/* Glossy Hover Highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <motion.div
                variants={{
                    hover: { y: -8, scale: 1.05 }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex flex-col items-center"
            >
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary mb-4 shadow-sm border border-slate-100 dark:border-white/5 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                    <motion.span
                        variants={{
                            hover: { rotate: 12, scale: 1.1 }
                        }}
                        className="material-symbols-rounded text-2xl"
                    >
                        {stat.icon}
                    </motion.span>
                </div>

                <div className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white mb-1.5 tracking-tighter group-hover:text-primary transition-colors duration-300">
                    {getFormattedCount()}
                </div>

                <div className="text-slate-500 dark:text-slate-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-center opacity-80 group-hover:opacity-100 transition-opacity">
                    {stat.label}
                </div>
            </motion.div>

            {/* Interactive Bottom Accent */}
            <motion.div
                variants={{
                    hover: { width: '40%', opacity: 1 }
                }}
                initial={{ width: '0%', opacity: 0 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-primary rounded-full blur-[1px]"
            />
        </motion.div>
    );
};

const AboutStats: React.FC = () => {
    return (
        <div className="relative">
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-3xl -z-10 rounded-[3rem] opacity-30" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative overflow-hidden bg-white/70 dark:bg-slate-900/40 backdrop-blur-2xl rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-black/5 border border-slate-200/60 dark:border-white/10 max-w-4xl mx-auto"
            >
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, idx) => (
                        <StatItem
                            key={idx}
                            stat={stat}
                            idx={idx}
                            isLast={idx === stats.length - 1}
                        />
                    ))}
                </div>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </motion.div>
        </div>
    );
};

export default AboutStats;
