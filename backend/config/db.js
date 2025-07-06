import mongoose from "mongoose"

const dbConnection = async () => {

    try {
        await mongoose.connect(`mongodb+srv://istanbulmarktt:${process.env.DB_PASSWORD}@cluster0.98i6x5s.mongodb.net/`)
        console.log("DB connection successfully!")
    }
    catch (error) {
        console.log("DB connection failed!", error)
    }

}

export default dbConnection