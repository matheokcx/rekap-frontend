import styles from './problem-card.module.css';

type ProblemCardProps = {
    icon: string;
    title: string;
    description: string;
    dark?: boolean;
};

const ProblemCard = ({ icon, title, description, dark }: ProblemCardProps) => {
    return (
        <div className={`${styles.card} ${dark ? styles.cardDark : ''}`}>
            <div className={`${styles.icon} ${dark ? styles.cardTitleLight : ''}`}>{icon}</div>
            <h3 className={`${styles.cardTitle} ${dark ? styles.cardTitleLight : ''}`}>{title}</h3>
            <p className={`${styles.cardText} ${dark ? styles.cardTextLight : ''}`}>
                {description}
            </p>
        </div>
    );
};

export default ProblemCard;
