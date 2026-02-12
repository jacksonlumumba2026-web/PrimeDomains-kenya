document.addEventListener('DOMContentLoaded', function() {
  // Login functionality
  var loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('login-email').value;
      var password = document.getElementById('login-password').value;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          window.location = 'dashboard.html';
        })
        .catch((error) => {
          document.getElementById('login-error').innerText = error.message;
        });
    });
  }
  // Registration functionality
  var registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('register-email').value;
      var password = document.getElementById('register-password').value;
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          window.location = 'dashboard.html';
        })
        .catch((error) => {
          document.getElementById('register-error').innerText = error.message;
        });
    });
  }
});
