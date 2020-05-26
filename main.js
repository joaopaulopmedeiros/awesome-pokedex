const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon'
    fetch(url)
        .then(response => response.json())
        .then(pokemon => console.log(pokemon))
}

fetchPokemon()