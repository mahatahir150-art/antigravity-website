'use client';

import StatCard from '@/components/admin/StatCard';
import { Users, ShoppingBag, DollarSign, Activity } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1a202c' }}>Admin Overview</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <StatCard label="Total Users" value="1,248" icon={Users} trend="+12%" />
                <StatCard label="Active Listings" value="482" icon={ShoppingBag} trend="+8%" />
                <StatCard label="Total Revenue" value="Rs 4.2M" icon={DollarSign} trend="+24%" />
                <StatCard label="Active Rents" value="85" icon={Activity} trend="+5%" />
            </div>

            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ marginBottom: '1.5rem', color: '#2d3748' }}>System Health</h3>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#718096' }}>Server Uptime</div>
                        <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ width: '99%', height: '100%', backgroundColor: '#48bb78' }}></div>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.8rem', marginTop: '4px', color: '#48bb78' }}>99.9%</div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#718096' }}>Pending KYC Reviews</div>
                        <div style={{ height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ width: '45%', height: '100%', backgroundColor: '#ed8936' }}></div>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.8rem', marginTop: '4px', color: '#ed8936' }}>12 Pending</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
