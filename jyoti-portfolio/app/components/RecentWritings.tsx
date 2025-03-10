'use client';
import Link from "next/link";
import { getPosts, Post, PostResult } from "../_lib/StaticContentService";
import { useEffect, useState } from "react";
import { ArticleHeadLine } from "./shared/ArticleHeadLine";



const RecentWritings = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res: PostResult = await getPosts({ page: 1, limit: 4 });
            if (res && res?.count) setPosts(res.posts as Post[]);
        };
        fetchPosts();
    }, []);

    return <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-8 text-center">Writings📝</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {posts?.map((post: Post, index: Number) => <ArticleHeadLine key={index.toString()} post={post} />)}
        </div>
        <div className="mt-4 text-sm font-medium text-right">
            <Link href={'/blog'} className="text-blue-600 hover:text-purple-400 text-underline">Read more -></Link>
        </div>
    </div>;
}

export default RecentWritings;