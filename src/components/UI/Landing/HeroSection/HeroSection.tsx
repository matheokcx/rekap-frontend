import styles from './hero-section.module.css';
import MailInput from '@/components/UI/Landing/MailInput.tsx';

const HeroSection = () => {
    return (
        <section id="hero-d" className={styles.hero}>
            <div className={styles.inner}>
                <div>
                    <h1 className={styles.title}>
                        Des comptes-rendus client pros, en 2&nbsp;min par semaine.
                    </h1>
                    <p className={styles.subtitle}>
                        Rekap transforme le travail que vous suivez déjà en updates clairs, orientés
                        résultat et à votre image. Vos clients perçoivent la valeur livrée, vous
                        gagnez en fidélisation — et des heures chaque semaine.
                    </p>
                    <div id="wl-d" className={styles.waitlist}>
                        <MailInput />
                        <p className={styles.micro}>
                            Accès anticipé · FR &amp; EN · Sans carte bancaire
                        </p>
                    </div>
                </div>
                <div className={styles.visual}>
                    <div className={styles.taskCard}>
                        <div className={styles.taskHeader}>
                            <span className={styles.taskHeaderLogo}>a</span>
                            <span className={styles.taskHeaderLabel}>
                                ASANA · <span>TÂCHES TERMINÉES</span>
                            </span>
                        </div>
                        <div className={styles.taskList}>
                            <div className={styles.taskItem}>
                                <span className={styles.taskCheck}>✓</span> update meta descriptions
                                (8)
                            </div>
                            <div className={styles.taskItem}>
                                <span className={styles.taskCheck}>✓</span> publish blog posts ×3
                            </div>
                            <div className={styles.taskItem}>
                                <span className={styles.taskCheck}>✓</span> fix internal links /
                                sitemap
                            </div>
                        </div>
                    </div>
                    <div className={styles.pillRow}>
                        <div className={styles.pill}>
                            <span className={styles.pillIcon}>✦</span>{' '}
                            <span>Rekap traduit en valeur business</span>
                        </div>
                    </div>
                    <div className={styles.impactCard}>
                        <div className={styles.impactHeader}>
                            <span className={styles.impactLogo}>R</span>
                            <span className={styles.impactLabel}>IMPACT BUSINESS</span>
                        </div>
                        <p className={styles.impactText}>
                            « Nous avons optimisé 8 pages clés pour la recherche et publié 3
                            contenus sur vos mots-clés prioritaires. Premiers signaux positifs :
                            votre trafic organique progresse de 14% ce mois-ci. »
                        </p>
                    </div>
                    <div className={styles.captionRow}>
                        <span className={styles.captionDot}></span>
                        <span className={styles.caption}>
                            Brouillon prêt en 9 secondes — vous relisez et envoyez en un clic.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
