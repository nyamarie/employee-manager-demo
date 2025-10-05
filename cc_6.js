// Base class Employee
class Employee {
    constructor(name, department) {
    this.name = name;
    this.department = department;
    }
    
    
    describe() {
    return `${this.name} works in the ${this.department} department.`;
    }
    }
    // Subclass Manager extends Employee
class Manager extends Employee {
    constructor(name, department, teamSize) {
    super(name, department); // inherit name & department
    this.teamSize = Number(teamSize);
    }
    
    
    // Method overriding: add manager-specific info
    describe() {
    return `${this.name} manages a team of ${this.teamSize} in the ${this.department} department.`;
    }
    }
    
// Create sample employees/managers, add to Company, list
const acme = new Company("ACME Corp");


const e1 = new Employee("Nya Williams", "Cybersecurity");
const e2 = new Employee("Jordan Reed", "Finance");
const m1 = new Manager("Avery Chen", "Engineering", 8);
const m2 = new Manager("Sam Patel", "Operations", 4);


acme.addEmployee(e1);
acme.addEmployee(e2);
acme.addEmployee(m1);
acme.addEmployee(m2);


// Small UI hook for index.html
(function attachUI() {
const btn = document.getElementById("runBtn");
const out = document.getElementById("out");
if (!btn || !out) return;


const write = (msg = "") => {
out.textContent += (out.textContent ? "\n" : "") + msg;
};


btn.addEventListener("click", () => {
out.textContent = ""; // clear
// Log to page
acme.listEmployees(write);
// And also to Console for grading
acme.listEmployees();
});
})();


// Export to window for manual testing in Console if desired
window.Employee = Employee;
window.Manager = Manager;
window.Company = Company;
window.acme = acme;

// Company class to hold employees
class Company {
    constructor(name) {
    this.name = name;
    this.employees = []; // array of Employee or Manager instances
    }
    
    
    addEmployee(employee) {
    if (!(employee instanceof Employee)) {
    throw new TypeError("addEmployee expects an instance of Employee or a subclass");
    }
    this.employees.push(employee);
    }
    
    
    listEmployees(logger = console.log) {
    logger(`Company: ${this.name}`);
    this.employees.forEach((emp, idx) => {
    logger(`${idx + 1}. ${emp.describe()}`);
    });
    }
    }