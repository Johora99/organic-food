import { MongoClient, ServerApiVersion } from "mongodb";


const uri = process.env.MONGODB_URL

export default function dbConnect(collectionName) {
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
return client.db(process.env.DB_Collection).collection(collectionName)
}
