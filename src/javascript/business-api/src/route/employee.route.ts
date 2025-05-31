import { FastifyInstance } from "fastify";
import { EmployeeController } from "@/controller/employee.controller";
import { BaseRouter } from "@/route/base.route";
import { Employee } from "@/model/employee.model";
import {
  EmployeeCreateDto,
  EmployeeDetailsDto,
  EmployeeSummaryDto,
  EmployeeUpdateDto,
} from "@/dto/employee.dto";

export class EmployeeRouter extends BaseRouter<
  Employee,
  EmployeeDetailsDto,
  EmployeeSummaryDto,
  EmployeeCreateDto,
  EmployeeUpdateDto
> {
  constructor(server: FastifyInstance, baseUri: string) {
    const controller = new EmployeeController();
    super(server, controller, baseUri, "/employee");
  }
}
