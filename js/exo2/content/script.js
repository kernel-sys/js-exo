const lien = document.getElementById('cliqueLien'); 
    
    // Définir les variables
    const pseudo = "John Duff";
    const age = 21;
    const pays = "France";

    lien.addEventListener('click', () => {
        alert(`Pseudo : ${pseudo}\nAge : ${age}\nPays : ${pays}`);
    });