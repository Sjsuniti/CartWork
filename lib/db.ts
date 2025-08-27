import { MongoClient } from 'mongodb';

if (!process.env.DATABASE_URL) {
  throw new Error('Please set DATABASE_URL in your .env.local file');
}

const client = new MongoClient(process.env.DATABASE_URL);

// Connect to MongoDB
client.connect().catch(console.error);

export const db = client.db('ecommdash');