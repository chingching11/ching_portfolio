/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/chingching11.github.io/ching_portfolio': '',
    output: 'export',
    reactStrictMode: true,
    assetPrefix: '/ching_portfolio',
    images: { unoptimized: true }
    
};

export default nextConfig;
