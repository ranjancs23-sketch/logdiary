// script.js

// --- General Functions ---

document.addEventListener('DOMContentLoaded', () => {
    // Check which page we are on and attach the appropriate event listeners
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', handleLogin);
    }

    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', handleRegistration);
    }

    if (document.getElementById('noteForm')) {
        document.getElementById('noteForm').addEventListener('submit', handleNoteSave);
        document.getElementById('logoutBtn').addEventListener('click', handleLogout);
        // In a real application, you'd load existing notes here
        loadNotes(); 
    }
});


/**
 * Placeholder function for user login.
 * In a real app, this sends credentials to the server and handles the response.
 */
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');

    message.style.backgroundColor = 'lightblue';
    message.style.color = '#333';
    
    // --- START: Backend Placeholder Logic ---
    if (email && password) {
        message.textContent = 'Attempting to log in... (Simulated success)';
        // Redirect to notes page after a short delay (simulating network request)
        setTimeout(() => {
            window.location.href = 'notes.html';
        }, 1000);
    } else {
        message.textContent = 'Please enter both email and password.';
        message.style.backgroundColor = 'lightcoral';
        message.style.color = 'white';
    }
    // --- END: Backend Placeholder Logic ---
}

/**
 * Placeholder function for user registration.
 * In a real app, this sends data to the server and creates a new user.
 */
function handleRegistration(event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('registerMessage');

    message.style.backgroundColor = 'lightblue';
    message.style.color = '#333';

    // Basic frontend validation
    if (password !== confirmPassword) {
        message.textContent = 'Error: Passwords do not match!';
        message.style.backgroundColor = 'lightcoral';
        message.style.color = 'white';
        return;
    }
    
    // --- START: Backend Placeholder Logic ---
    message.textContent = 'Registering new user... (Simulated success)';
    setTimeout(() => {
        alert('Registration Successful! You can now log in.');
        window.location.href = 'index.html'; // Go back to login
    }, 1500);
    // --- END: Backend Placeholder Logic ---
}

/**
 * Placeholder function for saving a note.
 * In a real app, this sends the note data (title, content, user ID) to the server.
 */
function handleNoteSave(event) {
    event.preventDefault();
    const title = document.getElementById('noteTitle').value.trim() || 'Untitled Note';
    const content = document.getElementById('noteContent').value.trim();

    if (content.length === 0) {
        alert('Note content cannot be empty!');
        return;
    }

    // --- START: Backend Placeholder Logic ---
    const timestamp = new Date().toLocaleString();
    console.log(`Saving Note: Title="${title}", Content Length=${content.length}, Time=${timestamp}`);
    
    // Simulate adding the note to the list
    addNoteToDOM(title, content, timestamp);

    // Clear the form
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
    alert('Note Saved! (Backend connection required for permanent storage)');
    // --- END: Backend Placeholder Logic ---
}

/**
 * Placeholder function for logging out.
 * In a real app, this destroys the session token on the server and client.
 */
function handleLogout() {
    // --- START: Backend Placeholder Logic ---
    alert('You have been logged out.');
    window.location.href = 'index.html'; // Redirect to login page
    // --- END: Backend Placeholder Logic ---
}

/**
 * Function to display a new note dynamically on the notes page.
 */
function addNoteToDOM(title, content, date) {
    const notesList = document.getElementById('notesList');
    
    // Create the new note card element
    const newNoteCard = document.createElement('div');
    newNoteCard.className = 'note-card';

    newNoteCard.innerHTML = `
        <h4>${title}</h4>
        <p>${content}</p>
        <small>${date}</small>
    `;

    // Insert the new note at the beginning of the list
    notesList.insertBefore(newNoteCard, notesList.children[0]);
}

/**
 * Placeholder function to simulate loading notes.
 */
function loadNotes() {
    // In a real application, you'd fetch notes from the server here
    console.log('Fetching notes from server... (Simulated)');
}