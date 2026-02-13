import React from 'react';
import { motion } from 'framer-motion';

const AboutHeroImage: React.FC = () => {
    return (
        <div className="relative mb-12 md:mb-16">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-10 -z-10 rounded-[3rem]"></div>

            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-xl border border-white/10"
            >
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                    alt="Team working"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                {/* Optional: Add back a smaller cap badge if needed, but keeping it clean for now as user commented it out */}
            </motion.div>
        </div>
    );
};

export default AboutHeroImage;
