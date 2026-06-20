import { useTranslation } from 'react-i18next';
import styles from './waitlist-section.module.css';
import MailInput from '@/components/UI/Landing/MailInput/MailInput.tsx';

const WaitlistSection = () => {
    const { t } = useTranslation();

    return (
        <section id="waitlist" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.banner}>
                    <div className={styles.glow}></div>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>{t('landing.waitlist.heading')}</h2>
                        <p className={styles.subtitle}>{t('landing.waitlist.subtitle')}</p>
                        <div id="wl-final" className={styles.formWrap}>
                            <MailInput />
                            <p className={styles.micro}>{t('landing.micro')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaitlistSection;
