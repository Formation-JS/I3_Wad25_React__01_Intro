
export default function Exo01({ value }) {

    if(value === 0) {
        return (
            <p>Le nombre est zéro!</p>
        );
    }

    const msg = (value % 2 === 0) ? 'pair' : 'impair';
    return (
        <p>Le nombre {value} est {msg}.</p>
    );
}