import React from 'react';
import { motion } from 'framer-motion';
const homeArticles = [
    {
        title: 'How YouTube Creators Can Build a Viral Personal Brand',
        desc: "You're more than just a youtube channel — you're a media powerhouse.",
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVrletRrurbgSnM9552NzibzGParEUS8xagLMIiJmyWLa7tz_PR-6sMCCWRhLdKJn22GhVTHNCqOR4HAk6vxtRmVkPNXVWPVqmVYVoeBG-6dlHJtMfFPVeEoP0viX6sTOjj-EGwzhWaeEE7fBPs0f-vAQcA1QGahkWYQkgLYC8_EjzEeXaO_i_39HJXo7TpvbxcjWR3QPfbZyrRZK669jaNowAQs5lxrqv0VvTwMzN-iGWD3iP45Re4gQj9iMVc6E7kFfvrcSpvZI'
    },
    {
        title: '7 Editing Tricks to Double Your View Duration',
        desc: "Retention is everything. Learn how the pros keep viewers hooked till the end.",
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRVEXtMFCbJ8-foCTHZeWbUJYNDDQ-46JNbsVTzzUSwSlxzQzjQiLevhMoKId2S26XKKWNsJKk27koJSFeMUW8KtYrWk08JYiWACT2ECCwz-S0X0d_Knxh-5ioe75hQv00p5Rlia8dbBK6lbaWEEMI3Y8sbBRAnotuwEiwbW9vbjhTmWRzhM8BFzxQn5gzQhiKzhndMStULde_Q4TlA7nJn9KX-QHdKBQTRE8Ngjv2V0kSSi6qh536O5qS_rvZULn77HDJ6-rQ9_o'
    },
    {
        title: '5 Thumbnail Must-Haves for High CTR in 2024',
        desc: 'Stop the scroll and get the click with these proven layout strategies.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8CNcZtDDLXwtE6gBFjBHRNrWC6Iv_2wa1RQ4qAz4tbwF6XYg8yHtPdpVaCPYjGqTblQcTcHe2QP3LgIvggrY4kWd0rs3vPve6_r9bJ3tZWArUzkDT8-8qaBOgRDC1sULLM-DtvVpcWaAlRc4YcffOnEOQ32bR9rUdbvjC44DBLB7S7aOpIydqIju5CD0BuBLPhKNcPaI97_u2QhHunhXRILc8UUA9QTCAGRd2eLBYRCA3GnW0AOM5mp7H-9x0f3o1RiQc1N_1q4g'
    },
    {
        title: 'Why Every Creator Needs a Short-Form Strategy',
        desc: "Shorts, Reels, and TikToks are the fastest way to grow your audience today.",
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZw7AF0mE-HUYgZ-KKBK4l40fyLw550NYR1EXonP5NPPnVwAmwv22k9kgjmI3oOB0ajwME70Pm4m39POCRNwVDn9UNqw_jj-E0wdv7s-EFdDuNFx8861_YZG3aMK7F31ORMbMsrW0VnmYp54GUWs3ssmMRqcUxBd9bUmC924dhU2C1mEqhPNSD5wEJoeD6UwacGA5BqmCYRS66l8lvBJ243wlCJXcoHKJfh7_DOXlkRbQ-GaK87W_o3U0FgM59UdpM6DhxP52KJfY'
    }
];

const Blog: React.FC = () => {
    return (
        <section className="py-24 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">✦ Blog</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-display font-extrabold mb-4 text-slate-900 dark:text-white"
                    >
                        Creator Insights & Tips
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
                    >
                        Stay ahead of the game with fresh insights on editing trends, YouTube growth strategies.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto">
                    {homeArticles.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
                        >
                            <div className="mb-6 overflow-hidden rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-800">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-[#FF5C00] transition-colors leading-tight">
                                {post.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                                {post.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
