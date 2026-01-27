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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="group"
        >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-4 relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
            <p className="text-primary text-sm font-medium">{member.role}</p>
        </motion.div>
    );
};

export default TeamMember;
