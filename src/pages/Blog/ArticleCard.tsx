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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
        >
            <div className="aspect-video overflow-hidden">
                <img alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={article.img} />
            </div>
            <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs font-medium text-slate-500">
                    <span className="text-primary uppercase">{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors cursor-pointer">{article.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{article.desc}</p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-primary hover:underline">
                    Read Article <span className="material-icons-outlined text-sm ml-1">chevron_right</span>
                </a>
            </div>
        </motion.article>
    );
};

export default ArticleCard;
