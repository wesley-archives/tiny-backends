import { BaseService } from "@/service/base.service";
import { Employee } from "@/model/employee.model";
import { EmployeeRepository } from "@/repository/employee.repository";
import { EmployeeMapper } from "@/mapper/employee.mapper";
import {
  EmployeeDetailsDto,
  EmployeeSummaryDto,
  EmployeeCreateDto,
  EmployeeUpdateDto,
} from "@/dto/employee.dto";

export class EmployeeService extends BaseService<
  Employee,
  EmployeeDetailsDto,
  EmployeeSummaryDto,
  EmployeeCreateDto,
  EmployeeUpdateDto
> {
  constructor() {
    super(new EmployeeRepository(), new EmployeeMapper());
  }
}
