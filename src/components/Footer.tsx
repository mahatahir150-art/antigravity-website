export default function Footer() {
    return (
        <footer style={{
            backgroundColor: 'var(--foreground)',
            color: 'var(--white)',
            padding: '2rem 1rem',
            marginTop: 'auto'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                    <h3>Rent & Return</h3>
                    <p>© 2025</p>
                </div>
                <div>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}
