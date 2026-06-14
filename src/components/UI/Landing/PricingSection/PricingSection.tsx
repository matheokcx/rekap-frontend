import { useTranslation } from 'react-i18next';
import styles from './pricing-section.module.css';
import PlanCard, { type Plan } from '@/components/UI/Landing/PricingSection/PlanCard/PlanCard.tsx';

const PricingSection = () => {
    const { t } = useTranslation();
    const plans = t('landing.pricing.plans', { returnObjects: true }) as Plan[];

    return (
        <section id="tarifs" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <div className={styles.kicker}>{t('landing.pricing.kicker')}</div>
                    <h2 className={styles.heading}>{t('landing.pricing.heading')}</h2>
                    <p className={styles.subtitle}>{t('landing.pricing.subtitle')}</p>
                </div>
                <div className={styles.grid}>
                    {plans.map((plan: Plan) => (
                        <PlanCard key={plan.name} plan={plan} />
                    ))}
                </div>
                <p className={styles.foot}>{t('landing.pricing.foot')}</p>
            </div>
        </section>
    );
};

export default PricingSection;
