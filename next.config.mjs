/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable source map if needed
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    transpilePackages: [  "@ant-design", "antd", "rc-util", "rc-pagination", "rc-picker" ],
};

export default nextConfig;
