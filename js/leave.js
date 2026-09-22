        const fromDate = document.getElementById("fromDate");
        const toDate = document.getElementById("toDate");
        const totalDays = document.getElementById("totalDays");

        function calculateDays() {

            if (fromDate.value && toDate.value) {

                const start = new Date(fromDate.value);
                const end = new Date(toDate.value);

                const difference =
                    (end - start) / (1000 * 60 * 60 * 24) + 1;

                if (difference > 0) {
                    totalDays.value = difference;
                } else {
                    totalDays.value = "";
                    alert("To Date must be after From Date.");
                }
            }
        }

        fromDate.addEventListener("change", calculateDays);
        toDate.addEventListener("change", calculateDays);


        document.getElementById("leaveForm").addEventListener("submit", function (event) {

            event.preventDefault();

            alert("Leave applied successfully.");

            this.reset();
            totalDays.value = "";
        });