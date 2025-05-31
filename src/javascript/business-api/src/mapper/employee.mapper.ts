import { EmployeeDetailsDto, EmployeeSummaryDto } from "@/dto/employee.dto";
import { BaseMapper } from "@/mapper/base.mapper";
import { Employee } from "@/model/employee.model";

export class EmployeeMapper extends BaseMapper<
  Employee,
  EmployeeDetailsDto,
  EmployeeSummaryDto
> {
  toEntity(document: any): Employee {
    return new Employee(document);
  }

  toDetailsDTO(employee: Employee): EmployeeDetailsDto | undefined {
    if (employee == null) return;

    return {
      id: employee._id,
      name: employee.name,
      company: employee.company,
      department: employee.department,
      job: employee.job,
      salary: employee.salary,
    };
  }

  toSummaryDTO(employee: Employee): EmployeeSummaryDto | undefined {
    if (employee == null) return;

    return {
      id: employee._id,
      name: employee.name,
      company: employee.company,
    };
  }
}
