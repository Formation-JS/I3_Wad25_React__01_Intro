import { useState } from "react";
import style from "./LoginForm.module.css";


//function LoginForm() {}

// autre façon d'écrire les composants : dans des fonctions fléchées
export const LoginForm = () => {
    // On utilise la hook useState pour créer une variable d'état qui s'appelle username et une fonction setUserName qui permettra de la modifier
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(); /* valeur par défaut si pas fournie : undefined */

    const changeValueUserName = (event) => {
        // console.log(event);
        // event est un objet qui contient toutes les infos sur l'évènement onChange qui vient d'être déclenché
        // On souhaite récupérer la valeur tapée dans l'input, elle se trouve dans event.target.value
        console.log(event.target.value);

        // On va appeler la fonction qui permet de modifier le state pour le userName
        setUserName(event.target.value);
        setSuccess();         
    }

    const handleSubmit = (event) => {
        event.preventDefault(); /* annule le comportement par défaut d'un event, ici, annule le fait que le submit recharge la page */

        // ⚠️ On va faire une vérification à l'arrache mais normalement on fait une requête à notre back
        if(username === 'AurélienS' && password === 'jaimepicsou'){
            setSuccess(true);
            setUserName("");
            setPassword("");
        }
        else {
            setSuccess(false);
        }
    }
    
    return (
        <div className={style.login}>
            <form className={style.form} onSubmit={handleSubmit}>

                <div className={style["form-group"]}>
                    <label htmlFor="username">Nom utilisateur</label>
                    <input id="username" type="text" value={username} onChange={changeValueUserName} />
                </div>

                <div className={style["form-group"]}>
                    <label htmlFor="pwd">Mot de passe</label>
                    <input id="pwd" type="password" 
                        value={password} 
                        onChange={ (event) => { setPassword(event.target.value); setSuccess(); } }/>
                </div>

                <button type="submit">Se connecter</button>
                {
                    (success ? 
                        <span className={style.success}>Bonjour Aurélien, Picsou est heureux de vous voir.</span>
                        :
                        (success === false) ?
                            <span className={style.fail}>Vos informations de connexion sont éronnées</span>
                        : 
                        ""
                    ) 
                }
            </form>
        </div>
    )
}


