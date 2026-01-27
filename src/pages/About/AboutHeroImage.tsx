import React from 'react';
import { motion } from 'framer-motion';

const AboutHeroImage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] overflow-hidden aspect-[21/9] mb-24 shadow-2xl"
        >
            <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                alt="Team working"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
                <p className="font-bold text-2xl font-display">London HQ</p>
                <p className="text-white/80">Where the magic happens</p>
            </div>
        </motion.div>
    );
};

export default AboutHeroImage;
