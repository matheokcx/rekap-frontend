import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <h3>
                        Rekap<span style={{ color: 'var(--primary)' }}>.</span>
                    </h3>
                    <span className={styles.tag}>— les updates client, sans la corvée.</span>
                </div>
                <div className={styles.copy}>© 2026 Rekap · Conçu pour les agences.</div>
            </div>
        </footer>
    );
};

export default Footer;
