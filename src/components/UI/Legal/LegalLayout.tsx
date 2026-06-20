import type { ReactNode } from 'react';
import { Link } from 'react-router';
import Footer from '@/components/UI/Landing/Footer/Footer.tsx';
import styles from './legal-layout.module.css';

type LegalLayoutProps = {
    title: string;
    children: ReactNode;
    lastUpdated?: string;
};

const LegalLayout = ({ title, lastUpdated, children }: LegalLayoutProps) => {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <Link to="/" className={styles.brand}>
                        Rekap<span style={{ color: 'var(--primary)' }}>.</span>
                    </Link>
                    <Link to="/" className={styles.back}>
                        ← Retour à l'accueil
                    </Link>
                </div>
            </header>
            <main className={styles.main}>
                <article className={styles.prose}>
                    <h1>{title}</h1>
                    {lastUpdated && (
                        <p className={styles.updated}>Dernière mise à jour : {lastUpdated}</p>
                    )}
                    {children}
                </article>
            </main>
            <Footer />
        </div>
    );
};

export default LegalLayout;
