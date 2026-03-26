import { useState } from 'react';
import style from './ExoForm.module.css';
import { useForm } from 'react-hook-form';

export const ExoForm = () => {

    // state pour les résultats des calculs
    const [results, setResults] = useState({
        tipsAmount: 0,
        amount: 0,
        amountPerson: 0
    });

    // utilisation de la hook useForm pour la gestion du formulaire
    const { register, handleSubmit, reset, formState: { errors }, resetField } = useForm({
        mode: 'onChange',
        resetOptions: { keepFieldsRef: true, keepIsSubmitted: false },
        // TODO : trouver pourquoi le 2ème reset mets plus à jour visuellement
        /* 👆🏻 à priori nouveau depuis version 7.75 pour garder la ref entre nos valeurs register et notre form */
        defaultValues: {
            amount: null,
            tips: null,
            nb: null
        }
    })

    const calculate = (data) => {
        console.log(data);

        const { amount, tips, nb } = data;

        const totalTips = amount * tips / 100;
        const total = amount + totalTips;
        const totalPP = total / nb;

        setResults({
            amount: total,
            tipsAmount: totalTips,
            amountPerson: totalPP
        });

    }

    const megaReset = () => {
        // reset le formulaire

        // reset les résultats
        setResults({
            tipsAmount: 0,
            amount: 0,
            amountPerson: 0
        })

        reset();

        // ! Fix temporaire pour réinitialiser les valeurs du formulaire :
        resetField('amount', { defaultValue : null });
        resetField('tips', { defaultValue : null });
        resetField('nb', { defaultValue : null });
    }


    return (
        <div className={style.split}>
            <div className={style.form}>

                {/* ---- FORMULAIRE ---- */}
                <form onSubmit={handleSubmit(calculate)}>
                    <div className={style.group}>

                        <label htmlFor="amount">Note</label>

                        <input id="amount" type="number" placeholder='145.8' step="0.01" {...register('amount', { required: true, min: 1, valueAsNumber: true })} />

                        <span className={style.symbol}>€</span>

                        {
                            errors?.amount?.type == 'required' &&
                            <span className={style.error}>Ce champs est requis</span>
                        }

                        {
                            errors?.amount?.type == 'min' &&
                            <span className={style.error}>La note doit faire au moins 1€</span>
                        }
                    </div>

                    <div className={style.group}>

                        <label htmlFor="tips">Pourboire</label>

                        <select id="tips" required {...register('tips', { required: true, valueAsNumber: true })} >
                            <option value="" hidden>5</option>
                            <option value="0">0</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>

                        </select>

                        <span className={style.symbol}>%</span>

                        {
                            errors?.tips?.type == 'required' &&
                            <span className={style.error}>Ce champs est requis</span>
                        }

                    </div>

                    <div className={style.group}>
                        <label htmlFor="nbpers">Personnes</label>

                        <input id="nbpers" type="number" placeholder='3' {...register('nb', { required: true, min: 1, valueAsNumber: true })} />

                        <span className={style.symbol}>👩🏻‍👩🏼‍👧🏻</span>

                         {
                            errors?.nb?.type == 'required' &&
                            <span className={style.error}>Ce champs est requis</span>
                        }

                        {
                            errors?.nb?.type == 'min' &&
                            <span className={style.error}>Vous devez être au moins 1 personne</span>
                        }
                    </div>

                    <button type="submit">Calculer</button>
                </form>
            </div>

            <div className={style.result}>

                {/* ---- RESULTATS ---- */}
                <div>
                    <p>Montant pourboire</p>
                    <p>{results.tipsAmount.toFixed(2)} €</p>
                </div>

                <div>
                    <p>Montant total</p>
                    <p>{results.amount.toFixed(2)} €</p>
                </div>

                <div>
                    <p className={style.totalpp} >Montant à payer <span>/ personne</span>
                    </p>
                    <p>{results.amountPerson.toFixed(2)} €</p>
                </div>

                <button onClick={megaReset}>Réinitialiser</button>
            </div>
        </div>
    )
}