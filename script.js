let users = [];
function register() {
  let username = document.getElementById("regUsername").value;
  let password = document.getElementById("regPassword").value;
  if (users.find(user => user.username === username)) {
    setMessage("Username already exists!");
    return;
  }
  users.push({ username, password });
  setMessage("Registration successful!");
}

function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;
  let user = users.find(user => user.username === username);

  if (!user) {
    setMessage("User not found!");
    return;
  }
  if (user.password === password) {
    setMessage("Login successful!");
  } else {
    setMessage("Incorrect password!");
  }
}

function setMessage(message) {
  document.getElementById("message").textContent = message;
}
