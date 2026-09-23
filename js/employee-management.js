let employeeList = employees.map(function(employee) {
    return {
        id: employee.id,
        name: employee.name,
        department: employee.department,
        designation: employee.designation,
        email: employee.email || ""
    };
});

let editIndex = -1;


// Add Employee
function addEmployee(employee) {

    employeeList.push(employee);

    displayEmployees();

    updateTotalEmployees();
}


// Display Employees
function displayEmployees() {

    const tableBody = document.getElementById("employeeTableBody");

    tableBody.innerHTML = "";

    employeeList.forEach(function(employee, index) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.designation}</td>
            <td>${employee.email}</td>

            <td>
                <button onclick="editEmployee(${index})">
                    Edit
                </button>

                <button onclick="deleteEmployee(${index})">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);

    });
}


// Edit Employee
function editEmployee(index) {

    const employee = employeeList[index];

    document.getElementById("employeeId").value = employee.id;
    document.getElementById("employeeName").value = employee.name;
    document.getElementById("department").value = employee.department;
    document.getElementById("designation").value = employee.designation;
    document.getElementById("email").value = employee.email;

    editIndex = index;

    document.getElementById("addEmployeeBtn").style.display = "none";
    document.getElementById("updateEmployeeBtn").style.display = "inline-block";
}


// Update Employee
function updateEmployee() {

    const employee = {

        id: document.getElementById("employeeId").value,
        name: document.getElementById("employeeName").value,
        department: document.getElementById("department").value,
        designation: document.getElementById("designation").value,
        email: document.getElementById("email").value

    };

    employeeList[editIndex] = employee;

    editIndex = -1;

    displayEmployees();

    clearForm();

    document.getElementById("addEmployeeBtn").style.display = "inline-block";
    document.getElementById("updateEmployeeBtn").style.display = "none";
}


// Delete Employee
function deleteEmployee(index) {

    const confirmation = confirm("Are you sure?");

    if (confirmation) {

        employeeList.splice(index, 1);

        displayEmployees();

        updateTotalEmployees();
    }
}


// Clear Form
function clearForm() {

    document.getElementById("employeeId").value = "";
    document.getElementById("employeeName").value = "";
    document.getElementById("department").value = "";
    document.getElementById("designation").value = "";
    document.getElementById("email").value = "";
}


// Total Employees
function updateTotalEmployees() {

    document.getElementById("totalEmployees").textContent =
        employeeList.length;
}

// Add Employee Form
document.getElementById("employeeForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const employee = {
        id: document.getElementById("employeeId").value,
        name: document.getElementById("employeeName").value,
        department: document.getElementById("department").value,
        designation: document.getElementById("designation").value,
        email: document.getElementById("email").value
    };

    addEmployee(employee);

    clearForm();
});
document.getElementById("updateEmployeeBtn").addEventListener("click", function () {
    updateEmployee();
});

displayEmployees();
updateTotalEmployees();