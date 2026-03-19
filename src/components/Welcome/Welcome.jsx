import style from './Welcome.module.css';
// L'objet « style » contient le mapping qui conduit vers les nom css généré
// La valeur de style est { box: '_box_1l4ty_13', id-room: '_id-room_1l4ty_13' }

export default function Welcome({ name, salle = "4-IT-5" }) {
    // Le parametre "name" est destructuré des props du composants
    // - Cette syntaxe evite de devoir ecrire "props.<val>" tout le temps :D
    // - Il est également possible d'affecter une valeur par default 

    return (
        <div className={style['box']}>
            <p>Bienvenue {name} sur la demo des WAD25 !</p>
            <p>Nous sommes dans la salle <span className={style['id-room']}>{salle}</span> !</p>
        </div>
    );
}
