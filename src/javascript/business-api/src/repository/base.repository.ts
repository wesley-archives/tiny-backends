import { Collection, ObjectId } from "mongodb";
import { BaseMapper } from "@/mapper/base.mapper";

export class BaseRepository<T> {
  constructor(
    protected readonly collection: Collection,
    protected readonly mapper: BaseMapper<T, any, any>
  ) {}

  async findAll(): Promise<T[]> {
    const results = await this.collection.find().toArray();
    return results.map(this.mapper.toEntity);
  }

  async findById(id: string): Promise<T | null> {
    const result = await this.collection.findOne({
      _id: new ObjectId(id),
    } as any);
    return result ? this.mapper.toEntity(result) : null;
  }

  async countById(id: string): Promise<number> {
    return this.collection.countDocuments({ _id: new ObjectId(id) } as any);
  }

  async create(data: Partial<T>): Promise<T> {
    const result = await this.collection.insertOne({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    return this.mapper.toEntity({
      _id: result.insertedId,
      ...data,
    });
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    const result = await this.collection.findOneAndUpdate(
      { _id: new ObjectId(id) as any },
      { $set: { ...data, updatedAt: new Date() } as any },
      { returnDocument: "after" }
    );

    return result ? this.mapper.toEntity(result) : null;
  }

  async delete(id: string): Promise<void> {
    await this.collection.deleteOne({ _id: new ObjectId(id) } as any);
  }
}
