//list of Pokemon and their height, type(s), and abilities
let pokemonList = [
    { name: 'Pikachu', height: 2, type: ['blue', 'normal'] },
    { name: 'Bulbasaur', height: 4, type: ['red', 'fire'] },
    { name: 'Charizard', height: 6, type: ['orange', 'water'] }
];


//displays the list of Pokemon with descriptive text dependent on the Pokemon height.
for (let i = 0; i < pokemonList.length; i++) {

    if (pokemonList[i].height > 5) {

        document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + " <i> Wow, that's big!</i>" + "<br>" + "<br>");
    }
    else if (pokemonList[i].height < 5) {

        document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + " <span>This pokemon is small!</span>" + "<br>" + "<br>");
    }
}