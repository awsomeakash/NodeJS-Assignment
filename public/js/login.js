// public/js/login.js
async function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (result.success) {
        localStorage.setItem('token', result.token);
        window.location.href = 'http://localhost:3000/products';
    } else {
        console.error('Login failed:', result.error);
    }
}
