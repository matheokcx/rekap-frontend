import styles from './problem-section.module.css';
import ProblemCard from '@/components/UI/Landing/ProblemSection/ProblemCard/ProblemCard.tsx';

const ProblemSection = () => {
    const problems = [
        {
            title: 'Chronophage',
            description:
                "Un compte-rendu clair par client, chaque semaine. Multipliez par 15 clients : c'est une demi-journée qui disparaît.",
            icon: '⏱',
        },
        {
            title: 'Négligé',
            description:
                "Sous la pression, l'update saute. Quelques semaines sans nouvelles et la relation se refroidit sans bruit.",
            icon: '⤵',
        },
        {
            title: 'Churn',
            description:
                '« Il ne se passe rien. » Le client questionne le budget, compare, puis part — alors que le travail était bon.',
            icon: '↘',
            dark: true,
        },
    ];

    return (
        <section id="probleme" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.intro}>
                    <div className={styles.kicker}>LE PROBLÈME</div>
                    <h2 className={styles.heading}>
                        Le vrai risque n'est pas la qualité de votre travail. C'est le silence.
                    </h2>
                    <p className={styles.subtitle}>
                        La rétention d'un client d'agence tient avant tout à la{' '}
                        <strong>communication perçue</strong>. Vous livrez un travail excellent —
                        mais s'il reste invisible, le client finit par se demander à quoi sert son
                        budget.
                    </p>
                </div>
                <div className={styles.grid}>
                    {problems.map((problem) => (
                        <ProblemCard
                            key={problem.title}
                            title={problem.title}
                            description={problem.description}
                            icon={problem.icon}
                            dark={problem.dark}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
