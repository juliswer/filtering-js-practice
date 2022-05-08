const input = document.querySelector("#searchInput");
const userList = document.querySelector("#users");

async function loadUsers() {
  const response = await fetch(
    "https://fakerapi.it/api/v1/users?_quantity=1000"
  );
  return await response.json();
}

const createUserItems = (users) =>
  users
    .map(
      (user) => `
    <li>
        ${user.firstname} ${user.lastname}
    </li>
`
    )
    .join(" ");

function renderUsers(users) {
  const itemsString = createUserItems(users);
  userList.innerHTML = itemsString;
}

window.addEventListener("DOMContentLoaded", async () => {
  const data = await loadUsers();
  renderUsers(data.data);
});

input.addEventListener("keyup", (e) => {
  console.log(input.value);
});
