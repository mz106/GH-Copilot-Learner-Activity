const employees = [
  { id: 1, name: "Alice", role: "Developer", leaveBalance: 25 },
  { id: 2, name: "Bob", role: "Manager", leaveBalance: 30 },
  { id: 3, name: "Charlie", role: "Intern", leaveBalance: 10 },
];

function getEmployee(id) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      return employees[i];
    }
  }
  return null;
}

function checkLeaveBalance(id) {
  let emp = getEmployee(id);
  if (emp) {
    return emp.leaveBalance;
  } else {
    return 0;
  }
}

function reduceLeaveBalance(id, days) {
  let emp = getEmployee(id);
  if (emp) {
    emp.leaveBalance = emp.leaveBalance - days;
  }
}

module.exports = {
  employees,
  getEmployee,
  checkLeaveBalance,
  reduceLeaveBalance,
};
