import Link from "next/link";

const RecentWritings = () =>
    <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-8 text-center">Writings📝</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="hover-scale bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Article 1</h3>
                <p className="text-gray-600 dark:text-gray-300">A shot description about the article to showcase what the article will say and this should not be long </p>
            </div>
            <div className="hover-scale bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Article 2</h3>
                <p className="text-gray-600 dark:text-gray-300">A shot description about the article to showcase what the article will say and this should not be long</p>
            </div>
            <div className="hover-scale bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Article 3</h3>
                <p className="text-gray-600 dark:text-gray-300">A shot description about the article to showcase what the article will say</p>
            </div>
            <div className="hover-scale bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Article 4</h3>
                <p className="text-gray-600 dark:text-gray-300">A shot description about the article to</p>
            </div>
        </div>
        <div className="mt-4 text-sm font-medium text-right">
        <Link href={'/blog'} className="text-blue-600 hover:text-purple-400 text-underline">Read more -></Link>
        </div>
    </div>;

export default RecentWritings;