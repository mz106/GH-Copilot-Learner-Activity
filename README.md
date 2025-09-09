# Leave Management System

A simple Node.js application for managing employee leave requests and generating leave reports. The app supports submitting, approving, and denying leave requests, and provides reporting functionality for employee leave balances and history.

## Features

- Submit leave requests for employees
- Approve or deny leave requests
- Track leave balances
- Generate leave reports
- Unit and integration tests with Jest

## Project Structure

```
├── src/
│   ├── employee.js         # Employee data and functions
│   ├── leaveRequest.js     # Leave request logic
│   ├── reporting.js        # Reporting functionality
│   ├── index.js            # Main entry point
│   ├── employee.test.js    # Unit tests for employee.js
│   ├── leaveRequest.test.js# Integration tests for leaveRequest.js
├── __tests__/
│   ├── reporting.test.js   # Unit tests for reporting.js
│   ├── index.test.js       # (To be created) Unit tests for index.js
├── package.json            # Project metadata and scripts
├── jest.config.js          # Jest configuration
├── setupTests.js           # Jest setup file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm

### Installation

1. Clone the repository or download the source code.
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

To start the application:

```sh
node src/index.js
```

### Running Tests

To run all unit and integration tests:

```sh
npm test
```

## How It Works

- Employees are defined in `employee.js`.
- Leave requests are managed in `leaveRequest.js`.
- The main logic (submitting/approving/denying requests, generating reports) is in `index.js` and `reporting.js`.
- Reports show each employee's leave balance and approved leave taken.

## Customization

- Add or modify employees in `employee.js`.
- Extend leave request types or logic in `leaveRequest.js`.
- Customize reporting output in `reporting.js`.

## License

MIT

## API Documentation

### employee.js

#### employees

Array of employee objects:
`[{ id: number, name: string, role: string, leaveBalance: number }]`

#### getEmployee(id)

**Parameters:**

- `id` (number): Employee ID
  **Returns:**
- Employee object if found, otherwise `null`
  **Description:**
  Returns the employee object for the given ID.

#### checkLeaveBalance(id)

**Parameters:**

- `id` (number): Employee ID
  **Returns:**
- Leave balance (number), or `0` if employee not found
  **Description:**
  Returns the leave balance for the given employee ID.

#### reduceLeaveBalance(id, days)

**Parameters:**

- `id` (number): Employee ID
- `days` (number): Number of leave days to deduct
  **Returns:**
- `void`
  **Description:**
  Reduces the leave balance for the given employee ID by the specified number of days.

---

### leaveRequest.js

#### requests

Array of leave request objects:
`[{ id: number, empId: number, days: number, type: string, status: string }]`

#### submitLeaveRequest(empId, days, type)

**Parameters:**

- `empId` (number): Employee ID
- `days` (number): Number of leave days requested
- `type` (string): Type of leave (e.g., 'holiday', 'sick')
  **Returns:**
- Created request object if successful, otherwise `null`
  **Description:**
  Submits a leave request for an employee.

#### approveRequest(reqId, managerId)

**Parameters:**

- `reqId` (number): Request ID to approve
- `managerId` (number): Manager ID approving the request
  **Returns:**
- Updated request object if found, otherwise `null`
  **Description:**
  Approves a leave request by ID and deducts leave from the employee's balance.

#### denyRequest(reqId, managerId)

**Parameters:**

- `reqId` (number): Request ID to deny
- `managerId` (number): Manager ID denying the request
  **Returns:**
- Updated request object if found, otherwise `null`
  **Description:**
  Denies a leave request by ID.

---

### reporting.js

#### generateReport()

**Parameters:**

- None
  **Returns:**
- `void`
  **Description:**
  Generates and prints a leave report for all employees. The report includes each employee's name, role, remaining leave balance, and total approved leave taken. Output is printed to the console.

---

### index.js

Main entry point for the Leave Management System. Demonstrates submitting, approving, and denying leave requests, then generates a report.
# GH-Copilot-Learner-Activity
