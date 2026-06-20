import type { ReactNode } from 'react';
import styles from '@/components/UI/Legal/legal-layout.module.css';

type LegalNoteProps = {
    children: ReactNode;
};

const LegalNote = ({ children }: LegalNoteProps) => {
    return (
        <div className={styles.note}>
            <p>{children}</p>
        </div>
    );
};

export default LegalNote;
