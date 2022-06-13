let pokemonRepository = (function () {
    //current repository of Pokemon with name, height, type, and abilities
    let pokemonList = [


    ];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    //function to add new Pokemon and its details to the repository
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("Pokemon is incorrect");
        }
    }

    function getAll() {
        return pokemonList;
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
        button.classList.add('buttonpoke')
        button.innerText = pokemon.name;
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
        function loadList() {
            return fetch(apiUrl).then(function (response) {
                return response.json();
            }).then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                });
            }).catch(function (e) {
                console.error(e);
            })
        }

    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList
    };
})();

pokemonRepository.add({ name: "Pikachu", height: 0.3, type: ["electric"] });

// console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
