import styles from './pricing-section.module.css';
import PlanCard, { type Plan } from '@/components/UI/Landing/PricingSection/PlanCard/PlanCard.tsx';

const PricingSection = () => {
    const plans: Plan[] = [
        {
            name: 'Free',
            price: '0€',
            perMonth: false,
            desc: 'Touchez le produit et projetez-vous.',
            features: [
                { label: '1 client' },
                { label: 'Connexion Asana' },
                { label: 'Rédaction manuelle + envoi' },
                { label: 'Génération IA', muted: true },
            ],
            cta: 'Commencer gratuitement',
        },
        {
            name: 'Starter',
            price: '10€',
            perMonth: true,
            desc: 'La génération IA, débloquée.',
            features: [
                { label: "Jusqu'à 3 clients" },
                { label: 'Génération IA des updates' },
                { label: 'Envoi programmé' },
                { label: 'Branding complet' },
            ],
            cta: 'Rejoindre la waitlist',
        },
        {
            name: 'Pro',
            price: '25€',
            perMonth: true,
            desc: 'Pour une agence en croissance.',
            features: [
                { label: "Jusqu'à 15 clients" },
                { label: 'Multi-utilisateurs' },
                { label: 'Historique étendu' },
                { label: 'Tout Starter inclus' },
            ],
            cta: 'Rejoindre la waitlist',
            highlight: true,
            badge: 'POPULAIRE',
        },
        {
            name: 'Agency',
            price: '100€',
            perMonth: true,
            desc: 'Sans limite, pour les studios établis.',
            features: [
                { label: 'Clients illimités' },
                { label: 'Multi-intégrations' },
                { label: 'Rôles & permissions' },
                { label: 'Support prioritaire' },
            ],
            cta: 'Rejoindre la waitlist',
        },
    ];

    return (
        <section id="tarifs" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <div className={styles.kicker}>
                        TARIFS
                    </div>
                    <h2 className={styles.heading}>
                        Commencez gratuitement. Passez au pro quand la magie opère.
                    </h2>
                    <p className={styles.subtitle}>
                        Testez le produit en réel avec le plan gratuit. La génération IA et
                        l'automatisation se débloquent dès Starter.
                    </p>
                </div>
                <div className={styles.grid}>
                    {plans.map((plan: Plan) => <PlanCard key={plan.name} plan={plan} />)}
                </div>
                <p className={styles.foot}>
                    Les paliers de clients seront affinés avec les agences pilotes. Le découpage
                    gratuit → payant se fait sur l'IA et l'automatisation.
                </p>
            </div>
        </section>
    );
};

export default PricingSection;
