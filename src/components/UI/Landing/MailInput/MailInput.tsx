import { useState, type FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import { apiClient } from '@/lib/api.ts';
import styles from './mail-input.module.css';

const MailInput = () => {
    const { t } = useTranslation();
    const [pending, setPending] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = new FormData(form).get('email');

        setPending(true);
        try {
            await apiClient.post('add-waitlist', { email });
            toast.success(t('landing.waitlistSuccess'));
            form.reset();
        } catch {
            toast.error(t('landing.waitlistError'));
        } finally {
            setPending(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                required
                disabled={pending}
                placeholder={t('landing.mailPlaceholder')}
                className={styles.input}
            />
            <button type="submit" className={styles.button} disabled={pending}>
                {pending ? t('landing.sending') : t('landing.joinWaitlist')}
            </button>
        </form>
    );
};

export default MailInput;
