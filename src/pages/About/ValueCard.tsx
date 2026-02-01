import React from 'react';
import { motion } from 'framer-motion';

interface ValueCardProps {
    value: {
        title: string;
        icon: string;
        desc: string;
    };
    delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ value, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-xl shadow-black/5 group transition-all"
        >
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <span className="material-symbols-rounded text-3xl">{value.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-primary transition-colors">
                {value.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed font-medium">
                {value.desc}
            </p>
        </motion.div>
    );
};

export default ValueCard;
