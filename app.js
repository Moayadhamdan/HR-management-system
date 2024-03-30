function Employee(employeeId, fullName, department, level, imageUrl) {
    this.employeeId = employeeId;
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
    //stayle===========================
    // employeeInfo.id = "content";
    // employeeInfo.style.border ="solid";
    // employeeInfo.style.display="inline-block";
    employeeInfo.innerHTML = `
        
            <img src="${this.imageUrl}" alt="${this.fullName}">
            <h2>${this.fullName}</h2>
            <p>Employee ID: ${this.employeeId}</p>
            <p>Department: ${this.department}</p>
            <p>Level: ${this.level}</p>
            <p>Salary: $${this.salary.toFixed(2)}</p>
            <p>Net Salary: $${this.netSalary.toFixed(2)}</p>
        
    `;
    employeeList.appendChild(employeeInfo);
};

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('employee-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const department = document.getElementById('department').value;
        const level = document.getElementById('level').value;
        const imageUrl = document.getElementById('imageUrl').value;

        const employeeId = generateEmployeeId();
        const newEmployee = new Employee(employeeId, fullName, department, level, imageUrl);
        newEmployee.render();

        
        form.reset();
    });
});


const employees = [
    new Employee(4847, 'Ghazi Samer', 'Administration', 'Senior', 'assets/Ghazi.jpg'),
    new Employee(3548, 'Lana Ali', 'Finance', 'Senior', 'assets/Lana.jpg'),
    new Employee(9868, 'Tamara Ayoub', 'Marketing', 'Senior', 'assets/Tamara.jpg'),
    new Employee(2412, 'Safi Walid', 'Administration', 'Mid-Senior', 'assets/Safi.jpg'),
    new Employee(2875, 'Omar Zaid', 'Development', 'Senior', 'assets/Omar.jpg'),
    new Employee(8879, 'Rana Saleh', 'Development', 'Junior', 'assets/Rana.jpg'),
    new Employee(5024, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'assets/Hadi.jpg')
];
employees.forEach(employee => employee.render());