const {
  submitLeaveRequest,
  approveRequest,
  denyRequest,
} = require("./leaveRequest");
const { generateReport } = require("./reporting");

console.log("System starting...");

submitLeaveRequest(1, 5, "holiday");
submitLeaveRequest(2, 15, "sick");
submitLeaveRequest(3, 12, "holiday");

approveRequest(1, 2);
denyRequest(2, 2);

generateReport();
