import styles from './problem-card.module.css';

type ProblemCardProps = {
    icon: string;
    title: string;
    description: string;
    additionalCss?: string;
};

const ProblemCard = ({ icon, title, description, additionalCss }: ProblemCardProps) => {
    return (
        <div className={`${styles.card} ${additionalCss}`}>
            <div className={styles.icon}>{icon}</div>
            <h3 data-i18n="prob.c1t" className={styles.cardTitle}>
                {title}
            </h3>
            <p data-i18n="prob.c1b" className={styles.cardText}>
                {description}
            </p>
        </div>
    );
};

export default ProblemCard;
