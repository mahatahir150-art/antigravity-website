'use client';

import { useAuth } from '@/context/AuthContext';
import { ShieldCheck, Star, Clock, AlertTriangle, User } from 'lucide-react';

export default function ProfilePage() {
    const { user } = useAuth();

    // Mock Reliability Data
    const reliabilityScore = 92;
    const reliabilityBreakdown = [
        { label: 'On-time Returns', score: '98%', icon: Clock, color: 'green' },
        { label: 'Item Handling', score: '5.0', icon: Star, color: 'gold' },
        { label: 'Disputes', score: '0', icon: AlertTriangle, color: 'gray' }
    ];

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem', color: 'var(--foreground)' }}>My Profile</h1>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {/* Left: Identity Card */}
                <div style={{ flex: 1, minWidth: '300px', backgroundColor: 'var(--white)', padding: '2rem', borderRadius: '12px', border: '1px solid #eee', textAlign: 'center' }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#eee', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <User size={48} color="#999" />
                    </div>
                    <h2 style={{ margin: '0 0 0.5rem 0' }}>{user?.name || 'Guest User'}</h2>
                    <div style={{ color: '#666', marginBottom: '1.5rem' }}>Member since Dec 2025</div>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '20px', backgroundColor: user?.isVerified ? '#e6fffa' : '#fff5f5', color: user?.isVerified ? '#2c7a7b' : '#c53030' }}>
                        <ShieldCheck size={18} />
                        <strong>{user?.isVerified ? 'Identity Verified' : 'Unverified'}</strong>
                    </div>
                </div>

                {/* Right: Reliability Score */}
                <div style={{ flex: 1, minWidth: '300px', backgroundColor: 'var(--white)', padding: '2rem', borderRadius: '12px', border: '1px solid #eee' }}>
                    <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Star color="gold" fill="gold" /> Reliability Score
                    </h3>

                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: reliabilityScore > 80 ? 'var(--success)' : 'orange' }}>
                            {reliabilityScore}
                        </div>
                        <div style={{ color: '#666' }}>Excellent</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {reliabilityBreakdown.map((item) => (
                            <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}>
                                    <item.icon size={16} color={item.color === 'gold' ? '#d4af37' : item.color} />
                                    {item.label}
                                </div>
                                <div style={{ fontWeight: 'bold' }}>{item.score}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* History Section */}
            <div style={{ marginTop: '2rem', backgroundColor: 'var(--white)', padding: '2rem', borderRadius: '12px', border: '1px solid #eee' }}>
                <h3>Rental History</h3>
                <p style={{ color: '#999', padding: '2rem 0', textAlign: 'center' }}>No completed rentals yet.</p>
            </div>
        </div>
    );
}
