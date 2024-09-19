const Username = "admin";
const Password = "123";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === Username && password === Password) {
        message.textContent = "Login successful!";

        setTimeout(function() {
            window.location.href = "indexx.html"; 
        }, 1000); 
    }else {
        message.textContent = "Invalid username or password.";
    }
});
