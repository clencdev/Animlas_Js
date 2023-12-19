//creation des entités

let chien = new Animal("chien", "un animmal sur 4 pattes", "terrestre","https://m.media-amazon.com/images/I/71i2W4C2eYL._AC_SX425_.jpg" );
let chat = new Animal("chat", "petit felin", "terrestre","https://www.larousse.fr/encyclopedie/data/images/1310591-Chat_American_shorthair.jpg" );
let oiseau = new Animal("oiseau", "animal volant", "volant", "https://www.lesitedesanimaux.com/wp-content/uploads/2023/09/oiseau-mouche-colibri-difference.jpg");
let loup = new Animal("loup", "un animmal sur 4 pattes sauvage", "terrestre", "https://bocdn.ecotree.green/blog/0001/02/47b656453f6be8c384bbf07abf3613d1e4a3fa0d.jpeg?d=960x540" );
let poisson = new Animal("poisson", "un animmal aquatique", "aquatique", "https://www.fishipedia.fr/wp-content/uploads/2022/02/pomacanthus_annularis_220203_125026.jpg" );
let requin = new Animal("requin", "animal carnivore aquatique", "aquatique", "https://www.humanite.fr/wp-content/uploads/2023/11/science.jpg");
let renard = new Animal("renard", "petit animmal sur 4 pattes", "terrestre", "http://www.jardinsdenoe.org/wp-content/uploads/2019/10/BIOS-1209213-1024x683.jpg" );

let animaux = [chien, chat, oiseau, loup, poisson, requin, renard];

console.log(animaux);

function initialiserDonnees() {
    if (localStorage.getItem('animaux')) {
        animaux = JSON.parse(localStorage.getItem('animaux'));
    } else {
        
        localStorage.setItem('animaux', JSON.stringify(animaux));
    }
}

function displayAnimals(filter = null) {
    
    let container = document.querySelector('#animals');

    
    container.innerHTML ='';


    //Creation des éléments html des animaux
    animaux.forEach(animal => {

        if (!filter || animal.categorie === filter || filter === 'tous') {

        let animalDiv = document.createElement('div');
        animalDiv.classList.add('animal');

        let nom = document.createElement('h2');
        nom.textContent = animal.nom;
        animalDiv.appendChild(nom);

        let description = document.createElement('p');
        description.textContent = animal.description;
        animalDiv.appendChild(description);

        let categorie = document.createElement('p');
        categorie.textContent = `Catégorie : ${animal.categorie}`;
        animalDiv.appendChild(categorie);

        let image = document.createElement('img');
        image.src = animal.images;
        image.alt = `Image de ${animal.nom}`;
        animalDiv.appendChild(image);

        container.appendChild(animalDiv);
        }

    })
}

document.querySelector('#filterForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    let selectedCategory = document.querySelector('#categorySelect').value;
    displayAnimals(selectedCategory);
});

document.querySelector('#addAnimalForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs du formulaire
    let nom = document.querySelector('#nom').value;
    let description = document.querySelector('#description').value;
    let categorie = document.querySelector('#categorie').value;
    let image = document.querySelector('#image').value;

    // Création de la nouvelle instance d'Animal
    let nouvelAnimal = new Animal(nom, description, categorie, image);

    // Ajout du nouvel animal au tableau et mise à jour de l'affichage
    animaux.push(nouvelAnimal);

    localStorage.setItem('animaux', JSON.stringify(animaux));
    displayAnimals();
});

displayAnimals()