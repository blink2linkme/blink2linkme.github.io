import { Post } from "@/app/_lib/StaticContentService";
import Link from "next/link";
export const ArticleHeadLine = ({ post }: { post: Post }) => {
  return (
    <div className="hover-scale bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
      <Link href={`/blog/post/${post.fileName}`}>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
      </Link>
    </div>
  );
};
