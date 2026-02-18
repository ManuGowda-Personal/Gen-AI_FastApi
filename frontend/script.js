const API_URL = "http://localhost:8000";

async function createUser() {
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: parseInt(document.getElementById("age").value)
  };

  await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });

  loadUsers();
}

async function loadUsers() {
  const res = await fetch(`${API_URL}/users/get`);
  const users = await res.json();

  const list = document.getElementById("users");
  list.innerHTML = "";

  users.forEach(u => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${u.name} | ${u.email} | ${u.age}
      <button onclick="updateUser('${u._id}')">Update</button>
      <button onclick="deleteUser('${u._id}')">Delete</button>
    `;

    list.appendChild(li);
  });
}

async function deleteUser(id) {
  await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE"
  });

  loadUsers();
}

async function updateUser(id) {
  const name = prompt("Enter new name:");
  const email = prompt("Enter new email:");
  const age = prompt("Enter new age:");

  if (!name || !email || !age) return;

  const user = {
    name,
    email,
    age: parseInt(age)
  };

  await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });

  loadUsers();
}