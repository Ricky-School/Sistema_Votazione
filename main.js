class Project{

    #titolo;
    #voti;

    constructor(titolo) {
        this.#titolo = titolo;
        this.#voti = 0;
    }

    vota() {
        this.#voti += 1;
        aggiornaLista();
    }

    getVoti() {
        return this.#voti;
    }
    getTitolo() {
        return this.#titolo;
    }
}

var progetti = [
    new Project("Progetto A"),
    new Project("Progetto B"),
    new Project("Progetto C")
];

function aggiornaLista() {
    var listElement = document.getElementById("lista_progetti");
    listElement.innerHTML = "";

    progetti.sort(function(a, b) {
        return b.getVoti() - a.getVoti();
    });

    for(var i = 0; i < progetti.length; i++){
        var project = progetti[i];
        var listItem = document.createElement("ol");
        var voteButton = document.createElement("button");
        
        voteButton.textContent = "Vota";
        listItem.textContent = project.getTitolo() + " - Voti: " + project.getVoti();
        
        listElement.appendChild(listItem);

        (function(project) {
            voteButton.addEventListener("click", function() {
                project.vota();
            });
        })(project);

        listItem.appendChild(voteButton);
    }
}

window.addEventListener("load", aggiornaLista);