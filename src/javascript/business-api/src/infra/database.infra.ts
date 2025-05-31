import { EnvHelper } from "@/helper/env.helper";
import { MongoClient, Db, Collection, WithId } from "mongodb";

export class Database {
  private static instance: Database;
  private client: MongoClient;
  private db!: Db;

  private constructor() {
    this.client = new MongoClient(
      EnvHelper.get("DATABASE_URL") || "mongodb://localhost:27017"
    );
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  async connect(): Promise<void> {
    if (!this.db) {
      await this.client.connect();
      this.db = this.client.db(EnvHelper.get("DATABASE_NAME") || "db");
      console.log("MongoDB connected");
    }
  }

  getDatabase(): Db {
    if (!this.db) {
      throw new Error("Database not connected. Call `connect()` first.");
    }
    return this.db;
  }

  getCollection<T>(name: string): Collection<WithId<T>> {
    return this.getDatabase().collection<WithId<T>>(name);
  }

  async disconnect(): Promise<void> {
    await this.client.close();
    console.log("MongoDB disconnected");
  }
}
