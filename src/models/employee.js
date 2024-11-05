export class Employee {
  constructor(name) {
    this.name = name;
  }

  salary_during_year = []

  get totalSalary() {
    return this.salary_during_year.reduce((sum, current) => sum + current.amount, 0).toFixed(2);
  }

  get vacationPayments() {
    let workingMonthPerYear = this.salary_during_year.length
    const AVERAGE_NUMBER_OF_DAYS_IN_MONTH = 29.3
    const VACATION_DAYS = 28
    let averageDailyEarnings  = this.totalSalary / (workingMonthPerYear * AVERAGE_NUMBER_OF_DAYS_IN_MONTH)

    return  (averageDailyEarnings * VACATION_DAYS).toFixed(2)
  }
}