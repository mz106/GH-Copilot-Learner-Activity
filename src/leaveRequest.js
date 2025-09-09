const {
  getEmployee,
  checkLeaveBalance,
  reduceLeaveBalance,
} = require("./employee");

let requests = [];

function submitLeaveRequest(empId, days, type) {
  let balance = checkLeaveBalance(empId);
  if (balance >= days) {
    let request = {
      id: requests.length + 1,
      empId,
      days,
      type,
      status: "PENDING",
    };
    requests.push(request);
    console.log("Leave request submitted for employee " + empId);
    return request;
  } else {
    console.log("Not enough balance for employee " + empId);
    return null;
  }
}

function approveRequest(reqId, managerId) {
  for (let i = 0; i < requests.length; i++) {
    if (requests[i].id === reqId) {
      let emp = getEmployee(requests[i].empId);
      if (emp) {
        reduceLeaveBalance(emp.id, requests[i].days);
        requests[i].status = "APPROVED";
        console.log("Request " + reqId + " approved by " + managerId);
        return requests[i];
      }
    }
  }
  console.log("Request not found: " + reqId);
  return null;
}

function denyRequest(reqId, managerId) {
  for (let i = 0; i < requests.length; i++) {
    if (requests[i].id === reqId) {
      requests[i].status = "DENIED";
      console.log("Request " + reqId + " denied by " + managerId);
      return requests[i];
    }
  }
  console.log("Request not found: " + reqId);
  return null;
}

module.exports = { submitLeaveRequest, approveRequest, denyRequest, requests };
