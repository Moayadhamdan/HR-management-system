function Employee(fullName, department, level, imageUrl) {
    this.employeeId = generateEmployeeId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.calculateSalary();
    this.netSalary = this.calculateNetSalary();
}

function generateEmployeeId() {
    return Math.floor(1000 + Math.random() * 9000);
}

Employee.prototype.calculateSalary = function() {
    let minSalary, maxSalary;
    switch (this.level) {
        case 'Senior':
            minSalary = 1500;
            maxSalary = 2000;
            break;
        case 'Mid-Senior':
            minSalary = 1000;
            maxSalary = 1500;
            break;
        case 'Junior':
            minSalary = 500;
            maxSalary = 1000;
            break;
        default:
            minSalary = 0;
            maxSalary = 0;
    }
    return Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
};

Employee.prototype.calculateNetSalary = function() {
    const taxPercent = 7.5;
    return this.salary * (1 - (taxPercent / 100));
};

Employee.prototype.render = function() {
    const employeeList = document.getElementById('employee-list');
    const employeeInfo = document.createElement('div');
    employeeInfo.classList.add('card-list')
    employeeInfo.innerHTML = `
        <img src="${this.imageUrl}" alt="${this.fullName}">
        <h2>Name: ${this.fullName} - ID: ${generateEmployeeId()}</h2>
        <p>Department: ${this.department} - Level: ${this.level}</p>
        <p>Salary: $${this.salary.toFixed(2)} - Net Salary: $${this.netSalary.toFixed(2)}</p>
        
    `;
    employeeList.appendChild(employeeInfo);
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('employee-form');
    const employeeList = document.getElementById('employee-list');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const department = document.getElementById('department').value;
        const level = document.getElementById('level').value;
        const imageUrl = document.getElementById('imageUrl').value;

        const employeeId = generateEmployeeId();
        const newEmployee = new Employee(fullName, department, level, imageUrl);

        const departmentSection = document.getElementById(department.toLowerCase());
        newEmployee.render();
        departmentSection.appendChild(employeeList.lastChild);

        form.reset();
    });

    const employees = [
        new Employee('Ghazi Samer', 'Administration', 'Senior', 'assets/Ghazi.jpg'),
        new Employee('Lana Ali', 'Finance', 'Senior', 'assets/Lana.jpg'),
        new Employee('Tamara Ayoub', 'Marketing', 'Senior', 'assets/Tamara.jpg'),
        new Employee('Safi Walid', 'Administration', 'Mid-Senior', 'assets/Safi.jpg'),
        new Employee('Omar Zaid', 'Development', 'Senior', 'assets/Omar.jpg'),
        new Employee('Rana Saleh', 'Development', 'Junior', 'assets/Rana.jpg'),
        new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', 'assets/Hadi.jpg')
    ];
    employees.forEach(employee => {
        const departmentSection = document.getElementById(employee.department.toLowerCase());
        employee.render();
        departmentSection.appendChild(employeeList.lastChild);
    });
});
