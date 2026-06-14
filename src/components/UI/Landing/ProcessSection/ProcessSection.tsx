import styles from './process-section.module.css';
import ProcessStepCard from '@/components/UI/Landing/ProcessSection/ProcessStepCard/ProcessStepCard.tsx';

const ProcessSection = () => {
    const steps = [
        {
            title: 'Connectez votre outil',
            text: "Reliez Asana en deux clics et choisissez les projets de chaque client. Asana d'abord, ClickUp & monday ensuite.",
        },
        {
            title: 'Rekap rédige le brouillon',
            text: "À la cadence choisie, l'IA transforme les tâches terminées en récit orienté valeur business — dans votre ton, dans la langue du client.",
        },
        {
            title: 'Relisez & envoyez',
            text: "Éditez en ligne, validez, envoyez. L'email part à votre image, depuis votre adresse. Chaque update est archivé.",
        },
    ];

    return (
        <section id="process" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <div className={styles.kicker}>COMMENT ÇA MARCHE</div>
                    <h2 className={styles.heading}>
                        De vos tâches à un update envoyé, en trois temps.
                    </h2>
                    <p className={styles.subtitle}>
                        Vous gardez le contrôle éditorial. Rekap fait le brouillon — vous validez.
                    </p>
                </div>
                <div className={styles.grid}>
                    {steps.map((step, index: number) => (
                        <ProcessStepCard
                            key={index}
                            title={step.title}
                            text={step.text}
                            position={index + 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
