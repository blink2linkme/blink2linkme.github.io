'use client'
import { useEffect, useState, useCallback, useRef } from "react";
import { Post, getPosts } from "@/app/_lib/StaticContentService";  // Assuming getPosts is your function to fetch posts.
import Loading from "../loading"; // Assuming you have a Loading component
import Link from "next/link";

const Blog = () => {
    const [articles, setArticles] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [hasMoreArticles, setHasMoreArticles] = useState<boolean>(true);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    const loadMoreArticles = useCallback(async () => {
        if (loading || !hasMoreArticles) return; // Prevent multiple loads while already loading or no more articles.

        setLoading(true); // Start loading

        try {
            const postResult = await getPosts({ page, limit: 10 });
            if (postResult?.posts && postResult.posts.length > 0) {
                // Append new articles to the state
                setArticles((prevArticles) => [...prevArticles, ...postResult.posts]);
                setPage((prevPage) => prevPage + 1); // Increment page
            } else {
                // If no posts, stop further loading
                setHasMoreArticles(false);
            }
        } catch (error) {
            console.error("Error loading posts:", error);
        } finally {
            setLoading(false); // Set loading to false after the request is done
        }
    }, [loading, hasMoreArticles, page]);

    // Set up IntersectionObserver to load more articles when the user reaches the bottom
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading && hasMoreArticles) {
                    loadMoreArticles();
                }
            },
            { threshold: 1.0 } // Trigger when 100% of the target is visible
        );

        const currentRef = loadMoreRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [loadMoreArticles, loading, hasMoreArticles]);

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-8 bg-gray-100 dark:bg-gray-900 min-h-screen px-4 py-8">
            {/* Left part: Articles List */}
            <div className="lg:w-3/4 space-y-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                        Blog
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
                        Welcome to the blog! Explore latest articles below.
                    </p>
                </header>

                {/* Articles List */}
                <section>
                    {loading && <Loading />}

                    {!loading && articles.length === 0 && (
                        <p className="text-center text-lg text-gray-600 dark:text-gray-300">
                            No articles found.
                        </p>
                    )}

                    {!loading && articles.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8">
                            {articles.map((article, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-all"
                                >   
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        {article.date}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400 mb-4">
                                        {article.description}
                                    </p>
                                    <Link
                                        href={`/blog/post${article.fileName}`}
                                        className="text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-600 transition-colors">
                                        Read more 🡢
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Load more trigger */}
                    {hasMoreArticles && !loading && (
                        <div ref={loadMoreRef} className="text-center py-6">
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Loading more articles...
                            </p>
                        </div>
                    )}

                    {/* End of List */}
                    {!hasMoreArticles && (
                        <div className="text-center py-6">
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                No more articles to load.
                            </p>
                        </div>
                    )}
                </section>
            </div>

            {/* Right part: Creative Sidebar */}
            <div className="lg:w-1/4 space-y-8 mt-8 lg:mt-0 fixed top-60 right-0">
                {/* Quote of the Day */}
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-xl rounded-lg p-8 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-semibold mb-6">Quote of the Day</h3>
                    <p className="italic text-lg text-center mb-6">
                    &ldquo;The best way to predict the future is to create it.&rdquo;
                    </p>
                    <p className="text-sm text-gray-300">- Peter Drucker</p>
                </div>

                {/* Sticky Content Below Quote 
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        Popular Tags
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        <span className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:bg-blue-400">
                            JavaScript
                        </span>
                        <span className="bg-green-500 text-white py-2 px-4 rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:bg-green-400">
                            React
                        </span>
                        <span className="bg-yellow-500 text-white py-2 px-4 rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:bg-yellow-400">
                            Web Development
                        </span>
                        <span className="bg-pink-500 text-white py-2 px-4 rounded-lg cursor-pointer transition-all transform hover:scale-105 hover:bg-pink-400">
                            UX/UI
                        </span>
                    </div>
                </div>*/}

                {/* Newsletter Subscription 
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mt-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        Subscribe to our Newsletter
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Get the latest articles and updates straight to your inbox.
                    </p>
                    <form>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white mb-4"
                        />
                        <button
                            type="submit"
                            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-400"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>*/}
            </div>
        </div>
    );
};

export default Blog;
