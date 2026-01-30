import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { footerLinks, footerSocials } from './data';

const Footer: React.FC = () => {
    return (
        <footer className="bg-transparent px-4 pb-6 pt-0 transition-colors duration-500 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-[1400px] mx-auto bg-[#000000] rounded-[3rem] px-8 py-16 md:p-20 relative overflow-hidden flex flex-col justify-between"
            >
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    {/* Branding */}
                    <div className="lg:col-span-5 flex flex-col items-start">
                        <Link to="/" className="flex items-center gap-3 mb-10 group">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                <span className="material-symbols-rounded text-white text-xl">movie_edit</span>
                            </div>
                            <span className="text-3xl font-display font-bold text-white tracking-tight">CreatorFlow</span>
                        </Link>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">Do you like what you see?</h3>
                        <p className="text-slate-400 text-lg max-w-sm mb-10 leading-relaxed">Let’s work together to turn your dream project into reality.</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors group text-lg">
                            Let's Talk with Us
                            <span className="material-symbols-rounded group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:pl-16 pt-4">
                        {footerLinks.map((col, idx) => (
                            <div key={idx}>
                                <h4 className="text-white font-bold mb-8 text-lg">{col.title}</h4>
                                <ul className="space-y-4 text-base text-slate-400 font-medium">
                                    {col.links.map((link, lIdx) => (
                                        <li key={lIdx}><Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Socials */}
                        <div>
                            <h4 className="text-white font-bold mb-8 text-lg">Get In Touch</h4>
                            <p className="text-slate-400 mb-6 text-base">Connect with us via our socials</p>
                            <div className="flex gap-4">
                                {footerSocials.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.link}
                                        className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                                        aria-label={social.name}
                                    >
                                        <img src={social.icon} alt={social.name} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="relative mt-auto pt-24 pb-8">
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end pointer-events-none select-none">
                        <h1 className="text-[20vw] font-black text-center text-white/[0.04] leading-[0.75] tracking-tighter whitespace-nowrap font-display translate-y-[15%]">Agency</h1>
                    </div>
                    <div className="relative z-10 text-center">
                        <p className="text-slate-500 text-sm font-medium">© All Right Reserved by CreatorFlow - 2025</p>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
