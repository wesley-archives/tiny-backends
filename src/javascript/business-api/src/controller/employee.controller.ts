import { BaseController } from "@/controller/base.controller";
import { Employee } from "@/model/employee.model";
import { EmployeeService } from "@/service/employee.service";
import {
  EmployeeCreateDto,
  EmployeeDetailsDto,
  EmployeeSummaryDto,
  EmployeeUpdateDto,
} from "@/dto/employee.dto";

export class EmployeeController extends BaseController<
  Employee,
  EmployeeDetailsDto,
  EmployeeSummaryDto,
  EmployeeCreateDto,
  EmployeeUpdateDto
> {
  constructor() {
    super(new EmployeeService());
  }
}
