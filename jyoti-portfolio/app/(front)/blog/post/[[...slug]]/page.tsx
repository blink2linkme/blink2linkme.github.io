// pages/blog/[...params].tsx
'use client'
import Loading from "@/app/(front)/loading";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getPostContent, Post } from "@/app/_lib/StaticContentService";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";


const BlogPost = () => {
    const paths = usePathname();
    const filePath = paths?.split('/blog/post/')[1]; // The 'params' will be an array with [year, month, day, slug]
    const [postContent, setPostContent] = useState<Post | null>(null);

    useEffect(() => {
        if (filePath && filePath.length) {
            getPostContent(filePath).then((data) => {
                if (data)
                    data.previewText = data.previewText.replace(/\\n/gi, "\n").replace(/\n/gi, "<br/>");
                setPostContent(data)
            });
        }
    }, [filePath]);

    if (!postContent) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Title Section */}
            <h1 className="mb-6 text-4xl font-extrabold text-gray-900 leading-tight dark:text-white sm:text-5xl md:text-6xl text-center">
                {postContent.title}
            </h1>

            {/* Date and Tags Section */}
            <p className="text-base text-gray-500 dark:text-gray-400 text-center mb-6">
                <time title={postContent.date}>{postContent.date}</time>
                <span className="mx-2">|</span>
                <span className="text-gray-700 dark:text-gray-300">
                    {postContent.tags.map((tag, index) => (
                        <React.Fragment key={index}>
                            <small className="mr-2 text-sm text-blue-600 dark:text-blue-400">{tag}</small>
                            {index < postContent.tags.length - 1 && '| '}
                        </React.Fragment>
                    ))}
                </span>
            </p>

            {/* Description Section */}
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center sm:text-xl sm:leading-relaxed">
                {postContent.description}
            </p>

            {/* Content Section */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-justify text-lg space-y-4 leading-relaxed line-break">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}>{postContent.previewText}</ReactMarkdown>
            </div>

            {/* Separator */}
            <div className="my-12 border-t-2 border-gray-200 dark:border-gray-700"></div>

            {/* Call to Action or Other Sections */}
            <div className="text-center py-8">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    Enjoyed the post? Feel free to connect.
                </p>
            </div>
        </div>
    );
};

export default BlogPost;
