import React from 'react';
import { articles } from './data';
import ArticleCard from './ArticleCard';
import BlogHeader from './BlogHeader';
import BlogSidebar from './BlogSidebar';

const BlogPage: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <BlogHeader />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {articles.map((article, index) => (
                            <ArticleCard key={index} article={article} delay={index * 0.1} />
                        ))}
                    </div>
                </div>
                <BlogSidebar />
            </div>
        </div>
    );
};

export default BlogPage;
