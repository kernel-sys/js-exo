const valeurElement = document.getElementById('valeur');
    const incrementerButton = document.getElementById('incrementer');
    const decrementerButton = document.getElementById('decrementer');

    let valeur = 0;

    function afficherValeur() {
        valeurElement.textContent = valeur;
    }

    function incrementer() {
        valeur++;
        afficherValeur();
    }

    function decrementer() {
        valeur--;
        afficherValeur();
    }

    incrementerButton.addEventListener('click', incrementer);
    decrementerButton.addEventListener('click', decrementer);

    afficherValeur(); // Afficher la valeur initiale au chargement de la page
