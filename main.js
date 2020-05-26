const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
    
    const pokemonPromises = []

    for(let i = 1; i <= 8; i++){
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json()))
    }
    Promise.all(pokemonPromises).then(pokemons => {
        const listOfPokemons = pokemons.reduce((accumulator, pokemon) => {
            
            const types = pokemon.types.map(typeInfo => typeInfo.type.name).join('|')

            return accumulator += 
                `<li class="card">
                    <img class="card-image ${types[0]} alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"/>
                    <h2 class="card-title"> ${pokemon.id}. ${pokemon.name}</h2>
                    <p class="card-subtitle"> ${types} </p>
                </li>`        
            }, '')
        
        const ul = document.querySelector('[data-js="pokedex"')

        ul.innerHTML = listOfPokemons
        
    })
}

fetchPokemon()