
export default function PokemonTable({ pokemons }) {

    return (
        <table>
            <PokemonTableHeader />
            <tbody>
                {pokemons.map(
                    pokemon => <PokemonTableRow key={pokemon.id} {...pokemon} />
                )}
            </tbody>
        </table>
    )
}

function PokemonTableHeader() {
    return (
        <thead>
            <tr>
                <th>Pokedex Id</th>
                <th>Nom</th>
                <th>Types</th>
                <th>Image</th>
            </tr>
        </thead>
    )
}

function PokemonTableRow({ id, name, types, main_color, image_url }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{types.join(', ')}</td>
            <td>
                <img src={image_url} alt={`Image du pokemon ${name}`} />
            </td>
        </tr>
    )
}

