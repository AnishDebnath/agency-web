import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendPrototypeEmail } from '../../utils/prototypeEmail';

const projectTypes = [
    { label: "Web Design", value: "web-design" },
    { label: "Web Development", value: "web-dev" },
    { label: "App Design", value: "app-design" },
    { label: "App Development", value: "app-dev" },
    { label: "Branding / Identity", value: "branding" },
    { label: "Other", value: "other" },
];

const PrototypeForm: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        website: '',
        description: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSelect = (value: string) => {
        setFormData(prev => ({ ...prev, projectType: value }));
        setIsDropdownOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.projectType) {
            alert("Please select a project type");
            return;
        }
        setStatus('sending');

        try {
            await sendPrototypeEmail(formData);
            setStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                projectType: '',
                website: '',
                description: ''
            });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Failed to send prototype request:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-slate-800/50"
        >
            {/* Decorative Ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-orange-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-10 rotate-45 translate-x-[25%] translate-y-[40%] shadow-lg z-10">
                Free
            </div>

            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative space-y-5 z-0" onClick={() => isDropdownOpen && setIsDropdownOpen(false)}>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name <span className="text-primary">*</span></label>
                    <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400"
                        placeholder="John Doe"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400"
                            placeholder="name@company.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Phone No <span className="text-primary">*</span></label>
                        <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                </div>

                <div className="space-y-2 relative">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Project Type <span className="text-primary">*</span></label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsDropdownOpen(!isDropdownOpen);
                            }}
                            className={`w-full text-left bg-slate-50/50 dark:bg-slate-800/50 border rounded-2xl px-5 py-4 flex items-center justify-between outline-none transition-all ${isDropdownOpen ? 'border-primary ring-2 ring-primary/20' : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'}`}
                        >
                            <span className={formData.projectType ? "text-slate-900 dark:text-white" : "text-slate-400"}>
                                {formData.projectType ? projectTypes.find(t => t.value === formData.projectType)?.label : "Select a project type"}
                            </span>
                            <span className={`material-symbols-rounded text-slate-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden z-20"
                                >
                                    {projectTypes.map((type) => (
                                        <li
                                            key={type.value}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleSelect(type.value);
                                            }}
                                            className={`px-5 py-3 cursor-pointer transition-colors flex items-center justify-between ${formData.projectType === type.value
                                                ? 'bg-primary/5 text-primary font-medium'
                                                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                                                }`}
                                        >
                                            {type.label}
                                            {formData.projectType === type.value && (
                                                <span className="material-symbols-rounded text-primary text-sm">check</span>
                                            )}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Current Website <span className="text-slate-400 font-normal text-xs ml-1">(Optional)</span></label>
                    <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400"
                        placeholder="https://www.yourbrandsite.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Project Description <span className="text-primary">*</span></label>
                    <textarea
                        required
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
                        placeholder="Tell us about the problem you want to solve..."
                    />
                </div>

                <div className="space-y-4">
                    {status === 'success' && (
                        <p className="text-sm font-bold text-emerald-500 text-center flex items-center justify-center gap-1">
                            <span className="material-symbols-rounded text-lg">check_circle</span>
                            Prototype request sent successfully!
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="text-sm font-bold text-red-500 text-center flex items-center justify-center gap-1">
                            <span className="material-symbols-rounded text-lg">error</span>
                            Failed to send request. Please try again.
                        </p>
                    )}

                    <button
                        disabled={status === 'sending'}
                        className="w-full group relative overflow-hidden bg-[#111] dark:bg-white text-white dark:text-[#111] py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <span className="relative z-10">{status === 'sending' ? 'Sending...' : 'Claim Free Prototype'}</span>
                        <div className="w-8 h-8 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                            {status === 'sending' ? (
                                <div className="w-4 h-4 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <span className="material-symbols-rounded text-lg">rocket_launch</span>
                            )}
                        </div>
                    </button>
                </div>

                <p className="text-xs text-center text-slate-400 font-medium">
                    *No advance payment required. 100% Free.
                </p>
            </form>
        </motion.div>
    );
};

export default PrototypeForm;

