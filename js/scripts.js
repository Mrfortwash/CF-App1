// list of Pokemon and their height, type(s), and abilities
// let pokemonList = [
//     { name: 'Pikachu', height: 2, type: ['blue', 'normal'] },
//     { name: 'Bulbasaur', height: 4, type: ['red', 'fire'] },
//     { name: 'Charizard', height: 6, type: ['orange', 'water'] }
// ];

//displays the list of Pokemon with descriptive text dependent on the Pokemon height.

// for (let i = 0; i < pokemonList.length; i++) {

//     if (pokemonList[i].height > 5) {

//         document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + " <i> Wow, that's big!</i>" + "<br>" + "<br>");
//     }
//     else if (pokemonList[i].height < 5) {

//         document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + " <span>This pokemon is small!</span>" + "<br>" + "<br>");
//     }

// let myArray = ['1', '2', '3', '4', '5', '6'];
// for (let i = 0; i < myarray.length; i++);
// console.log(myarray)

// myArray.forEach(function (item) {
//     console.log(item)
// }); 
let pokemonRepository = (function () {
    let pokemonList = [{ name: 'Pikachu', height: 2, type: ['blue', 'normal'] },
    { name: 'Bulbasaur', height: 4, type: ['red', 'fire'] }, '</p>',
    { name: 'Charizard', height: 6, type: ['orange', 'water'] }]

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();


console.log(pokemonRepository.getAll());

pokemonRepository.add({ name: 'Kricketune', height: 1, types: ['bug', 'flying'], });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    if (pokemon.height > 5) {
        document.write('<p>' + pokemon.name, '(height: ' + pokemon.height + ')-Wow!-that\'s big</p>');
    } else {
        document.write('<p>' + pokemon.name, '(height: ' + pokemon.height + ')</p>');
    }
});

