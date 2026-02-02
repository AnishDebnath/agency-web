import React from 'react';
import { motion } from 'framer-motion';

interface ArticleCardProps {
    article: {
        category: string;
        readTime: string;
        title: string;
        desc: string;
        img: string;
    };
    delay: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, delay }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="group flex flex-col h-full bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-slate-200/60 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500"
        >
            <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={article.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/90 dark:bg-black/80 backdrop-blur-md text-primary rounded-full shadow-sm">
                        {article.category}
                    </span>
                </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                        <span className="material-symbols-rounded text-sm">schedule</span>
                        {article.readTime}
                    </span>
                </div>

                <h2 className="text-2xl font-display font-bold mb-3 leading-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                    {article.title}
                </h2>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {article.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between group/link">
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover/link:text-primary transition-colors">
                        Read Article
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all duration-300">
                        <span className="material-symbols-rounded text-sm">arrow_forward</span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default ArticleCard;
