import { useTranslation } from 'react-i18next';
import styles from './hero-section.module.css';
import MailInput from '@/components/UI/Landing/MailInput/MailInput.tsx';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section id="hero-d" className={styles.hero}>
            <div className={styles.inner}>
                <div>
                    <h1 className={styles.title}>{t('landing.hero.title')}</h1>
                    <p className={styles.subtitle}>{t('landing.hero.subtitle')}</p>
                    <div id="wl-d" className={styles.waitlist}>
                        <MailInput />
                        <p className={styles.micro}>{t('landing.micro')}</p>
                        <p className={styles.trust}>{t('landing.hero.trust')}</p>
                    </div>
                </div>
                <div className={styles.visual}>
                    <div className={styles.taskCard}>
                        <div className={styles.taskHeader}>
                            <span className={styles.taskHeaderLogo}>a</span>
                            <span className={styles.taskHeaderLabel}>
                                ASANA · <span>{t('landing.hero.tasksDone')}</span>
                            </span>
                        </div>
                        <div className={styles.taskList}>
                            <div className={styles.taskItem}>
                                <span className={styles.taskCheck}>✓</span>{' '}
                                {t('landing.hero.task1')}
                            </div>
                            <div className={styles.taskItem}>
                                <span className={styles.taskCheck}>✓</span>{' '}
                                {t('landing.hero.task2')}
                            </div>
                            <div className={styles.taskItem}>
                                <span className={styles.taskCheck}>✓</span>{' '}
                                {t('landing.hero.task3')}
                            </div>
                        </div>
                    </div>
                    <div className={styles.pillRow}>
                        <div className={styles.pill}>
                            <span className={styles.pillIcon}>✦</span>{' '}
                            <span>{t('landing.hero.pill')}</span>
                        </div>
                    </div>
                    <div className={styles.impactCard}>
                        <div className={styles.impactHeader}>
                            <span className={styles.impactLogo}>R</span>
                            <span className={styles.impactLabel}>
                                {t('landing.hero.impactLabel')}
                            </span>
                        </div>
                        <p className={styles.impactText}>{t('landing.hero.impactText')}</p>
                    </div>
                    <div className={styles.captionRow}>
                        <span className={styles.captionDot}></span>
                        <span className={styles.caption}>{t('landing.hero.caption')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
