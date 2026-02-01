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
            className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-6 rounded-[1.5rem] border border-slate-200 dark:border-white/10 shadow-lg shadow-black/5 group transition-all"
        >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <span className="material-symbols-rounded text-2xl">{value.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                {value.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                {value.desc}
            </p>
        </motion.div>
    );
};

export default ValueCard;
