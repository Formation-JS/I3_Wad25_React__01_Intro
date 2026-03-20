import style from './Exo02.module.css';

export default function Exo02({ products }) {

    return (
        <section>
            <h3>Liste des produits ({products.length}) : </h3>
            <div className={style['product-list']}>
                {products.map(
                    product => <ProductItem key={product.id} {...product} />
                )}
            </div>
        </section>
    )
}

function ProductItem({ name, description, price, promo }) {
    const priceFormatted = price.toLocaleString('fr-be', {
        style: 'currency',
        currency: 'EUR'
    })

    return (
        <article className={style['product']}>
            <p>{name}</p>
            {description && (
                <p>{description}</p>
            )}
            <p className={promo ? style['promo'] : ''}>
                {priceFormatted} {promo && '(En promo)'}
            </p>
        </article>
    );
}