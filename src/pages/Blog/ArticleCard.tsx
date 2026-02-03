import React from 'react';
import { motion } from 'framer-motion';

interface ArticleCardProps {
    article: {
        category: string;
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
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            className="group h-full"
        >
            <div className="bg-white dark:bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] border border-slate-200/60 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 p-2.5 h-full flex flex-col">
                {/* Image Container - Compacted */}
                <div className="aspect-[16/10] relative overflow-hidden bg-slate-50 dark:bg-slate-800/50 rounded-[1.8rem] mb-3 border border-slate-100 dark:border-white/5">
                    <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Floating Category Badge - More subtle */}
                    <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest bg-white/95 dark:bg-slate-900/90 backdrop-blur-md text-primary rounded-full shadow-lg border border-white/20 dark:border-white/5">
                            {article.category}
                        </span>
                    </div>
                </div>

                {/* Content Area - Compacted Spacing */}
                <div className="px-3 pb-3 flex flex-col flex-1">
                    <h2 className="text-lg md:text-xl font-display font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {article.title}
                    </h2>

                    <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2">
                        {article.desc}
                    </p>

                    <div className="mt-auto pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between group/link">
                        <span className="text-xs font-bold text-slate-900 dark:text-white group-hover/link:text-primary transition-colors">
                            Read More
                        </span>
                        <motion.div
                            whileHover={{ x: 3 }}
                            className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:text-white transition-all duration-300 shadow-sm"
                        >
                            <span className="material-symbols-rounded text-base">arrow_forward</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default ArticleCard;
