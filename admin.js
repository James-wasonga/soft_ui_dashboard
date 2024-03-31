// Dummy data for orders
const orders = [
    { id: 1, service: "Plowing", customer: "John Doe", status: "Pending" },
    { id: 2, service: "Seed Planting", customer: "Jane Smith", status: "Completed" },
    { id: 3, service: "Fertilizer Application", customer: "Michael Johnson", status: "Pending" }
];

// Function to populate orders table
function populateOrdersTable() {
    const tableBody = document.getElementById("orders-table-body");
    tableBody.innerHTML = '';

    orders.forEach(order => {
        const row = `
            <tr>
                <td>${order.id}</td>
                <td>${order.service}</td>
                <td>${order.customer}</td>
                <td>${order.status}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Function to handle adding a new service
document.getElementById("add-service-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceName = document.getElementById("service-name").value;
    const serviceDescription = document.getElementById("service-description").value;
    const servicePrice = parseFloat(document.getElementById("service-price").value);

    // Add new service to a hypothetical database
    // Here, we'll just log the service details
    console.log("New Service Added:");
    console.log("Name:", serviceName);
    console.log("Description:", serviceDescription);
    console.log("Price:", servicePrice);

    // Clear the form
    document.getElementById("service-name").value = "";
    document.getElementById("service-description").value = "";
    document.getElementById("service-price").value = "";

    // You can add further logic here, like sending the data to the server using AJAX
});

// Populate orders table initially
populateOrdersTable();
