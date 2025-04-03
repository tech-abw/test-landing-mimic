import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
    const blogSections = [
        {
            title: "Kind of article 01",
            articles: [
                {
                    id: 1,
                    title: "Title article",
                    image: "/images/blog.png",
                    date: "Date",
                },
                {
                    id: 2,
                    title: "Title article",
                    image: "/images/blog.png",
                    date: "Date",
                },
                {
                    id: 3,
                    title: "Title article",
                    image: "/images/blog.png",
                    date: "Date",
                },
            ],
        },
        {
            title: "Kind of article 02",
            articles: [
                {
                    id: 4,
                    title: "Title article",
                    image: "/images/blog.png",
                    date: "Date",
                },
                {
                    id: 5,
                    title: "Title article",
                    image: "/images/blog.png",
                    date: "Date",
                },
                {
                    id: 6,
                    title: "Title article",
                    image: "/images/blog.png",
                    date: "Date",
                },
            ],
        },
        {
            title: "Kind of article 03",
            articles: [
                {
                    id: 7,
                    title: "Title article",
                    image: "/images/blog.png",
                    date: "Date",
                },
                {
                    id: 8,
                    title: "Title article",
                    image: "/images/blog.png",
                    date: "Date",
                },
                {
                    id: 9,
                    title: "Title article",
                    image: "/images/blog.png",
                    date: "Date",
                },
            ],
        },
    ];

    return (
        <div className="w-full bg-gray flex justify-center py-24">
            <div className="md:w-11/12 w-full mx-4 md:mx-0 bg-white rounded-2xl shadow-lg px-8 py-12">
                <h2 className="md:text-8xl font-normal text-4xl w-3/4 mb-12 text-left border-black/30">
                    Discover articles about innovation and ultimate trends
                </h2>

                {/* Sidebar Index para móviles */}
                <div className="md:hidden space-y-4 mb-8">
                    {blogSections.map((section, index) => (
                        <div key={index}>
                            <h2 className="text-xl font-semibold text-left pb-1 border-b border-black/30">
                                {section.title}
                            </h2>
                        </div>
                    ))}
                </div>

                <div className="md:flex">
                    {/* Sidebar Index para desktop */}
                    <div className="w-1/4 md:ml-10 pr-8 hidden md:block">
                        <div className="space-y-4">
                            {blogSections.map((section, index) => (
                                <div key={index}>
                                    <h2 className="text-xl font-semibold text-left pb-1 border-b border-black/30">
                                        {section.title}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className="md:w-3/4 w-full space-y-6">
                        {blogSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-2xl font-semibold mb-6 text-left pb-1 border-b border-black/30">
                                    {section.title}
                                </h3>
                                {section.articles.map(
                                    (article, articleIndex) => (
                                        <Link 
                                            to={`/blog/${article.id}`} 
                                            key={articleIndex}
                                            className="block"
                                        >
                                            <div className="flex items-center mb-6 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                                                <img
                                                    src={article.image}
                                                    alt={article.title}
                                                    className="rounded-lg h-24 w-24 mr-6"
                                                />
                                                <div>
                                                    <p className="text-gray-500 mb-2">
                                                        {article.date}
                                                    </p>
                                                    <h4 className="text-lg font-medium">
                                                        {article.title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
