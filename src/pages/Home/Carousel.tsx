import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { carouselItemsData as carouselItems } from './data';

interface CarouselProps {
    windowWidth: number;
}

const Carousel: React.FC<CarouselProps> = ({ windowWidth }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => setActiveIndex((prev) => prev + 1);
    const handlePrev = () => setActiveIndex((prev) => prev - 1);

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const getCardSpacing = () => {
        if (windowWidth < 768) return windowWidth * 0.85;
        if (windowWidth < 1024) return 600;
        return 820;
    };

    // Auto-play carousel
    useEffect(() => {
        const timer = setInterval(handleNext, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full relative z-20 pb-20 group/carousel perspective-[2000px] mt-12 overflow-hidden">
            <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
                {/* Carousel Track */}
                <motion.div
                    className="absolute w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            handleNext();
                        } else if (swipe > swipeConfidenceThreshold) {
                            handlePrev();
                        } else if (offset.x < -100) {
                            handleNext();
                        } else if (offset.x > 100) {
                            handlePrev();
                        }
                    }}
                >
                    {[-2, -1, 0, 1, 2].map((offset) => {
                        const index = activeIndex + offset;
                        const modIndex = ((index % carouselItems.length) + carouselItems.length) % carouselItems.length;
                        const item = carouselItems[modIndex];
                        const isCenter = offset === 0;
                        const spacing = getCardSpacing();

                        return (
                            <motion.div
                                key={index}
                                className={`absolute top-1/2 left-1/2 w-[340px] md:w-[900px] h-[500px] md:h-[600px] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col origin-center border-[6px] border-white dark:border-slate-800 bg-white dark:bg-slate-900`}
                                initial={false}
                                animate={{
                                    x: `calc(-50% + ${offset * spacing}px)`,
                                    scale: isCenter ? 1 : 0.8,
                                    opacity: isCenter ? 1 : 0.4,
                                    zIndex: isCenter ? 50 : 10 - Math.abs(offset),
                                    rotateY: isCenter ? 0 : (offset * (windowWidth < 768 ? 0 : (offset > 0 ? -15 : 15))), // Rotate inwards
                                    y: "-50%",
                                    filter: isCenter ? 'blur(0px)' : 'blur(4px) grayscale(50%)',
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                    mass: 1
                                }}
                                style={{
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt="Slide"
                                    className="w-full h-full object-cover pointer-events-none"
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Carousel;
