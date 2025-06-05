'use server';

export type Post = {
    title: string,
    date: string,
    tags: Array<string>,
    description: string,
    previewText: string,
    fileName: string
};
export type PostResult = {
    count: number,
    posts: Post[]
};

// Helper to get the site URL (for SSR/production)
const getSiteUrl = () => {
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }
    return process.env.NEXT_PUBLIC_SITE_URL || '';
};

// Fetch the index of post filenames (must be generated at build time)
const fetchPostIndex = async (): Promise<string[]> => {
    const url = `${getSiteUrl()}/posts/data.json`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Could not fetch posts index');
    const postsIndex = await res.json();
    return postsIndex;
};

// Fetch a post file as text
export const getPostFile = async (fileName: string): Promise<string> => {
    const url = `${getSiteUrl()}/posts/${fileName}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Could not fetch post: ${fileName}`);
    return await res.text();
};

// Parse post content into Post object
const contentToPost = (fileLines: Array<string>, fileName: string, isFullContent: boolean = false): Post => {
    try {
        const metaData = fileLines[1]?.split('|');
        const post: Post = {
            title: fileLines[0]?.slice(1)?.trim(),
            date: metaData ? metaData[0]?.slice(7, 17) : '',
            tags: metaData ? metaData.slice(1).map(meta => meta.trim().replace('</small>', '')) : [],
            description: fileLines[3]?.slice(2)?.trim(),
            previewText: isFullContent
                ? fileLines.slice(5).join('\n')
                : (fileLines[5]?.substring(0, 100) || ''),
            fileName
        };
        return post;
    } catch (error) {
        console.error("Error parsing post content:", error);
        throw error;
    }
};

// Get paginated posts
export const getPosts = async (pagination: { page: number, limit: number }): Promise<PostResult> => {
    const { page = 1, limit = 10 } = pagination;
    try {
        const allPostsFiles = await fetchPostIndex();
        const startIndex = (page - 1) * limit;
        const paginatedFiles = allPostsFiles.slice(startIndex, startIndex + limit);

        const postsMeta = await Promise.all(
            paginatedFiles.map(async (fileName) => {
                const content = await getPostFile(fileName);
                const fileLines = content.split('\n');
                // Only read first 6 lines for preview
                return contentToPost(fileLines.slice(0, 6), fileName, false);
            })
        );
        const filteredPostMeta = postsMeta.filter(f => f !== null) as Post[];
        return {
            count: filteredPostMeta.length,
            posts: filteredPostMeta
        };
    } catch (error) {
        console.error("Error reading posts: getPosts ", error);
        throw error;
    }
};

// Get full post content
export const getPostContent = async (fileName: string): Promise<Post | null> => {
    try {
        const content = await getPostFile(fileName);
        const fileLines = content.split('\n');
        return contentToPost(fileLines, fileName, true);
    } catch (error) {
        console.error("Error reading file: getPostContent: ", error);
        return null;
    }
};