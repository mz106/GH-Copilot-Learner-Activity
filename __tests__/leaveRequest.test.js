const {
  submitLeaveRequest,
  approveRequest,
  denyRequest,
  requests,
} = require("../src/leaveRequest");
const { employees } = require("../src/employee");

beforeEach(() => {
  requests.length = 0;
  employees[0].leaveBalance = 25;
});

test("submitLeaveRequest creates a request", () => {
  const req = submitLeaveRequest(1, 5, "holiday");
  expect(req).toMatchObject({
    empId: 1,
    days: 5,
    type: "holiday",
    status: "PENDING",
  });
  expect(requests.length).toBe(1);
});

test("approveRequest changes status and reduces balance", () => {
  submitLeaveRequest(1, 5, "holiday");
  approveRequest(1, 2);
  expect(requests[0].status).toBe("APPROVED");
  expect(employees[0].leaveBalance).toBe(20);
});

test("denyRequest changes status", () => {
  submitLeaveRequest(1, 5, "holiday");
  denyRequest(1, 2);
  expect(requests[0].status).toBe("DENIED");
});
