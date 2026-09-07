const employeeContainer = document.getElementById("employeeContainer");
const searchInput = document.getElementById("searchEmployee");
const departmentFilter = document.getElementById("departmentFilter");


function displayEmployees(employeeList) {

    employeeContainer.innerHTML = "";

    if (employeeList.length === 0) {

        employeeContainer.innerHTML = `
            <div class="no-results">
                <h2>No Employees Found</h2>
                <p>Try a different name or department.</p>
            </div>
        `;

        return;
    }


    employeeList.forEach(function(employee) {

        const card = document.createElement("div");

        card.className = "employee-card";

        card.innerHTML = `
            <img src="${employee.photo}" alt="${employee.name}">

            <h2>${employee.name}</h2>

            <p><strong>Employee ID:</strong> ${employee.id}</p>

            <p><strong>Department:</strong> ${employee.department}</p>

            <p><strong>Designation:</strong> ${employee.designation}</p>

            <span class="status">${employee.status}</span>
        `;

        employeeContainer.appendChild(card);

    });
}


function filterEmployees() {

    const searchText = searchInput.value.toLowerCase();

    const selectedDepartment = departmentFilter.value;


    const filteredEmployees = employees.filter(function(employee) {

        const matchesName =
            employee.name.toLowerCase().includes(searchText);

        const matchesDepartment =
            selectedDepartment === "All" ||
            employee.department === selectedDepartment;

        return matchesName && matchesDepartment;

    });


    displayEmployees(filteredEmployees);
}


searchInput.addEventListener("input", filterEmployees);

departmentFilter.addEventListener("change", filterEmployees);


// Display all employees when the page loads
displayEmployees(employees);