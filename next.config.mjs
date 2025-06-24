/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repo = 'la_marque_du_battant_frontend'; // nom du repo GitHub Pages

const nextConfig = {
    output: 'standalone',
    distDir: 'dist',
    images: {
        unoptimized: true
    },
    basePath: isProd ? `/${repo}` : '',
    assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;
