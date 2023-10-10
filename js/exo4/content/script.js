const formulaire = document.getElementById('monFormulaire');

    formulaire.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const category = document.getElementById('category').value;

        alert(`Titre : ${title}\nContenu : ${content}\nCatégorie : ${category}`);
    });