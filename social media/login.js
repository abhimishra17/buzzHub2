document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Sample credentials
  const validCredentials = [
      { id: 'abhi', pass: 'abhi' },
      { id: 'adi', pass: 'adi' },
      { id: 'rahul', pass: 'rahul' }
  ];

  // Check if the entered credentials are valid
  const isValid = validCredentials.some(cred => cred.id === username && cred.pass === password);

  if (isValid) {
      alert('Login successful!');
      window.location.href = 'index.html'; // Redirect to the main page after login
  } else {
      alert('Invalid username or password. Please try again.');
  }
});

