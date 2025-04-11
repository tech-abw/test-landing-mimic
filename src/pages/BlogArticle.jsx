import React from "react";
import { Link } from "react-router-dom";

const BlogArticle = () => {
    const relatedArticles = [
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
    ];

    return (
        <div className="w-full bg-gray flex justify-center py-2 lg:py-6">
            <div className="lg:w-[95%] w-full mx-4 lg:mx-0 bg-white rounded-2xl py-12 shadow-lg px-8">
                <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-4 text-left w-full pb-1 border-b border-black/30">
                    Lorem Ipsum is simply dummy text of the printing
                </h1>

                <img
                    src="/images/blog-detail.png"
                    alt="Article Image"
                    className="w-full h-45 my-8 lg:h-1/3 md:h-80 "
                    style={{ borderRadius: "20px" }}
                />

                <div className="prose max-w-none mb-8">
                    <p className="lg:text-xl md:text-lg text-base leading-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, nisl vel ultricies lacinia, nisl nisl
                        aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed
                        euismod, nisl vel ultricies lacinia, nisl nisl aliquam
                        nisl, eget aliquam nisl nisl sit amet nisl. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, nisl vel ultricies lacinia, nisl nisl aliquam
                        nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod,
                        nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget
                        aliquam nisl nisl sit amet nisl. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Sed euismod, nisl vel
                        ultricies lacinia, nisl nisl aliquam nisl, eget aliquam
                        nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies
                        lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl
                        sit amet nisl. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed euismod, nisl vel ultricies
                        lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl
                        sit amet nisl. Sed euismod, nisl vel ultricies lacinia,
                        nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet
                        nisl. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
                        aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed
                        euismod, nisl vel ultricies lacinia, nisl nisl aliquam
                        nisl, eget aliquam nisl nisl sit amet nisl. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Sed
                        euismod, nisl vel ultricies lacinia, nisl nisl aliquam
                        nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod,
                        nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget
                        aliquam nisl nisl sit amet nisl. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Sed euismod, nisl vel
                        ultricies lacinia, nisl nisl aliquam nisl, eget aliquam
                        nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies
                        lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl
                        sit amet nisl.
                    </p>
                </div>

                <div className="mb-4 mt-10">
                    <p className="text-gray-500 text-sm lg:text-xl">Date</p>
                    <p className="text-gray-500 mt-8 lg:text-xl text-sm">
                        Categories:
                    </p>
                </div>

                <div className="flex flex-col space-x-4 mb-16 mt-8">
                    <p className="text-gray-600 mr-4 lg:text-xl text-sm">
                        Share:
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <img
                            src="/images/footer-wha.svg"
                            alt="WhatsApp"
                            className="lg:h-7 lg:w-7 h-5 w-5 cursor-pointer"
                        />
                        <img
                            src="/images/footer-insta.svg"
                            alt="Instagram"
                            className="lg:h-7 lg:w-7 h-5 w-5 cursor-pointer"
                        />
                        <img
                            src="/images/footer-linke.svg"
                            alt="LinkedIn"
                            className="lg:h-7 lg:w-7 h-5 w-5 cursor-pointer"
                        />
                    </div>
                </div>

                <h2 className="text-2xl font-semibold lg:mb-12 mb-6 text-left w-full pb-1 border-b border-black/30">
                    Related Articles
                </h2>

                <div className="grid grid-cols-3 gap-4">
                    {relatedArticles.map((article, index) => (
                        <Link
                            to={`/blog/${article.id}`}
                            key={index}
                            className="block"
                        >
                            <div className="space-y-4 flex flex-col items-center justify-center">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="lg:w-70 lg:h-70 w-25 h-25 rounded-lg"
                                />
                                <p className="text-gray-500 text-sm lg:text-base">
                                    {article.date}
                                </p>
                                <h4 className="lg:text-xl text-sm font-medium">
                                    {article.title}
                                </h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogArticle;
