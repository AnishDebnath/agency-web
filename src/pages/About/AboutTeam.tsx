import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from './data';
import TeamMember from './TeamMember';

const AboutTeam: React.FC = () => {
    return (
        <div className="mb-24 lg:mb-32">
            <div className="text-center mb-12 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block mb-6 px-4 py-2 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                        <span className="material-symbols-rounded text-sm">groups</span> Our Team
                    </span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-6"
                >
                    Meet the <span className="text-primary">creative</span> minds.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
                >
                    The talented individuals behind every frame, cut, and creative decision.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
                {teamMembers.map((member, i) => (
                    <TeamMember key={i} member={member} delay={i * 0.1} />
                ))}
            </div>
        </div>
    );
};

export default AboutTeam;
