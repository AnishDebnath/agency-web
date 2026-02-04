import React from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-slate-800/50"
        >
            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <form className="relative space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name <span className="text-primary">*</span></label>
                    <input required type="text" className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="John Doe" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                        <input type="email" className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone No <span className="text-primary">*</span></label>
                        <input required type="tel" className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="+1 (555) 000-0000" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Contact Purpose <span className="text-primary">*</span></label>
                    <input required type="text" className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400" placeholder="e.g. Video Editing, Consultation, etc." />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message / Details <span className="text-primary">*</span></label>
                    <textarea required rows={4} className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none placeholder:text-slate-400" placeholder="Tell us about your inquiry..."></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <p className="text-xs font-medium italic">We respond within 24 hours</p>
                    </div>
                    <button className="w-full sm:w-auto sm:min-w-[200px] group flex items-center justify-center gap-3 bg-[#111] dark:bg-white text-white dark:text-[#111] py-3 px-8 rounded-full font-bold text-base hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                        <span>Send Message</span>
                        <div className="w-8 h-8 bg-white dark:bg-[#111] rounded-full flex items-center justify-center text-[#111] dark:text-white group-hover:rotate-45 transition-transform duration-300">
                            <span className="material-symbols-rounded text-[18px]">arrow_forward</span>
                        </div>
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default ContactForm;
