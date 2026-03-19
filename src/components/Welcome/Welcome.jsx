
export default function Welcome({ name, salle = "4-IT-5" }) {
    // Le parametre "name" est destructuré des props du composants
    // - Cette syntaxe evite de devoir ecrire "props.<val>" tout le temps :D
    // - Il est également possible d'affecter une valeur par default 

    return (
        <>
            <p>Bienvenue {name} sur la demo des WAD25 !</p>
            <p>Nous sommes dans la salle {salle} !</p>
        </>
    );
}