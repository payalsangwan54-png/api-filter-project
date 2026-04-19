 let users = [];

// API Call
async function fetchUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await res.json();
    display(users);
}

// Display Data
function display(data) {
    let list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach(user => {
        let li = document.createElement("li");
        li.textContent = user.name;
        list.appendChild(li);
    });
}

// Filter Function
document.getElementById("searchBox").addEventListener("input", function () {
    let value = this.value.toLowerCase();

    let filtered = users.filter(user =>
        user.name.toLowerCase().includes(value)
    );

    display(filtered);
});

// Initial Call
fetchUsers();