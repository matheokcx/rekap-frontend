import { useTranslation } from 'react-i18next';

const MailInput = () => {
    const { t } = useTranslation();

    return (
        <form
            style={{
                display: 'flex',
                gap: '8px',
                background: '#fff',
                border: '1px solid #ddd6c6',
                borderRadius: '14px',
                padding: '7px',
                boxShadow: '0 10px 30px -18px rgba(26, 24, 19, 0.4)',
            }}
        >
            <input
                type="email"
                required
                placeholder={t('landing.mailPlaceholder')}
                style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontFamily: 'inherit',
                    fontSize: '15.5px',
                    color: '#1a1813',
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
