import { useTranslation } from 'react-i18next';
import styles from './process-section.module.css';
import ProcessStepCard from '@/components/UI/Landing/ProcessSection/ProcessStepCard/ProcessStepCard.tsx';

type StepData = {
    title: string;
    text: string;
};

const ProcessSection = () => {
    const { t } = useTranslation();
    const steps = t('landing.process.steps', { returnObjects: true }) as StepData[];

    return (
        <section id="process" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <div className={styles.kicker}>{t('landing.process.kicker')}</div>
                    <h2 className={styles.heading}>{t('landing.process.heading')}</h2>
                    <p className={styles.subtitle}>{t('landing.process.subtitle')}</p>
                </div>
                <div className={styles.grid}>
                    {steps.map((step, index: number) => (
                        <ProcessStepCard
                            key={index}
                            title={step.title}
                            text={step.text}
                            position={index + 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
