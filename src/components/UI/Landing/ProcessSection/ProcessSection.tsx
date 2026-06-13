import styles from './process-section.module.css';

const ProcessSection = () => {
    return (
        <section id="process" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <div data-i18n="how.kicker" className={styles.kicker}>
                        COMMENT ÇA MARCHE
                    </div>
                    <h2 data-i18n="how.h2" className={styles.heading}>
                        De vos tâches à un update envoyé, en trois temps.
                    </h2>
                    <p data-i18n="how.sub" className={styles.subtitle}>
                        Vous gardez le contrôle éditorial. Rekap fait le brouillon — vous validez.
                    </p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>01</div>
                        <h3 data-i18n="how.s1t" className={styles.stepTitle}>
                            Connectez votre outil
                        </h3>
                        <p data-i18n="how.s1b" className={styles.stepText}>
                            Reliez Asana en deux clics et choisissez les projets de chaque client.
                            Asana d'abord, ClickUp & monday ensuite.
                        </p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>02</div>
                        <h3 data-i18n="how.s2t" className={styles.stepTitle}>
                            Rekap rédige le brouillon
                        </h3>
                        <p data-i18n="how.s2b" className={styles.stepText}>
                            À la cadence choisie, l'IA transforme les tâches terminées en récit
                            orienté valeur business — dans votre ton, dans la langue du client.
                        </p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>03</div>
                        <h3 data-i18n="how.s3t" className={styles.stepTitle}>
                            Relisez & envoyez
                        </h3>
                        <p data-i18n="how.s3b" className={styles.stepText}>
                            Éditez en ligne, validez, envoyez. L'email part à votre image, depuis
                            votre adresse. Chaque update est archivé.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
