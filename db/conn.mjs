// db/conn.mjs

import { MongoClient } from 'mongodb';


const connectionString = process.env.ATLAS_URI || "mongodb+srv://jkirbyzabala:13@Car3fr33@mongopractice.evnby4o.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=MongoPractice";

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db("sample_mflix"); // Replace with your database name
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export { connectToMongoDB, db };
