import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendContactEmail } from '../../utils/contactEmail';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        purpose: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await sendContactEmail(formData);
            setStatus('success');
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                purpose: '',
                message: ''
            });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Failed to send email:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-slate-800/50"
        >
            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400"
                            placeholder="john@example.com"
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

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Contact Purpose <span className="text-primary">*</span></label>
                    <input
                        required
                        type="text"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all placeholder:text-slate-400"
                        placeholder="e.g. Video Editing, Consultation, etc."
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message / Details <span className="text-primary">*</span></label>
                    <textarea
                        required
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
                        placeholder="Tell us about your inquiry..."
                    />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 px-8">
                        {status === 'success' ? (
                            <p className="text-sm font-bold text-emerald-500 flex items-center gap-1">
                                <span className="material-symbols-rounded text-lg">check_circle</span>
                                Message sent successfully!
                            </p>
                        ) : status === 'error' ? (
                            <p className="text-sm font-bold text-red-500 flex items-center gap-1">
                                <span className="material-symbols-rounded text-lg">error</span>
                                Failed to send message.
                            </p>
                        ) : (
                            <>
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <p className="text-xs font-medium italic">We respond within 24 hours</p>
                            </>
                        )}
                    </div>
                    <button
                        disabled={status === 'sending'}
                        className="w-full sm:w-auto sm:min-w-[200px] group flex items-center justify-center gap-3 bg-[#111] dark:bg-white text-white dark:text-[#111] py-3 px-8 rounded-full font-bold text-base hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                        <div className="w-8 h-8 bg-white dark:bg-[#111] rounded-full flex items-center justify-center text-[#111] dark:text-white group-hover:rotate-45 transition-transform duration-300">
                            {status === 'sending' ? (
                                <div className="w-4 h-4 border-2 border-[#111] dark:border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <span className="material-symbols-rounded text-[18px]">arrow_forward</span>
                            )}
                        </div>
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default ContactForm;

