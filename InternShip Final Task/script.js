// Function to show the Login/Signup page
function showLoginSignup() {
    document.getElementById("landing-page").style.display = "none";
    document.getElementById("login-signup-page").style.display = "block";
    document.getElementById("dashboard-page").style.display = "none";
    document.getElementById("profile-page").style.display = "none";
}

// Function to handle Login/Signup form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Example login check (this is just a mock; in real apps, you'd check against a database)
    if (email && password) {
        // Store user info in localStorage (this is insecure for production, just for demonstration)
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        // Go to the Dashboard page
        document.getElementById("login-signup-page").style.display = "none";
        document.getElementById("dashboard-page").style.display = "block";

        // Set user data on dashboard (for demo, show part of email as the username)
        document.getElementById("user-name").innerText = email.split('@')[0]; // Display part before @ as username
    } else {
        alert("Please enter valid credentials!");
    }
});

// Function to show Profile page
function showProfile() {
    document.getElementById("dashboard-page").style.display = "none";
    document.getElementById("profile-page").style.display = "block";
}

// Function to go back to Dashboard
function backToDashboard() {
    document.getElementById("profile-page").style.display = "none";
    document.getElementById("dashboard-page").style.display = "block";
}

// Function to edit profile (simple mock for this task)
function editProfile() {
    const newName = prompt("Enter your new name:", "John Doe");
    if (newName) {
        document.getElementById("profile-name").innerText = newName;
    }
}

// On page load, check if user is logged in by checking localStorage
window.onload = function() {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
        // If user is logged in (email exists in localStorage), show the Dashboard
        document.getElementById("landing-page").style.display = "none";
        document.getElementById("login-signup-page").style.display = "none";
        document.getElementById("dashboard-page").style.display = "block";
        document.getElementById("user-name").innerText = storedEmail.split('@')[0];
    } else {
        // If not logged in, show the landing page
        document.getElementById("landing-page").style.display = "block";
    }
};
