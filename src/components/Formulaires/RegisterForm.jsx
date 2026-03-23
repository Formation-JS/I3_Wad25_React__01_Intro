import { useForm } from "react-hook-form";
import style from "./LoginForm.module.css";

export const RegisterForm = () => {
    // Pour pouvoir utiliser la librairie de React Hook Form il faudra penser à l'installer avec npm 😉

    // de useForm, on peut extraire plusieurs éléments pour gérer notre formulaire
    // ⚠️ Attention à ne pas faire de faute de frappe
    // - register : c'est ce qui va nous permettrer de relier un champs à une valeur qu'on pourra récupérer et mettre des validateurs
    // - handleSubmit : c'est la fonction à déclencher à la soumission du formulaire, qui va nous donner accès aux valeurs du formulaire et va déjà gérer le preventDefault
    // - reset : c'est une fonction qui va permettre de vider le formulaire
    // - formState : représente l'état du formulaire
    // - "formState : { errors }" pour ne récupérer que les erreurs du formulaire

    // useForm peut également avoir un paramètre. Il s'agit d'un objet de configuration où on peut renseigner plusieurs infos 
    // - values : sert à initialiser le formulaire
    // - mode : mode de déclenchement des erreurs (par défaut, onSubmit)

    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: 'onChange',
        values: {
            lastname: '',
            firstname: '',
            mail: '',
            username: '',
            password: ''
        }
    });

    const createAccount = (data) => {
        // data est un objet envoyé par handleSubmit qui contient toutes les infos de votre formulaire grâce au regiser
        console.log(data);
        // normalement c'est ici qu'on fait l'ajout via le backend et qu'on redirige vers une autre page
        alert("Votre compte a été créé avec succès");
        reset(); /* Remet à 0 le formulaire */

    }

    return (
        <div className={style.login}>
            {/* handleSumbit vient de React Hook Form et peut prendre 2 paramètres. Le premier c'est la fonction à exécuter si le formulaire est correctement rempli, la deuxième c'est la fonction à exécuter si le formulaire n'est pas correctement rempli */}
            <form className={style.form} onSubmit={handleSubmit(createAccount)} >

                <div className={style["form-group"]}>

                    <label htmlFor="lastname">Nom</label>
                    <input id="lastname"
                        type="text"
                        {...register('lastname',
                            { required: true, maxLength: 150 })} />
                    {
                        errors?.lastname?.type === 'required'
                        && <span>Ce champs est requis</span>
                    }
                    {
                        errors?.lastname?.type === 'maxLength'
                        && <span>Votre nom ne peut dépasser 150 caractères</span>
                    }

                </div>

                <div className={style["form-group"]}>

                    <label htmlFor="firstname">Prénom</label>
                    <input id="firstname"
                        type="text"
                        {...register('firstname',
                            { required: true, maxLength: 150 }
                        )} />

                    {
                        errors?.firstname?.type === 'required'
                        && <span>Ce champs est requis</span>
                    }

                    {
                        errors?.firstname?.type === 'maxLength'
                        && <span>Votre prénom ne peut dépasser 150 caractères</span>
                    }
                </div>

                <div className={style["form-group"]}>

                    <label htmlFor="mail">Email</label>
                    <input id="mail"
                        type="email"
                        {...register('mail',
                            {
                                required: true,
                                pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm
                            }
                        )} />
                    {
                        errors?.mail?.type === 'required' 
                        && <span>Ce champs est requis</span>
                    }
                    {
                        errors?.mail?.type === 'pattern'
                        && <span>Veuillez respecter le format des emails</span>
                    }

                </div>

                <div className={style["form-group"]}>

                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input id="username"
                        type="text"
                        {...register('username',
                            { required: true }
                        )} />

                    {
                        errors?.username?.type === 'required'
                        && <span>Ce champs est requis</span>
                    }

                </div>

                <div className={style["form-group"]}>

                    <label htmlFor="pwd">Mot de passe</label>
                    <input id="pwd"
                        type="password"
                        {...register('password',
                            {
                                required: true,
                                pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-_=+]).{8,}$/g
                            }
                        )} />

                    {
                        errors?.password?.type === 'required'
                        && <span>Ce champs est requis</span>
                    }
                    {
                        errors?.password?.type === 'pattern'
                        && <span>Votre mot de passe doit faire au moins 8 caractères dont une minuscule, une majuscule, un chiffre et un caractère spécial</span>
                    }

                </div>

                <button type="submit">Créer mon compte</button>


            </form>
        </div>
    )
}