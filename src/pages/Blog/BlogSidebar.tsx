import React from 'react';
import { motion } from 'framer-motion';

const BlogSidebar: React.FC = () => {
    return (
        <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 space-y-10"
        >
            <div className="bg-[#111] dark:bg-white text-white dark:text-[#111] p-8 rounded-[2rem] relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/10 dark:bg-black/5 rounded-xl flex items-center justify-center mb-6">
                        <span className="material-symbols-rounded text-2xl text-white dark:text-black">mail</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-3">Join the Inner Circle</h3>
                    <p className="text-slate-400 dark:text-slate-600 text-sm mb-8 leading-relaxed font-medium">
                        Weekly growth tactics, video trends, and editing secrets delivered to your inbox.
                    </p>
                    <form className="space-y-3">
                        <input
                            className="w-full bg-white/10 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-xl py-3.5 px-5 text-white dark:text-black placeholder:text-slate-500 focus:ring-2 focus:ring-primary focus:border-transparent focus:outline-none transition-all text-sm font-medium"
                            placeholder="Your best email"
                            type="email"
                        />
                        <button className="w-full bg-primary hover:bg-[#FF5C00] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-[1.02]">
                            Subscribe Now
                        </button>
                    </form>

                    <p className="mt-4 text-center text-xs text-slate-500 font-medium">
                        No spam. Unsubscribe anytime.
                    </p>
                </div>

                {/* Background Effects */}
                <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-56 h-56 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            </div>
        </motion.aside>
    );
};

export default BlogSidebar;
