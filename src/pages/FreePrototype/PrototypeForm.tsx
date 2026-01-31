import React from 'react';
import { motion } from 'framer-motion';

const PrototypeForm: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden"
        >
            {/* Decorative Ribbon */}
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1 px-8 rotate-45 translate-x-[30%] translate-y-[50%] shadow-lg">
                Free
            </div>

            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Your Name" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Work Email</label>
                    <input type="email" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="name@company.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Current Website (Optional)</label>
                    <input type="url" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="https://www.yourbrandsite.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">What specific problem do you want to solve?</label>
                    <textarea rows={3} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="E.g., Low conversion rate, outdated design..."></textarea>
                </div>

                <button className="w-full bg-gradient-to-r from-primary to-[#FF8C00] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-rounded">rocket_launch</span>
                    Claim Free Prototype
                </button>

                <p className="text-xs text-center text-slate-400 mt-4">
                    *No credit card required. No commitment. 100% Free.
                </p>
            </form>
        </motion.div>
    );
};

export default PrototypeForm;
