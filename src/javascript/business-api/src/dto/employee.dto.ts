import { ObjectId } from "mongodb";

export interface EmployeeDetailsDto {
  id: string | ObjectId | undefined;
  name: string;
  company: string;
  department: string;
  job: string;
  salary: number;
}

export interface EmployeeSummaryDto {
  id: string | ObjectId | undefined;
  name: string;
  company: string;
}

export interface EmployeeCreateDto {
  userId: string | ObjectId | undefined;
  name: string;
  company: string;
  department: string;
  job: string;
  salary: number;
}

export interface EmployeeUpdateDto {
  name?: string;
  company?: string;
  department?: string;
  job?: string;
  salary?: number;
}
