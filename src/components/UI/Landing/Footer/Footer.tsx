import { useTranslation } from 'react-i18next';
import styles from './footer.module.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <h3>
                        Rekap<span style={{ color: 'var(--primary)' }}>.</span>
                    </h3>
                    <span className={styles.tag}>{t('landing.footer.tag')}</span>
                </div>
                <div className={styles.copy}>{t('landing.footer.copy')}</div>
            </div>
        </footer>
    );
};

export default Footer;
