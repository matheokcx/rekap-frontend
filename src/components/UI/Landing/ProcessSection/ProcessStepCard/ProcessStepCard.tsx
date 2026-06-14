import styles from './process-step-card.module.css';

type ProcessStepCardProps = {
    position: number;
    title: string;
    text: string;
};

const ProcessStepCard = ({ position, title, text }: ProcessStepCardProps) => {
    return (
        <div className={styles.step}>
            <div className={styles.stepNumber}>0{position}</div>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.stepText}>{text}</p>
        </div>
    );
};

export default ProcessStepCard;
