import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { articles } from './index';
import ArticleCard from './ArticleCard';
import { CTA } from '../../components';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const article = articles.find(a => a.id === id);
    const { scrollYProgress } = useScroll();
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] dark:bg-black text-slate-900 dark:text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-display font-bold mb-4">Article Not Found</h1>
                    <Link to="/blog" className="text-primary hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    const moreArticles = articles.filter(a => a.id !== article.id).slice(0, 2);

    return (
        <div className="pt-25 pb-0 relative min-h-screen">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex justify-center flex-wrap gap-3 mb-6"
                    >
                        {article?.tags?.map((tag, i) => (
                            <span key={i} className="px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-widest text-primary bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
                    >
                        {article.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium"
                    >
                        {article.desc}
                    </motion.p>
                </div>

                {/* Hero Image */}
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 ring-1 ring-slate-900/5 dark:ring-white/10"
                >
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Content */}
                <article className="prose prose-lg dark:prose-invert prose-slate mx-auto mb-20">
                    {article.content && article.content.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-normal mb-8"
                        >
                            {paragraph}
                        </motion.p>
                    ))}
                </article>

                <div className="border-t border-slate-200 dark:border-slate-800 my-16 w-full" />

                {/* More Articles */}
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                            Read <span className="text-primary">Next</span>
                        </h2>
                        <Link to="/blog" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                            View All Blogs
                            <span className="material-symbols-rounded text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {moreArticles.map((a, i) => (
                            <ArticleCard key={i} article={a as any} delay={i * 0.1} />
                        ))}
                    </div>
                </div>

            </div>
            <CTA />
        </div>
    );
};

export default BlogPost;
