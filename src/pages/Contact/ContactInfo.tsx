import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from './data';

const ContactInfo: React.FC = () => {
    return (
        <div>
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
            >
                Contact Us
            </motion.span>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-8"
            >
                Let's start a <br /> conversation.
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed"
            >
                Ready to take your content to the next level? Fill out the form or send us an email, and we'll get back to you within 24 hours.
            </motion.p>

            <div className="space-y-8">
                {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${info.color === 'blue'
                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                            }`}>
                            <span className="material-symbols-rounded">{info.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{info.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400">{info.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactInfo;
