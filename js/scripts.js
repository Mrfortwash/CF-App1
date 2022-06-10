let pokemonRepository = (function () {
    //current repository of Pokemon with name, height, type, and abilities
    let repository = [

        { name: 'Pikachu', height: 2, type: ['blue', 'normal'] },
        { name: 'Bulbasaur', height: 4, type: ['red', 'fire'] },
        {
            name: 'Charizard', height: 6, type: ['orange', 'water']
        }
    ];

    //function to add new Pokemon and its details to the repository
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "height" in pokemon &&
            "type" in pokemon &&
            "abilities" in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log("Pokemon is incorrect");
        }
    }

    function getAll() {
        return repository;
    }

    //Shows Pokemon name in console
    function showDetails(pokemon) {
        console.log(pokemon.name);
    };

    //function to display list of Pokemon as buttons
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.classList.add('.buttonpoke')
        button.innerText = pokemon.name;
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });

    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
    };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, type: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});