import React from 'react';
import { categories } from './data';

interface WorkFilterProps {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
}

const WorkFilter: React.FC<WorkFilterProps> = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat, i) => (
                <button
                    key={i}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                            ? 'bg-[#111] text-white dark:bg-white dark:text-black scale-105'
                            : 'bg-white dark:bg-slate-900 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default WorkFilter;
