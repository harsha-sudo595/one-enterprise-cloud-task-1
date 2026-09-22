const attendanceBody = document.getElementById("attendanceBody");

const attendanceData = {};

function renderAttendance() {
    attendanceBody.innerHTML = "";

    employees.forEach(function(employee) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.department}</td>

            <td>
                <select id="status-${employee.id}">
                    <option value="">Select Status</option>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Half Day">Half Day</option>
                    <option value="Work From Home">Work From Home</option>
                </select>

                <span id="badge-${employee.id}"></span>
            </td>

            <td>
                <button onclick="markAttendance(${employee.id})">
                    Mark Attendance
                </button>

                <button onclick="updateAttendance(${employee.id})">
                    Update
                </button>

                <button onclick="resetAttendance(${employee.id})">
                    Reset
                </button>
            </td>
        `;

        attendanceBody.appendChild(row);
    });
}

function markAttendance(id) {
    if (attendanceData[id]) {
        alert("Attendance already marked. Use Update.");
        return;
    }

    const select = document.getElementById("status-" + id);

    if (select.value === "") {
        alert("Please select a status.");
        return;
    }

    attendanceData[id] = select.value;
    showBadge(id);

    alert("Attendance marked successfully.");
}

function updateAttendance(id) {
    const select = document.getElementById("status-" + id);

    if (select.value === "") {
        alert("Please select a status.");
        return;
    }

    attendanceData[id] = select.value;
    showBadge(id);

    alert("Attendance updated successfully.");
}

function resetAttendance(id) {
    delete attendanceData[id];

    document.getElementById("status-" + id).value = "";
    document.getElementById("badge-" + id).innerHTML = "";
}

function showBadge(id) {
    const badge = document.getElementById("badge-" + id);

    badge.innerHTML =
        " <span class='badge'>" +
        attendanceData[id] +
        "</span>";
}

renderAttendance();