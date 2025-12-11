export default function StatCard({ label, value, icon: Icon, trend }: any) {
    return (
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ color: '#718096', fontSize: '0.9rem', fontWeight: 600 }}>{label}</div>
                <div style={{ padding: '8px', backgroundColor: '#ebf4ff', borderRadius: '50%', color: '#3182ce' }}>
                    <Icon size={20} />
                </div>
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1a202c' }}>{value}</div>
            {trend && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: trend.startsWith('+') ? '#38a169' : '#e53e3e' }}>
                    {trend} vs last month
                </div>
            )}
        </div>
    );
}
