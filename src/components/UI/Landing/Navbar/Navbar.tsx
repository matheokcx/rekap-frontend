import { useTranslation } from 'react-i18next';
import styles from './navbar.module.css';
import { useTheme } from '@/hooks/useTheme.tsx';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const { theme, handleThemeChange } = useTheme();
    const currentLanguage = i18n.resolvedLanguage ?? i18n.language;

    const changeLanguage = (language: string) => {
        void i18n.changeLanguage(language);
    };

    return (
        <header className={styles.headerSection}>
            <div className={styles.headerContent}>
                <a href="#" className={styles.brand} aria-label="Rekap">
                    <span className={styles.brandName}>
                        Rekap<span style={{ color: 'var(--primary)' }}>.</span>
                    </span>
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
                    <button
                        type="button"
                        onClick={handleThemeChange}
                        className={styles.themeToggle}
                        aria-label={t(theme === 'light' ? 'dark' : 'light')}
                        title={t(theme === 'light' ? 'dark' : 'light')}
                    >
                        {theme === 'light' ? (
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                            </svg>
                        ) : (
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                            </svg>
                        )}
                    </button>
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
