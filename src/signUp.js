document.addEventListener('DOMContentLoaded', function() {
    const signIn = document.getElementById('sign-in-button');
    if (signIn) {
      signIn.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Sign In clicked. Name: ${name}, Email: ${email}`);
        // You can add your actual sign-in logic here
      });
    }
  
    const forgotPassword = document.getElementById('forgot-password-button');
    if (forgotPassword) {
      forgotPassword.addEventListener('click', function() {
        alert('Forgot Password clicked');
        // Redirect to forgot password page or display forgot password dialog
        window.location.href = 'forgot-password.html'; // example redirect
      });
    }
  
    const createAccount = document.getElementById('create-account');
    if (createAccount) {
      createAccount.addEventListener('click', function() {
        alert('Create Account clicked');
        // Redirect to create account page or display create account dialog
        window.location.href = 'create-account.html'; // example redirect
      });
    }
  });
  