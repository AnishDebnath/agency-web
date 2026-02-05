import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    { id: 1, name: 'LOGO', icon: 'square' },
    { id: 2, name: 'Logoipsum', icon: 'bolt', slant: true },
    { id: 3, name: 'Logoipsum', icon: 'trip_origin' },
    { id: 4, name: 'CCCCC', icon: 'all_inclusive' },
    { id: 5, name: 'Logo', icon: 'bubble_chart' },
    { id: 6, name: 'Logoipsum', icon: 'grid_view' },
];

const BrandShowcase: React.FC = () => {
    return (
        <div className="py-6 overflow-hidden">
            <div className="relative flex items-center">
                <motion.div
                    animate={{
                        x: [0, -1500],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-16 lg:gap-20 xl:gap-28 items-center whitespace-nowrap px-12"
                >
                    {[...brands, ...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-3 transition-all duration-300 cursor-pointer ${brand.slant ? 'italic' : ''}`}
                        >
                            <span className="material-symbols-rounded text-3xl text-gray-800 dark:text-gray-200">{brand.icon}</span>
                            <span className="text-3xl font-display font-extrabold tracking-tighter text-gray-800 dark:text-gray-200">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default BrandShowcase;
