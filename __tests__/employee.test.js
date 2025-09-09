const {
  employees,
  getEmployee,
  checkLeaveBalance,
  reduceLeaveBalance,
} = require("../src/employee");

test("getEmployee returns correct employee", () => {
  expect(getEmployee(1)).toEqual(employees[0]);
  expect(getEmployee(99)).toBeNull();
});

test("checkLeaveBalance returns correct balance", () => {
  expect(checkLeaveBalance(2)).toBe(30);
  expect(checkLeaveBalance(99)).toBe(0);
});

test("reduceLeaveBalance reduces balance", () => {
  reduceLeaveBalance(1, 5);
  expect(getEmployee(1).leaveBalance).toBe(20);
});
