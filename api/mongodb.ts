import { Db, MongoClient, ServerApiVersion } from "mongodb";

const password = process.env.MONGO_KEY;

const uri: string = `mongodb+srv://mpawlik45:${password}@cluster45.kgqy6py.mongodb.net/?retryWrites=true&w=majority&appName=Cluster45"`;

let db: Db | null = null;

export async function connectToDB(): Promise<void> {
  try {
    const client: MongoClient = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    db = client.db();
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

export function getDB(): Db {
  if (db) {
    return db;
  } else {
    throw new Error(
      "Failed to access the database. Make sure the connection is established correctly."
    );
  }
}
