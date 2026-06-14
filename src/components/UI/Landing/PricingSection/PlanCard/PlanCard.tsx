import { useTranslation } from 'react-i18next';
import styles from './plan-card.module.css';

export type Feature = {
    label: string;
    muted?: boolean;
};

export type Plan = {
    name: string;
    price: string;
    perMonth: boolean;
    desc: string;
    features: Feature[];
    cta: string;
    highlight?: boolean;
    badge?: string;
};

type PlanCardProps = {
    plan: Plan;
};

const PlanCard = ({ plan }: PlanCardProps) => {
    const { t } = useTranslation();

    return (
        <div
            key={plan.name}
            className={plan.highlight ? `${styles.card} ${styles.cardHighlight}` : styles.card}
        >
            {plan.badge && <div className={styles.badge}>{plan.badge}</div>}
            <div className={styles.planName}>{plan.name}</div>
            <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                {plan.perMonth && (
                    <span className={styles.per}>{t('landing.pricing.perMonth')}</span>
                )}
            </div>
            <div className={styles.desc}>{plan.desc}</div>
            <div className={styles.divider}></div>
            <ul className={styles.features}>
                {plan.features.map((feature) => (
                    <li
                        key={feature.label}
                        className={
                            feature.muted
                                ? `${styles.feature} ${styles.featureMuted}`
                                : styles.feature
                        }
                    >
                        <span className={styles.check}>{feature.muted ? '—' : '✓'}</span>{' '}
                        {feature.label}
                    </li>
                ))}
            </ul>
            <a
                href="#waitlist"
                className={plan.highlight ? `${styles.cta} ${styles.ctaFilled}` : styles.cta}
            >
                {plan.cta}
            </a>
        </div>
    );
};

export default PlanCard;
