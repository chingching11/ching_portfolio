/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/ching_portfolio': '',
    output: 'export',
    reactStrictMode: true,
    images: { unoptimized: true }
    
};

export default nextConfig;
