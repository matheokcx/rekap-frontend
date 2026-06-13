import styles from './waitlist-section.module.css';
import MailInput from '@/components/UI/Landing/MailInput.tsx';

const WaitlistSection = () => {
    return (
        <section id="waitlist" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.banner}>
                    <div className={styles.glow}></div>
                    <div className={styles.content}>
                        <h2 data-i18n="cta.h2" className={styles.heading}>
                            Soyez parmi les premières agences à essayer Rekap.
                        </h2>
                        <p data-i18n="cta.sub" className={styles.subtitle}>
                            On ouvre les accès aux agences pilotes par vagues. Laissez votre email
                            pro — vous serez prévenu en premier, et vous façonnerez le produit avec
                            nous.
                        </p>
                        <div id="wl-final" className={styles.formWrap}>
                            <MailInput />
                            <p data-i18n="hero.micro" className={styles.micro}>
                                Accès anticipé · FR &amp; EN · Sans carte bancaire
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaitlistSection;
