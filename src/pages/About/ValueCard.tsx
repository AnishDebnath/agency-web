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
            className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow"
        >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-rounded text-2xl">{value.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
        </motion.div>
    );
};

export default ValueCard;
