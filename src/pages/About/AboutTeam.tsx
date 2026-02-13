import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';

const teamMembers = [
    {
        name: "Alex Rivera",
        role: "Founder & Lead Editor",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        socials: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
            website: "https://creatorflow.com"
        }
    },
    {
        name: "Sarah Chen",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
        socials: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
            website: "https://creatorflow.com"
        }
    },
    {
        name: "Marcus Johnson",
        role: "Motion Designer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        socials: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
            website: "https://creatorflow.com"
        }
    },
    {
        name: "Emily Davis",
        role: "Account Manager",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        socials: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            instagram: "https://instagram.com",
            website: "https://creatorflow.com"
        }
    }
];

const AboutTeam: React.FC = () => {
    return (
        <div className="mb-16 lg:mb-20">
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
