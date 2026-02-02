import React from 'react';
import { articles } from './data';
import ArticleCard from './ArticleCard';
import BlogHeader from './BlogHeader';
import BlogSidebar from './BlogSidebar';

const BlogPage: React.FC = () => {
    return (
        <div className="pt-32 pb-24 relative min-h-screen">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <BlogHeader />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {articles.map((article, index) => (
                                <ArticleCard key={index} article={article} delay={index * 0.1} />
                            ))}
                        </div>
                    </div>
                    <BlogSidebar />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
