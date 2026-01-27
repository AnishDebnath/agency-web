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
            <div className="bg-black dark:bg-slate-900 p-8 rounded-2xl text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Join the Inner Circle</h3>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">Weekly growth tactics, video trends, and editing secrets delivered to your inbox.</p>
                    <form className="space-y-3">
                        <input className="w-full bg-white/10 border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-slate-500 focus:ring-primary focus:border-primary focus:outline-none" placeholder="Your best email" type="email" />
                        <button className="w-full bg-primary hover:bg-orange-600 transition-colors text-white font-bold py-3 rounded-lg">Subscribe Now</button>
                    </form>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
        </motion.aside>
    );
};

export default BlogSidebar;
