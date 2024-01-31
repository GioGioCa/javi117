// const withPWA = require("next-pwa");

// module.exports = withPWA({
// pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: false,
// },
// });


const nextConfig = { //funciona
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
    },
};

const withPWA = require("next-pwa")({
    dest: "public",
    disable: false,
    register: true,
});

module.exports = withPWA(nextConfig);


// const withPWA = require('next-pwa')({
//     dest:"public",
//     register:true,
//     skipWaiting:true,
//     disable:process.env.NODE_ENV === 'development'
//     })

//     /** @type {import('next').NextConfig} */
//     const nextConfig = {
//     reactStrictMode: true,
//     }

// module.exports = withPWA(nextConfig);




//module.exports = () => [plugin1, plugin2withConfig(plugin2Config), pluginN].reduce((config, plugin) => plugin(config), nextConfig);

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//     ...
// };

// module.exports = () => {
// const plugins = [plugin1, plugin2withConfig(plugin2Config), pluginN];

//     return plugins.reduce((config, plugin) => plugin(config), nextConfig);
// };
















//import withPWA from "next-pwa";

// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });

// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     compiler: {
//     removeConsole: process.env.NODE_ENV !== "development",
//     },
// };

// const configWithPwa = withPWA({
//     dest: "public",
//     disable: process.env.NODE_ENV === "development",
//     register: true,
// });

// export default configWithPwa(nextConfig);
//module.exports = withPWA(nextConfig);

// import withPWA from "next-pwa";

// const configWithPwa = withPWA({
//     dest: "public" ,
//     disable: process.env.NODE_ENV === "development",
//     register: true,
//     });

// export default configWithPwa(config);



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//     compiler: {
//     removeConsole: process.env.NODE_ENV !== "development",
//     },
// };

// const withPWA = import("next-pwa")({
//     dest: "public",
//     disable: process.env.NODE_ENV === "development",
//     register: true,
// });

// module.exports = withPWA(nextConfig);