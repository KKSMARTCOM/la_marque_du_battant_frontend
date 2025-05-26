/** @type {import('next').NextConfig} */

//const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    output: 'standalone',
    distDir: 'dist',
    basePath: "/la_marque_du_battant_frontend",
    assetPrefix: "/la_marque_du_battant_frontend",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
