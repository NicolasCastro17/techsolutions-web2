const users = [
    { id: 1, name: "Alice", product: "DataViz" },
    { id: 2, name: "Bob", product: "TechSolutions" },
    { id: 3, name: "Charlie", product: "DataViz" }
];

function showUsers() {
    const listElement = document.getElementById('user-list');
    user.forEach(u => { 
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${u.id}, Producto: ${u.product}, Nombre: ${u.name}`;
        listElement.appendChild(listItem);
    });
}