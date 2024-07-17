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
  
    
  });

function checkLength(info){
    if (info.length < 8 )
}
  