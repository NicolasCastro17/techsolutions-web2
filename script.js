const users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 30, product: "DataViz" },
    { id: 2, name: "Bob", email: "bob@example.com", age: 25, product: "TechSolutions" },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 40, product: "DataViz" }
];
function showUsers() {
    const listElement = document.getElementById('user-list');
    users.forEach(u => { 
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${u.id}, Producto: ${u.product}, Nombre: ${u.name}`, Email: ${u.email}, Edad: ${u.age}`;
        listElement.appendChild(listItem);
    });
}

