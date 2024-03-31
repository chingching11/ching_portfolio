/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/ching_portfolio',
    output: 'export',
    reactStrictMode: true,
    images: {
        path: `${basePath}/_next/image`,
    }
    
};

export default nextConfig;
