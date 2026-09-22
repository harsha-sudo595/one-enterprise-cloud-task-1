 const employeeContainer = document.getElementById("employeeContainer");
    const searchInput = document.getElementById("searchInput");
    const departmentFilter = document.getElementById("departmentFilter");
    const designationFilter = document.getElementById("designationFilter");
    const statusFilter = document.getElementById("statusFilter");
    const sortSelect = document.getElementById("sortSelect");
    const resetBtn = document.getElementById("resetBtn");


    // Create filter options
    function loadFilters() {

        const departments = [...new Set(
            employees.map(employee => employee.department)
        )];

        const designations = [...new Set(
            employees.map(employee => employee.designation)
        )];

        const statuses = [...new Set(
            employees.map(employee => employee.status)
        )];


        departments.forEach(department => {
            const option = document.createElement("option");
            option.value = department;
            option.textContent = department;
            departmentFilter.appendChild(option);
        });


        designations.forEach(designation => {
            const option = document.createElement("option");
            option.value = designation;
            option.textContent = designation;
            designationFilter.appendChild(option);
        });


        statuses.forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            statusFilter.appendChild(option);
        });
    }


    // Display employees
    function displayEmployees(employeeList) {

        employeeContainer.innerHTML = "";

        employeeList.forEach(employee => {

            const card = document.createElement("div");

            card.className = "employee-card";

            card.innerHTML = `
                <img src="${employee.photo}"
                     alt="${employee.name}"
                     class="employee-photo">

                <h2>${employee.name}</h2>

                <p><strong>Employee ID:</strong> ${employee.id}</p>

                <p><strong>Department:</strong>
                    ${employee.department}
                </p>

                <p><strong>Designation:</strong>
                    ${employee.designation}
                </p>

                <p><strong>Status:</strong>
                    ${employee.status}
                </p>
            `;

            employeeContainer.appendChild(card);
        });
    }


    // Search, Filter and Sort
    function applyFilters() {

        let filteredEmployees = [...employees];

        const searchText =
            searchInput.value.toLowerCase();

        const department =
            departmentFilter.value;

        const designation =
            designationFilter.value;

        const status =
            statusFilter.value;

        const sortValue =
            sortSelect.value;


        // Search by name or employee ID
        filteredEmployees = filteredEmployees.filter(employee =>
            employee.name.toLowerCase().includes(searchText) ||
            employee.id.toString().includes(searchText)
        );


        // Department filter
        if (department) {
            filteredEmployees = filteredEmployees.filter(employee =>
                employee.department === department
            );
        }


        // Designation filter
        if (designation) {
            filteredEmployees = filteredEmployees.filter(employee =>
                employee.designation === designation
            );
        }


        // Status filter
        if (status) {
            filteredEmployees = filteredEmployees.filter(employee =>
                employee.status === status
            );
        }


        // Sorting
        if (sortValue === "name-asc") {

            filteredEmployees.sort((a, b) =>
                a.name.localeCompare(b.name)
            );

        } else if (sortValue === "name-desc") {

            filteredEmployees.sort((a, b) =>
                b.name.localeCompare(a.name)
            );

        } else if (sortValue === "id-asc") {

            filteredEmployees.sort((a, b) =>
                a.id - b.id
            );

        } else if (sortValue === "id-desc") {

            filteredEmployees.sort((a, b) =>
                b.id - a.id
            );
        }


        displayEmployees(filteredEmployees);
    }


    // Event listeners
    searchInput.addEventListener("input", applyFilters);

    departmentFilter.addEventListener("change", applyFilters);

    designationFilter.addEventListener("change", applyFilters);

    statusFilter.addEventListener("change", applyFilters);

    sortSelect.addEventListener("change", applyFilters);


    // Reset
    resetBtn.addEventListener("click", () => {

        searchInput.value = "";
        departmentFilter.value = "";
        designationFilter.value = "";
        statusFilter.value = "";
        sortSelect.value = "";

        displayEmployees(employees);
    });


    // Start
    loadFilters();
    displayEmployees(employees);

