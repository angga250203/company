/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"plus.unsplash.com",
                protocol:"https"
            },
            {
                hostname:"images.unsplash.com",
                protocol:"https"
            },
            {
                hostname:"framerusercontent.com",
                protocol:"https"
            },
            {
                hostname:"unsplash.com",
                protocol:"https"
            },
            {
                hostname:"elcomercio.pe",
                protocol:"https"
            },
            {
                hostname:"i1.prth.gr",
                protocol:"https"
            },
            {
                hostname:"insider-gaming.com",
                protocol:"https"
            },
            {
                hostname:"static.ffx.io",
                protocol:"https"
            },
            
        ]
    }
};

export default nextConfig;
