const MailInput = () => {
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
                data-i18n-ph="hero.ph"
                placeholder="Votre email pro"
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
                data-i18n="hero.btn"
                style={{
                    border: 'none',
                    cursor: 'pointer',
                    background: '#ff5a36',
                    color: '#fff',
                    fontFamily: 'inherit',
                    fontWeight: 600,
                    fontSize: '15px',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    whiteSpace: 'nowrap',
                }}
            >
                Rejoindre la waitlist
            </button>
        </form>
    );
};

export default MailInput;
