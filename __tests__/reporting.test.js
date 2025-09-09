const { generateReport } = require("../src/reporting");
const { employees } = require("../src/employee");
const { requests } = require("../src/leaveRequest");

describe("generateReport", () => {
  beforeEach(() => {
    employees.forEach((emp) => (emp.leaveBalance = 25));
    requests.length = 0;
    requests.push(
      { empId: 1, days: 5, type: "holiday", status: "APPROVED" },
      { empId: 2, days: 10, type: "sick", status: "APPROVED" },
      { empId: 3, days: 12, type: "holiday", status: "DENIED" }
    );
  });

  it("prints correct report for employees", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    generateReport();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("Employee:"));
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Remaining balance:")
    );
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Leave taken:")
    );
    logSpy.mockRestore();
  });

  it("shows correct leave taken for approved requests", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    generateReport();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Leave taken: 5")
    );

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Leave taken: 10")
    );

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Leave taken: 0")
    );
    logSpy.mockRestore();
  });
});
