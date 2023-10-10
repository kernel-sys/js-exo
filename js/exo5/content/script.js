const formulaire = document.getElementById('monFormulaire');

    function result(e) {
        e.preventDefault();
        const nombre1 = parseFloat(document.getElementById('nombre1').value);
        const nombre2 = parseFloat(document.getElementById('nombre2').value);

        if (isNaN(nombre1) || isNaN(nombre2) || nombre1 === "" || nombre2 === "") {
            alert("Veuillez entrer des nombres valides dans les deux champs.");
        } else {
            const resultat = nombre1 + nombre2;
            alert(`Le résultat de l'addition est : ${resultat}`);
        }
    }

    formulaire.addEventListener('submit', result);