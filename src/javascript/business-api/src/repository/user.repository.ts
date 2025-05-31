import { BaseRepository } from "@/repository/base.repository";
import { User } from "@/model/user.model";
import { UserMapper } from "@/mapper/user.mapper";
import { Database } from "@/infra/database.infra";

export class UserRepository extends BaseRepository<User> {
  constructor() {
    const collection = Database.getInstance().getCollection<User>(
      "users"
    ) as any;
    super(collection, new UserMapper());
  }

  async findByEmail(email: string): Promise<User | null> {
    const result = await this.collection.findOne({ email });
    return result ? this.mapper.toEntity(result) : null;
  }

  async countByEmail(email: string): Promise<number> {
    return this.collection.countDocuments({ email });
  }
}
