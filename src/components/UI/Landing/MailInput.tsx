import { useTranslation } from 'react-i18next';
import { apiClient } from '@/lib/api.ts';

const MailInput = () => {
    const { t } = useTranslation();

    const addInWaitlist = async (formData: FormData): Promise<void> => {
        await apiClient.post('add-waitlist', {
            email: formData.get('email'),
        });
    };

    return (
        <form
            action={addInWaitlist}
            style={{
                display: 'flex',
                gap: '8px',
                background: 'var(--lp-surface)',
                border: '1px solid var(--lp-border)',
                borderRadius: '14px',
                padding: '7px',
                boxShadow: '0 10px 30px -18px rgba(26, 24, 19, 0.4)',
            }}
        >
            <input
                type="email"
                name="email"
                required
                placeholder={t('landing.mailPlaceholder')}
                style={{
                    flex: 1,
                    minWidth: 0,
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontFamily: 'inherit',
                    fontSize: '15.5px',
                    color: 'var(--lp-heading)',
                    padding: '10px 12px',
                }}
            />
            <button
                type="submit"
                style={{
                    border: 'none',
                    cursor: 'pointer',
                    background: 'var(--primary)',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    fontSize: '15px',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    whiteSpace: 'nowrap',
                }}
            >
                {t('landing.joinWaitlist')}
            </button>
        </form>
    );
};

export default MailInput;
