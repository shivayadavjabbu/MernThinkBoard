import mongoose  from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://skyshivayadav007_db_user:XFbuUvX4vE2bEvnZ@cluster0.kgvvdq7.mongodb.net/?appName=Cluster0");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }   
};

export default connectDB;