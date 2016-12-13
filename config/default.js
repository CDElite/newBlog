module.exports = {
    port: 80,
    session: {
        secret: 'blogelite',
        key: 'blogelite',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/blogelite'
};