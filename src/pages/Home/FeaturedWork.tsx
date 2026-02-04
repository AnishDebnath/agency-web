import React from 'react';
import { motion } from 'framer-motion';
const featuredWork = [
    {
        title: "Naka",
        category: "Framer Development",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        title: "Signal Spark",
        category: "Branding Design",
        img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
        featured: true
    },
    {
        title: "Lumenhaus",
        category: "Web Development",
        img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        featured: false
    },
    {
        title: "Drift Bloom",
        category: "Branding Design",
        img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
        featured: false
    }
];

const FeaturedWork: React.FC = () => {
    return (
        <section className="py-24 bg-transparent" id="featured-work">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Featured Work</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-7xl font-display font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Work that speaks for itself
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Here’s a glimpse of what CreatorFlow-powered creators have brought to life.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
                    {featuredWork.map((work, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover="hover"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white dark:bg-slate-900/50 rounded-[3rem] p-4 pb-8 border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Frame */}
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-black mb-8 border border-slate-100 dark:border-slate-800">
                                <img
                                    src={work.img}
                                    alt={work.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                />

                                {work.featured && (
                                    <div className="absolute top-6 right-6 px-5 py-2 bg-gradient-to-r from-[#FF4D4D] to-[#FF0000] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg z-10 border border-white/20">
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Info Area */}
                            <div className="px-6 flex justify-between items-end">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 font-display">{work.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">{work.category}</p>
                                </div>
                                <motion.div
                                    className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 overflow-hidden"
                                >
                                    <motion.span
                                        variants={{
                                            initial: { x: 0, y: 0 },
                                            hover: { x: 5, y: -5 }
                                        }}
                                        initial="initial"
                                        className="material-symbols-rounded text-slate-400 group-hover:text-white transition-colors"
                                    >
                                        north_east
                                    </motion.span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
