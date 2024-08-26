document.addEventListener('DOMContentLoaded', () => {
  const userInfo = document.querySelector('#user-info');

  // Simulating a logged-in user stored in localStorage
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
      // If user is logged in, display their name and log out option
      userInfo.innerHTML = `Welcome, ${currentUser.username} | <a href="#" id="logout">Log Out</a>`;

      document.querySelector('#logout').addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem('currentUser');
          window.location.reload(); // Reload the page to update the UI
      });
  } else {
      // If user is not logged in, display a log in option
      userInfo.innerHTML = `<a href="login.html">Log In</a>`;
  }
});
