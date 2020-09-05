const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "12345",
    mongoUri: process.env.MONGODB_URI ||
        process.env.MONGO_HOST ||
        'mongodb+srv://azad:6251413@cluster0.9sdyj.mongodb.net/personalMongodb?retryWrites=true&w=majority'
}

export default config