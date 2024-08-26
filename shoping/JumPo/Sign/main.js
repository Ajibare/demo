let users = JSON.parse(localStorage.getItem('users')) || [];

document.querySelector('#signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if (users.find(user => user.email === email)) {
        alert('Email already exists. Please log in.');
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Account created successfully! Please log in.');
    window.location.href = 'login.html';
});

document.querySelector('#login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.username}!`);
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Incorrect email or password.');
    }
});


document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
      document.querySelector('#user-info').textContent = `Welcome, ${currentUser.username}`;
      document.querySelector('#user-info').innerHTML += ` | <a href="#" id="logout">Log Out</a>`;
      document.querySelector('#logout').addEventListener('click', () => {
          localStorage.removeItem('currentUser');
          window.location.href = 'index.html';
      });
  }
});

