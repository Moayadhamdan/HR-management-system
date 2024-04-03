const employees = JSON.parse(localStorage.getItem('employees')) || [];

function calculateDepartmentStatistics() {
    const departments = {};
    
    employees.forEach(employee => {
        if (!departments[employee.department]) {
            departments[employee.department] = {
                count: 0,
                totalSalary: 0
            };
        }
        departments[employee.department].count++;
        departments[employee.department].totalSalary += employee.salary;
    });

    const accountingTable = document.getElementById('accounting-table');
    let totalEmployees = 0;
    let totalSalary = 0;
    
    for (const department in departments) {
        const row = accountingTable.insertRow();
        row.insertCell().textContent = department;
        row.insertCell().textContent = departments[department].count;
        row.insertCell().textContent = departments[department].totalSalary.toFixed(2);
        row.insertCell().textContent = (departments[department].totalSalary / departments[department].count).toFixed(2);
        
        totalEmployees += departments[department].count;
        totalSalary += departments[department].totalSalary;
    }

    const footerRow = accountingTable.insertRow();
    footerRow.insertCell().textContent = 'Total';
    footerRow.insertCell().textContent = totalEmployees;
    footerRow.insertCell().textContent = totalSalary.toFixed(2);
    footerRow.insertCell().textContent = (totalSalary / totalEmployees).toFixed(2);

    const additionalFooterRow = accountingTable.insertRow();
    additionalFooterRow.insertCell().setAttribute('colspan', '4');
    additionalFooterRow.innerHTML = `
        <td>Total number of employees</td>
        <td>${totalEmployees}</td>
        <td>Total salary for all departments</td>
        <td>${totalSalary.toFixed(2)}</td>
        <td>Average salary for all departments</td>
        <td>${(totalSalary / totalEmployees).toFixed(2)}</td>
    `;
}

calculateDepartmentStatistics();
