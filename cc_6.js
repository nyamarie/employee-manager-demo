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