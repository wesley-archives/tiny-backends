import { BaseRepository } from "@/repository/base.repository";
import { Database } from "@/infra/database.infra";
import { Employee } from "@/model/employee.model";
import { EmployeeMapper } from "@/mapper/employee.mapper";

export class EmployeeRepository extends BaseRepository<Employee> {
  constructor() {
    const collection = Database.getInstance().getCollection<Employee>(
      "employees"
    ) as any;
    super(collection, new EmployeeMapper());
  }

  async countByCompany(company: string): Promise<number> {
    return this.collection.countDocuments({ company });
  }
}
