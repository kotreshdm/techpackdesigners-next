import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB;

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    return client.db(dbName);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

export default connectDB;
