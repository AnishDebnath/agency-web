import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageBackgroundProps {
    pathname: string;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ pathname }) => {
    // Define background variants based on route
    const getVariant = () => {
        if (pathname === '/') return 'home';
        if (pathname.startsWith('/about')) return 'about';
        if (pathname.startsWith('/services')) return 'services';
        if (pathname.startsWith('/work')) return 'work';
        if (pathname.startsWith('/blog')) return 'blog';
        if (pathname.startsWith('/contact')) return 'contact';
        return 'default';
    };

    const variant = getVariant();

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <AnimatePresence mode="wait">
                <motion.div
                    key={variant}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {variant === 'home' && (
                        <>
                            <div className="absolute top-[-2%] left-[-10%] w-[70%] h-[1000px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]"></div>
                            <div className="absolute top-[5%] right-[-10%] w-[60%] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px]"></div>
                            <div className="absolute top-[25%] left-[-5%] w-[50%] h-[900px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[120px]"></div>
                            <div className="absolute top-[45%] right-[-5%] w-[55%] h-[1000px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[130px]"></div>
                            <div className="absolute top-[65%] left-[10%] w-[60%] h-[900px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px]"></div>
                        </>
                    )}

                    {variant === 'about' && (
                        <>
                            <div className="absolute top-[5%] left-[-20%] w-[80%] h-[1200px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[140px]"></div>
                            <div className="absolute top-[20%] right-[-15%] w-[70%] h-[900px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]"></div>
                            <div className="absolute top-[45%] left-[-10%] w-[60%] h-[1000px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[130px]"></div>
                            <div className="absolute top-[65%] right-[-5%] w-[55%] h-[1100px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[140px]"></div>
                            <div className="absolute bottom-[10%] left-[-10%] w-[60%] h-[1000px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[130px]"></div>
                        </>
                    )}

                    {variant === 'services' && (
                        <>
                            <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[1000px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[130px]"></div>
                            <div className="absolute top-[20%] left-[-15%] w-[70%] h-[1100px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[140px]"></div>
                            <div className="absolute top-[60%] right-[10%] w-[60%] h-[900px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[120px]"></div>
                        </>
                    )}

                    {variant === 'work' && (
                        <>
                            <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[90%] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[150px]"></div>
                            <div className="absolute top-[40%] left-[-10%] w-[60%] h-[1000px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px]"></div>
                            <div className="absolute top-[70%] right-[-10%] w-[60%] h-[1000px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px]"></div>
                        </>
                    )}

                    {variant === 'blog' && (
                        <>
                            <div className="absolute top-[15%] right-[-5%] w-[50%] h-[900px] bg-slate-500/5 dark:bg-slate-500/10 rounded-full blur-[120px]"></div>
                            <div className="absolute top-[45%] left-[-5%] w-[50%] h-[900px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]"></div>
                            <div className="absolute bottom-0 left-[20%] w-[70%] h-[800px] bg-blue-400/5 dark:bg-blue-400/10 rounded-full blur-[130px]"></div>
                        </>
                    )}

                    {variant === 'contact' && (
                        <>
                            <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px]"></div>
                            <div className="absolute top-[15%] right-[-5%] w-[60%] h-[800px] bg-orange-400/5 dark:bg-orange-400/10 rounded-full blur-[120px]"></div>
                            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[140px]"></div>
                        </>
                    )}

                    {(variant === 'default') && (
                        <>
                            <div className="absolute top-0 left-0 w-full h-full bg-primary/[0.02] dark:bg-primary/[0.05] blur-[150px]"></div>
                        </>
                    )}

                    {/* Central Ambient Glow (Shared but can be modified) */}
                    <div className="absolute top-[10%] left-[50%] translate-x-[-50%] w-[80%] h-[1500px] bg-slate-500/[0.02] dark:bg-slate-500/[0.05] rounded-full blur-[150px]"></div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default PageBackground;
