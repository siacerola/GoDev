const mongoose = require('mongoose')

const connectDB = async(
    mongoUri,
    dbName
) => {
    try {
        const conn = await mongoose.connect(`${mongoUri}/${dbName}`)
        console.log(`mongoDB connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
    
}

module.exports = {
    connectDB:connectDB
}