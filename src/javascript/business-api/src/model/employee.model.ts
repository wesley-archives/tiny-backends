import { Base } from "@/model/base.model";
import { ObjectId } from "mongodb";

export class Employee extends Base {
  userId?: ObjectId | string;
  name: string;
  company: string;
  department: string;
  job: string;
  salary: number;

  constructor(data: Partial<Employee>) {
    super(data);
    this.userId = data.userId || "";
    this.name = data.name || "";
    this.company = data.company || "";
    this.department = data.department || "";
    this.job = data.job || "";
    this.salary = data.salary || 0;
  }
}
