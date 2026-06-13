import styles from './pricing-section.module.css';

type Feature = {
    i18n: string;
    label: string;
    muted?: boolean;
};

type Plan = {
    name: { i18n: string; label: string };
    price: string;
    perMonth: boolean;
    desc: { i18n: string; label: string };
    features: Feature[];
    cta: { i18n: string; label: string };
    highlight?: boolean;
    badge?: { i18n: string; label: string };
};

const plans: Plan[] = [
    {
        name: { i18n: 'price.p0n', label: 'Free' },
        price: '0€',
        perMonth: false,
        desc: { i18n: 'price.p0d', label: 'Touchez le produit et projetez-vous.' },
        features: [
            { i18n: 'price.p0f1', label: '1 client' },
            { i18n: 'price.p0f2', label: 'Connexion Asana' },
            { i18n: 'price.p0f3', label: 'Rédaction manuelle + envoi' },
            { i18n: 'price.p0f4', label: 'Génération IA', muted: true },
        ],
        cta: { i18n: 'price.p0cta', label: 'Commencer gratuitement' },
    },
    {
        name: { i18n: 'price.p1n', label: 'Starter' },
        price: '10€',
        perMonth: true,
        desc: { i18n: 'price.p1d', label: 'La génération IA, débloquée.' },
        features: [
            { i18n: 'price.p1f1', label: "Jusqu'à 3 clients" },
            { i18n: 'price.p1f2', label: 'Génération IA des updates' },
            { i18n: 'price.p1f3', label: 'Envoi programmé' },
            { i18n: 'price.p1f4', label: 'Branding complet' },
        ],
        cta: { i18n: 'price.cta', label: 'Rejoindre la waitlist' },
    },
    {
        name: { i18n: 'price.p2n', label: 'Pro' },
        price: '25€',
        perMonth: true,
        desc: { i18n: 'price.p2d', label: 'Pour une agence en croissance.' },
        features: [
            { i18n: 'price.p2f1', label: "Jusqu'à 15 clients" },
            { i18n: 'price.p2f2', label: 'Multi-utilisateurs' },
            { i18n: 'price.p2f3', label: 'Historique étendu' },
            { i18n: 'price.p2f4', label: 'Tout Starter inclus' },
        ],
        cta: { i18n: 'price.cta', label: 'Rejoindre la waitlist' },
        highlight: true,
        badge: { i18n: 'price.popular', label: 'POPULAIRE' },
    },
    {
        name: { i18n: 'price.p3n', label: 'Agency' },
        price: '100€',
        perMonth: true,
        desc: { i18n: 'price.p3d', label: 'Sans limite, pour les studios établis.' },
        features: [
            { i18n: 'price.p3f1', label: 'Clients illimités' },
            { i18n: 'price.p3f2', label: 'Multi-intégrations' },
            { i18n: 'price.p3f3', label: 'Rôles & permissions' },
            { i18n: 'price.p3f4', label: 'Support prioritaire' },
        ],
        cta: { i18n: 'price.cta', label: 'Rejoindre la waitlist' },
    },
];

const PricingSection = () => {
    return (
        <section id="tarifs" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <div data-i18n="price.kicker" className={styles.kicker}>
                        TARIFS
                    </div>
                    <h2 data-i18n="price.h2" className={styles.heading}>
                        Commencez gratuitement. Passez au pro quand la magie opère.
                    </h2>
                    <p data-i18n="price.sub" className={styles.subtitle}>
                        Testez le produit en réel avec le plan gratuit. La génération IA et
                        l'automatisation se débloquent dès Starter.
                    </p>
                </div>
                <div className={styles.grid}>
                    {plans.map((plan) => (
                        <div
                            key={plan.name.label}
                            className={plan.highlight ? `${styles.card} ${styles.cardHighlight}` : styles.card}
                        >
                            {plan.badge && (
                                <div data-i18n={plan.badge.i18n} className={styles.badge}>
                                    {plan.badge.label}
                                </div>
                            )}
                            <div data-i18n={plan.name.i18n} className={styles.planName}>
                                {plan.name.label}
                            </div>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>{plan.price}</span>
                                {plan.perMonth && (
                                    <span data-i18n="price.mo" className={styles.per}>
                                        /mois
                                    </span>
                                )}
                            </div>
                            <div data-i18n={plan.desc.i18n} className={styles.desc}>
                                {plan.desc.label}
                            </div>
                            <div className={styles.divider}></div>
                            <ul className={styles.features}>
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature.i18n}
                                        data-i18n={feature.i18n}
                                        className={feature.muted ? `${styles.feature} ${styles.featureMuted}` : styles.feature}
                                    >
                                        <span className={styles.check}>{feature.muted ? '—' : '✓'}</span>{' '}
                                        {feature.label}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#waitlist"
                                data-i18n={plan.cta.i18n}
                                className={plan.highlight ? `${styles.cta} ${styles.ctaFilled}` : styles.cta}
                            >
                                {plan.cta.label}
                            </a>
                        </div>
                    ))}
                </div>
                <p data-i18n="price.foot" className={styles.foot}>
                    Les paliers de clients seront affinés avec les agences pilotes. Le découpage
                    gratuit → payant se fait sur l'IA et l'automatisation.
                </p>
            </div>
        </section>
    );
};

export default PricingSection;
