/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/ching_portfolio',
    output: 'export',
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'chingching11.github.io',
              port: '',
              pathname: '/ching_portfolio',
            },
        ],
    }
    
};

export default nextConfig;
