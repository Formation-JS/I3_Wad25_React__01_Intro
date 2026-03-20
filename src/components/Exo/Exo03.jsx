import { useState } from "react"

export default function Exo03() {

    const [count, setCount] = useState(0);

    const handleIncr = () => {
        console.log('Avant', count);
        setCount(currentCount => currentCount + 1)
        console.log('Après', count);
        // → La valeur est dispo au prochain rendu !
    }

    const handleReset = () => {
        setCount(0);
        // → Pas besoin de la fonction, car on ne se base pas sur la valeur précedente !
    }

    console.log('Rendu', count);
    return (
        <>
            <p>Compteur : {count}</p>
            <div>
                <button onClick={handleIncr}>+ 1</button>
                {' '}
                {count !== 0 && (
                    <button onClick={handleReset}>Reset</button>
                )}
            </div>
        </>
    )
}