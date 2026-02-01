import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
    member: {
        name: string;
        role: string;
        image: string;
    };
    delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="group"
        >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 relative shadow-lg bg-slate-100 dark:bg-slate-800">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 px-4 text-center">
                    <div className="flex gap-3">
                        {['X', 'IN'].map((social) => (
                            <button key={social} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all font-bold text-[10px]">
                                {social}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="px-2 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight group-hover:text-primary transition-colors">
                    {member.name}
                </h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest leading-none mb-1">{member.role}</p>
                <div className="h-0.5 w-8 bg-primary/20 group-hover:w-full transition-all duration-500"></div>
            </div>
        </motion.div>
    );
};

export default TeamMember;
