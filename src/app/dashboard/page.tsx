'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { Package, QrCode, DollarSign, TrendingUp } from 'lucide-react';

export default function DashboardHome() {
    const { user } = useAuth();

    const stats = [
        { label: 'Active Rentals', value: '2', icon: Package, color: '#3b82f6' },
        { label: 'Pending Requests', value: '5', icon: MessageSquare, color: '#f59e0b' },
        { label: 'Total Earnings', value: 'Rs 12,500', icon: DollarSign, color: '#10b981' },
        { label: 'Reliability Score', value: '98%', icon: TrendingUp, color: '#8b5cf6' },
    ];

    // Placeholder for MessageSquare since it's used in stats
    function MessageSquare(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> }

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '0.5rem', color: 'var(--foreground)' }}>Welcome back, {user?.name || 'User'}!</h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>Here is what's happening with your items.</p>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {stats.map((stat) => (
                    <div key={stat.label} style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: '12px', border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ padding: '10px', borderRadius: '50%', backgroundColor: `${stat.color}20` }}>
                            <stat.icon size={24} color={stat.color} />
                        </div>
                        <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stat.value}</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Recent Activity */}
                <div style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: '12px', border: '1px solid #eee' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Recent Activity</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span>New request for <strong>Canon DSLR</strong></span>
                            <span style={{ fontSize: '0.8rem', color: '#999' }}>2m ago</span>
                        </li>
                        <li style={{ padding: '0.75rem 0', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span><strong>Mountain Bike</strong> returned safely</span>
                            <span style={{ fontSize: '0.8rem', color: '#999' }}>1h ago</span>
                        </li>
                        <li style={{ padding: '0.75rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span>Earnings payout processed</span>
                            <span style={{ fontSize: '0.8rem', color: '#999' }}>1d ago</span>
                        </li>
                    </ul>
                </div>

                {/* Quick Actions */}
                <div style={{ backgroundColor: 'var(--white)', padding: '1.5rem', borderRadius: '12px', border: '1px solid #eee' }}>
                    <h3 style={{ marginBottom: '1rem' }}>Quick Actions</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <Link href="/create" style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center', border: '1px solid #eee' }}>
                            <Package style={{ margin: '0 auto 0.5rem' }} />
                            <div>List Item</div>
                        </Link>
                        <Link href="/dashboard/track" style={{ padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center', border: '1px solid #eee' }}>
                            <QrCode style={{ margin: '0 auto 0.5rem' }} />
                            <div>Scan QR</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
