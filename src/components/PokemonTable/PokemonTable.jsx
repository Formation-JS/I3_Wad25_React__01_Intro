import style from './PokemonTable.module.css';

export default function PokemonTable({ pokemons }) {

    return (
        <table className={style['poke-table']}>
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
            <td className={style['poke-id']} style={{ color: main_color }}>{id}</td>
            <td>{name}</td>
            <td>{types.join(', ')}</td>
            <td>
                <img src={image_url} alt={`Image du pokemon ${name}`} className={style['poke-img']} />
            </td>
        </tr>
    )
}

