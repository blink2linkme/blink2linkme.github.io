/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                //pathname:'/images/**'
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com'
            }
        ],
        deviceSizes:[320, 420, 768, 1024, 1200],
        imageSizes: [16, 32, 48, 64, 96],
        formats:['image/avif','image/webp'],
        minimumCacheTTL: 60, // Cache duration in seconds
    }
};

export default nextConfig;
