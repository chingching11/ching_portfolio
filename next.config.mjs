/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/ching_portfolio',
    output: 'export',
    reactStrictMode: true,
    images: {
        domains: ['https://chingching11.github.io/ching_portfolio/'],
        path: '/ching_portfolio/_next/image',
    }
    
};

export default nextConfig;
