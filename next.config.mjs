/** @type {import('next').NextConfig} */

//const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    basePath: "/la_marque_du_battant_frontend",
    assetPrefix: "/la_marque_du_battant_frontend",
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true
    }
};

export default nextConfig;
