import {Employee} from "../models/employee.js";
import {Salary} from "../models/salary.js";

export function createEmployeesArray(array) {
  let employees = []
  let employee = new Employee()

  for (let i = 1; i < array.length; i++) {
    let currentRow = array[i]
    let month = currentRow[2]
    let salaryAmount = currentRow[3]

    const endOfPrevEmployee = () => currentRow[0]
    const startOfFile = () => i === 1
    const endOfFile = () => i === array.length - 1
    const resetEmployee = () => employee = new Employee()

    const addPrevEmployee = () => {
      employees.push(employee)
      resetEmployee()
    }

    if (!startOfFile() && endOfPrevEmployee()) {
      addPrevEmployee()
    }

    employee.name = currentRow[0] || employee.name
    employee.salary_during_year.push(new Salary(month, salaryAmount))


    if (endOfFile()) {
      addPrevEmployee()

      return employees
    }
  }

  return employees
}