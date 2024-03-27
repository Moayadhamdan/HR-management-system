function Employee(employeeId, fullName, department, level, imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.calculateSalary();
    this.netSalary = this.calculateNetSalary();
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
    employeeInfo.innerHTML = `
        <div>
            <img src="${this.imageUrl}" alt="${this.fullName}">
            <h2>${this.fullName}</h2>
            <p>Department: ${this.department}</p>
            <p>Level: ${this.level}</p>
            <p>Salary: $${this.salary.toFixed(2)}</p>
            <p>Net Salary: $${this.netSalary.toFixed(2)}</p>
        </div>
    `;
    employeeList.appendChild(employeeInfo);
};
const employees = [
    new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg'),
    new Employee(1001, 'Lana Ali', 'Finance', 'Senior', 'https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg'),
    new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'https://static.vecteezy.com/system/resources/previews/002/002/257/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg'),
    new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg'),
    new Employee(1004, 'Omar Zaid', 'Development', 'Senior', 'https://previews.123rf.com/images/metelsky/metelsky1904/metelsky190400021/121859823-male-avatar-icon-or-portrait-handsome-young-man-face-with-beard-vector-illustration.jpg'),
    new Employee(1005, 'Rana Saleh', 'Development', 'Junior', 'https://static.vecteezy.com/system/resources/previews/002/002/297/non_2x/beautiful-woman-avatar-character-icon-free-vector.jpg'),
    new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'https://static.vecteezy.com/system/resources/previews/024/183/535/original/male-avatar-portrait-of-a-young-man-with-glasses-illustration-of-male-character-in-modern-color-style-vector.jpg')
];
employees.forEach(employee => employee.render());