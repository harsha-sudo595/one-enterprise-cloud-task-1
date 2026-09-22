  document.getElementById("loginForm").addEventListener("submit", function(event) {

            event.preventDefault();

            const employee = document.getElementById("employee").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("errorMessage");

            if (employee === "admin" && password === "admin123") {

                window.location.href = "dashboard.html";

            } else {

                errorMessage.style.display = "block";

            }

        });