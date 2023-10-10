const formulaire = document.getElementById('monFormulaire');

    function verifierAge(e) {
        e.preventDefault();
        const age = parseInt(document.getElementById('age').value);

        if (isNaN(age) || age < 0) {
            alert("Veuillez entrer un âge valide.");
        } else {
            if (age >= 18) {
                alert("Vous êtes majeur.");
            } else {
                alert("Vous êtes mineur.");
            }
        }
    }

    formulaire.addEventListener('submit', verifierAge);