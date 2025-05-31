import { Base } from "@/model/base.model";

export class User extends Base {
  name: string;
  email: string;
  password: string;

  constructor(data: Partial<User>) {
    super(data);
    this.name = data.name || "";
    this.email = data.email || "";
    this.password = data.password || "";
  }
}
