const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {});
module.exports = {
    reactStrictMode: false,
    env: {
        mongodburl: 'mongodb+srv://ondersahin:Onder358.@ecommerce.j0k0n.mongodb.net/?retryWrites=true&w=majority',
        API_KEY: "AIzaSyDqEnDksF4hggh9hQUCy2yTP48wTNoJORo",
        AUTH_DOMAIN: "ecommerce-cd333.firebaseapp.com",
        PROJECT_ID: "ecommerce-cd333",
        STORAGE_BUCKET: "ecommerce-cd333.appspot.com",
        MESSAGING_SENDER_ID: "996801233067",
        APP_ID: "1:996801233067:web:9c2df44afb42a0ead437ee",
        MEASUREMENT_ID: "G-XDQTX3VVGM",
    },
    images: {
        domains: ['cdn.dsmcdn.com', 'picsum.photos', "firebasestorage.googleapis.com", "productimages.hepsiburada.net", "images.hepsiburada.net"],
    },
}