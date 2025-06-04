'use server';
import path from 'path';
import fs from 'fs';
import readline from 'readline';
export type Post =
    { title: string, date: string, tags: Array<string>, description: string, previewText: string, fileName: string };
export type PostResult = {
    count: number,
    posts: Post[]
}
const getFiles = async (dir: string): Promise<string[]> => {
    try {
        let files: string[] = [];

        const fileLists = fs.readdirSync(dir);

        for (const file of fileLists) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat && stat.isDirectory())
                files = files.concat(await getFiles(filePath));
            else
                files.push(filePath);
        };

        return files;
    } catch (error) {
        console.error("Error reading directory: getFiles ", error);
        throw error;
    }
}

export const getPosts = async (pagination: { page: number, limit: number }) => {
    const postsPath = path.join(process.cwd(), 'public', 'posts');
    const { page = 1, limit = 10 } = pagination;

    // Pagination
    const currentPage = page;
    const pageLimit = limit;

    const startIndex = (currentPage - 1) * pageLimit;
    try {
        const allPostsFiles = await getFiles(postsPath);

        const paginatedFiles = allPostsFiles.slice(startIndex, startIndex + pageLimit);

        const postsMeta = await Promise.all(paginatedFiles.map(async (filePath) =>
            await readFileChunks(filePath)
        ));
        const filteredPostMeta = postsMeta.filter(f => f !== null) as Post[];
        const postResult: PostResult = {
            count: filteredPostMeta.length,
            posts: filteredPostMeta
        }
        return postResult;
    } catch (error) {
        console.error("Error reading posts: getPosts ", error);
        throw error;
    }
}



export const getPostContent = async (filePath: string): Promise<Post | null> => {
    const fullFilePath = path.join(process.cwd(), "public", "posts", filePath);

    const fileReadStream = fs.createReadStream(fullFilePath, { encoding: 'utf-8' });

    const rl = readline.createInterface({
        input: fileReadStream,
        crlfDelay: Infinity
    })

    return new Promise((resolve, reject) => {
        let fileLines: Array<string> = [];

        rl.on('line', (line) => {
            fileLines.push(line);
        })

        rl.on('close', () => {
            if (fileLines.length > 0) {
                const post: Post = contentToPost(fileLines, fullFilePath, true);
                resolve(post); // Resolve with the post object
            } else resolve(null);
        })

        rl.on('error', (err) => {
            console.error("Error reading file: getPostContent: ", err);
            reject(err);
        })
    });
}

export const getPostFile = async (filePath: string): Promise<string> => {
    const fullFilePath = path.join(process.cwd(), "public", "posts", filePath);
    return fs.readFileSync(fullFilePath, { encoding: 'utf-8' });
}

const readFileChunks = async (filePath: string) => {
    const fileStream = fs.createReadStream(filePath, { encoding: 'utf-8' });

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let lineCount: number = 0;
    let fileLines: Array<string> = [];

    return new Promise((resolve, reject) => {
        rl.on('line', (line) => {
            lineCount++;
            fileLines.push(line);
            if (lineCount === 5) {
                rl.close(); // Close the stream after 5 lines
            }
        });

        rl.on('close', () => {
            if (fileLines.length >= 5) {
                const post = contentToPost(fileLines, filePath, false);
                resolve(post); // Resolve with the post object
            } else {
                resolve(null); // Return null if there are fewer than 5 lines
            }
        });

        rl.on('error', (err) => {
            console.log("Error reading file: readFileChunks: ", err);
            reject(err); // Reject if there's an error
        });
    });
}

const contentToPost = (fileLines: Array<string>, filePath: string, isFullContent: boolean = false): Post => {
    try {
        const metaData = fileLines[1]?.split('|');
        const postPath = path.join("public", "posts");
        const relativeFileName = path.relative(path.join(process.cwd(), postPath), filePath);
        const post: Post = {
            title: fileLines[0]?.slice(1)?.trim(),
            date: metaData ? metaData[0]?.slice(7, 17) : '',
            tags: metaData ? metaData.slice(1).map(meta => meta.trim().replace('</small>', '')) : [],
            description: fileLines[3]?.slice(2)?.trim(),
            previewText: isFullContent
                ? fileLines.slice(5).join('\n')
                : (fileLines[5]?.substring(0, 100) || ''),
            fileName: relativeFileName
        };
        return post;
    } catch (error) {
        console.error("Error parsing post content:", error);
        throw error;
    }
}