import { useTranslation } from 'react-i18next';
import styles from './navbar.module.css';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

    const changeLanguage = (language: string) => {
        void i18n.changeLanguage(language);
    };

    return (
        <header className={styles.headerSection}>
            <div className={styles.headerContent}>
                <a href="#" className={styles.brand}>
                    <h1>
                        Rekap<span style={{ color: 'var(--primary)' }}>.</span>
                    </h1>
                </a>
                <nav className={styles.nav}>
                    <a href="#probleme" className={styles.navLink}>
                        {t('landing.nav.problem')}
                    </a>
                    <a href="#process" className={styles.navLink}>
                        {t('landing.nav.process')}
                    </a>
                    <a href="#tarifs" className={styles.navLink}>
                        {t('landing.nav.pricing')}
                    </a>
                </nav>
                <div className={styles.actions}>
                    <div className={styles.langSwitch}>
                        <button
                            type="button"
                            onClick={() => changeLanguage('fr')}
                            className={`${styles.langButton} ${
                                currentLanguage === 'fr' ? styles.langButtonActive : ''
                            }`}
                        >
                            FR
                        </button>
                        <button
                            type="button"
                            onClick={() => changeLanguage('en')}
                            className={`${styles.langButton} ${
                                currentLanguage === 'en' ? styles.langButtonActive : ''
                            }`}
                        >
                            EN
                        </button>
                    </div>
                    <a href="#waitlist" className={styles.cta}>
                        {t('landing.joinWaitlist')}
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
