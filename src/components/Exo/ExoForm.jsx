import style from './ExoForm.module.css';

export const ExoForm = () => {


    return (
        <div className={style.split}>
            <div className={style.form}>
                <form action="">
                    <div className={style.group}>

                        <label htmlFor="amount">Note</label>

                        <input id="amount" type="number" placeholder='145.8' />

                        <span className={style.symbol}>€</span>

                        <span className={style.error}>Ce champs est requis</span>

                    </div>

                    <div className={style.group}>

                        <label htmlFor="tips">Pourboire</label>
                        <select id="tips" required="true" >
                            <option value="" hidden>5</option>
                            <option value="0">0</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>

                        </select>

                        <span className={style.symbol}>%</span>
                    </div>

                    <div className={style.group}>
                        <label htmlFor="nbpers">Personnes</label>

                        <input id="nbpers" type="number" placeholder='3' />

                        <span className={style.symbol}>👩🏻‍👩🏼‍👧🏻</span>
                    </div>

                    <button>Calculer</button>
                </form>
            </div>

            <div className={style.result}>
                <div>
                    <p>Montant pourboire</p>
                    <p>00.00 €</p>
                </div>

                <div>
                    <p>Montant total</p>
                    <p>00.00 €</p>
                </div>

                <div>
                    <p className={style.totalpp} >Montant à payer <span>/ personne</span>
                    </p>
                    <p>00.00 €</p>
                </div>

                <button>Réinitialiser</button>
            </div>
        </div>
    )
}