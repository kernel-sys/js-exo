const bouton = document.getElementById('demandePseudo');

    // Fonction pour demander le pseudo de l'utilisateur
    function demandePseudo() {
        const pseudo = prompt("Veuillez entrer votre pseudo :");
        if (pseudo !== null && pseudo !== "") {
            alert(`Votre pseudo est : ${pseudo}`);
        } else {
            alert("Aucun pseudo n'a été saisi.");
        }
    }

    // Ajouter un rec d'événements au bouton
    bouton.addEventListener('click', demandePseudo);