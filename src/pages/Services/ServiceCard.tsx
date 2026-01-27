import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    service: {
        title: string;
        description: string;
        icon: string;
        features: string[];
    };
    delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>

            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-rounded text-3xl">{service.icon}</span>
            </div>

            <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-4">{service.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">{service.description}</p>

            <div className="flex flex-wrap gap-3">
                {service.features.map((feature, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        {feature}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default ServiceCard;
