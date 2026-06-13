import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <header className={styles.headerSection}>
            <div className={styles.headerContent}>
                <a href="#" className={styles.brand}>
                    <h3>
                        Rekap<span style={{ color: 'var(--primary)' }}>.</span>
                    </h3>
                </a>
                <nav className={styles.nav}>
                    <a href="#probleme" data-i18n="nav.problem" className={styles.navLink}>
                        Le problème
                    </a>
                    <a href="#process" data-i18n="nav.how" className={styles.navLink}>
                        Comment ça marche
                    </a>
                    <a href="#tarifs" data-i18n="nav.pricing" className={styles.navLink}>
                        Tarifs
                    </a>
                </nav>
                <div className={styles.actions}>
                    <div className={styles.langSwitch}>
                        <button
                            id="lang-fr"
                            className={`${styles.langButton} ${styles.langButtonActive}`}
                        >
                            FR
                        </button>
                        <button id="lang-en" className={styles.langButton}>
                            EN
                        </button>
                    </div>
                    <a href="#waitlist" data-i18n="nav.cta" className={styles.cta}>
                        Rejoindre la waitlist
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
