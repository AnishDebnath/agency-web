import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from './data';

interface NavbarProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'} px-4`}>
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="w-full max-w-5xl bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 rounded-full shadow-xl shadow-black/5 dark:shadow-black/20 flex items-center justify-between p-2 pl-6 pr-2 transition-all duration-300"
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-transform">
                            <span className="material-symbols-rounded text-lg">movie_edit</span>
                        </div>
                        <span className="font-display font-bold text-lg tracking-tight text-slate-900 dark:text-white hidden sm:block">
                            CreatorFlow
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center bg-slate-100/80 dark:bg-white/5 rounded-full p-1 border border-slate-200 dark:border-white/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.path) ? 'text-primary dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-primary'}`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-md -z-10 border border-slate-200 dark:border-white/5"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-symbols-rounded block dark:hidden text-xl">dark_mode</span>
                            <span className="material-symbols-rounded hidden dark:block text-xl">light_mode</span>
                        </button>

                        <Link
                            to="/contact"
                            className="hidden sm:flex bg-[#111] dark:bg-white text-white dark:text-[#111] px-6 py-2.5 rounded-full font-bold text-sm items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-black/5"
                        >
                            Let's Talk
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                            <span className="material-symbols-rounded text-xl">{isOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ type: "spring", bounce: 0.3 }}
                            className="fixed top-24 left-4 right-4 z-50 bg-white dark:bg-[#111] rounded-[2rem] p-6 shadow-2xl border border-slate-100 dark:border-slate-800 md:hidden overflow-hidden"
                        >
                            <nav className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`flex items-center justify-between p-4 rounded-2xl transition-all ${isActive(link.path) ? 'bg-slate-50 dark:bg-slate-800 text-primary font-bold' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                                    >
                                        <span className="text-lg">{link.name}</span>
                                        {isActive(link.path) && <span className="material-symbols-rounded text-primary">arrow_back</span>}
                                    </Link>
                                ))}
                                <hr className="border-slate-100 dark:border-slate-800 my-2" />
                                <Link
                                    to="/contact"
                                    className="w-full bg-[#111] dark:bg-white text-white dark:text-[#111] p-4 rounded-2xl font-bold text-center text-lg flex items-center justify-center gap-2"
                                >
                                    Book a Call <span className="material-symbols-rounded">arrow_forward</span>
                                </Link>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
