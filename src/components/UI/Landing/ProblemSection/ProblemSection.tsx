import { useTranslation } from 'react-i18next';
import styles from './problem-section.module.css';
import ProblemCard from '@/components/UI/Landing/ProblemSection/ProblemCard/ProblemCard.tsx';

type ProblemData = {
    icon: string;
    title: string;
    description: string;
    dark?: boolean;
};

const ProblemSection = () => {
    const { t } = useTranslation();
    const problems = t('landing.problem.cards', { returnObjects: true }) as ProblemData[];

    return (
        <section id="probleme" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <div className={styles.kicker}>{t('landing.problem.kicker')}</div>
                    <h2 className={styles.heading}>{t('landing.problem.heading')}</h2>
                    <p className={styles.subtitle}>
                        {t('landing.problem.subtitleP1')}
                        <strong>{t('landing.problem.subtitleStrong')}</strong>
                        {t('landing.problem.subtitleP2')}
                    </p>
                </div>
                <div className={styles.grid}>
                    {problems.map((problem) => (
                        <ProblemCard
                            key={problem.title}
                            title={problem.title}
                            description={problem.description}
                            icon={problem.icon}
                            dark={problem.dark}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
