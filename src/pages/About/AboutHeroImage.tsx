import React from 'react';
import { motion } from 'framer-motion';

const AboutHeroImage: React.FC = () => {
    return (
        <div className="relative mb-24 lg:mb-32">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 -z-10 rounded-[4rem]"></div>

            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl border border-white/10"
            >
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                    alt="Team working"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Glassmorphic Caption */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-[2rem] text-white"
                    >
                        <p className="font-bold text-2xl md:text-3xl font-display mb-1 flex items-center gap-2">
                            <span className="material-symbols-rounded text-primary">location_on</span> London HQ
                        </p>
                        <p className="text-white/70 font-medium">Where the creative magic happens</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutHeroImage;
