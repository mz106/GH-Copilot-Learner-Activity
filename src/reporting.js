// reporting.js - messy starter
const { employees } = require("./employee");
const { requests } = require("./leaveRequest");

/**
 * Generates and prints a leave report for all employees.
 * The report includes each employee's name, role, remaining leave balance, and total approved leave taken.
 * Output is printed to the console.
 * @returns {void}
 */
function generateReport() {
  console.log("=== Leave Report ===");
  for (let i = 0; i < employees.length; i++) {
    let emp = employees[i];
    console.log("Employee: " + emp.name + " (" + emp.role + ")");
    console.log("Remaining balance: " + emp.leaveBalance);

    let taken = 0;
    for (let j = 0; j < requests.length; j++) {
      if (requests[j].empId === emp.id && requests[j].status === "APPROVED") {
        taken = taken + requests[j].days;
      }
    }
    console.log("Leave taken: " + taken);
    console.log("---");
  }
}

module.exports = { generateReport };
