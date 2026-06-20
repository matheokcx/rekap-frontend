import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import styles from './footer.module.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <span className={styles.brandName}>
                        Rekap<span style={{ color: 'var(--primary)' }}>.</span>
                    </span>
                    <span className={styles.tag}>{t('landing.footer.tag')}</span>
                </div>
                <nav className={styles.legal} aria-label="Liens légaux">
                    <Link to="/mentions-legales" className={styles.legalLink}>
                        Mentions légales
                    </Link>
                    <Link to="/politique-de-confidentialite" className={styles.legalLink}>
                        Confidentialité
                    </Link>
                    <Link to="/politique-cookies" className={styles.legalLink}>
                        Cookies
                    </Link>
                    <Link to="/cgv" className={styles.legalLink}>
                        CGV
                    </Link>
                    <Link to="/cgu" className={styles.legalLink}>
                        CGU
                    </Link>
                </nav>
                <div className={styles.copy}>{t('landing.footer.copy')}</div>
            </div>
        </footer>
    );
};

export default Footer;
