'use client';

import { Shield, ShieldAlert, MoreHorizontal } from 'lucide-react';

export default function UsersPage() {
    const users = [
        { id: 1, name: 'Ali Khan', email: 'ali@example.com', status: 'Verified', joinDate: 'Dec 10, 2025', score: 92 },
        { id: 2, name: 'Sara Ahmed', email: 'sara@example.com', status: 'Pending', joinDate: 'Dec 11, 2025', score: 0 },
        { id: 3, name: 'John Doe', email: 'john@example.com', status: 'Verified', joinDate: 'Nov 22, 2025', score: 88 },
        { id: 4, name: 'Guest User 1', email: 'guest@example.com', status: 'Unverified', joinDate: 'Dec 12, 2025', score: 50 },
    ];

    return (
        <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1a202c' }}>User Management</h1>

            <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#f7fafc', borderBottom: '1px solid #e2e8f0' }}>
                        <tr>
                            <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>User</th>
                            <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Status</th>
                            <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Reliability</th>
                            <th style={{ padding: '1rem', textAlign: 'left', color: '#4a5568' }}>Joined</th>
                            <th style={{ padding: '1rem', textAlign: 'right', color: '#4a5568' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ fontWeight: 500, color: '#2d3748' }}>{user.name}</div>
                                    <div style={{ fontSize: '0.85rem', color: '#718096' }}>{user.email}</div>
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    {user.status === 'Verified' ? (
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 8px', borderRadius: '999px', backgroundColor: '#c6f6d5', color: '#22543d', fontSize: '0.8rem', fontWeight: 600 }}>
                                            <Shield size={12} /> Verified
                                        </span>
                                    ) : user.status === 'Pending' ? (
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 8px', borderRadius: '999px', backgroundColor: '#feebc8', color: '#744210', fontSize: '0.8rem', fontWeight: 600 }}>
                                            <ShieldAlert size={12} /> Pending
                                        </span>
                                    ) : (
                                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 8px', borderRadius: '999px', backgroundColor: '#fed7d7', color: '#822727', fontSize: '0.8rem', fontWeight: 600 }}>
                                            Unverified
                                        </span>
                                    )}
                                </td>
                                <td style={{ padding: '1rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <div style={{ width: '100px', height: '8px', backgroundColor: '#edf2f7', borderRadius: '4px', overflow: 'hidden' }}>
                                            <div style={{ width: `${user.score}%`, height: '100%', backgroundColor: user.score > 80 ? '#48bb78' : user.score > 50 ? '#ecc94b' : '#f56565' }}></div>
                                        </div>
                                        <span style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{user.score}%</span>
                                    </div>
                                </td>
                                <td style={{ padding: '1rem', color: '#4a5568', fontSize: '0.9rem' }}>{user.joinDate}</td>
                                <td style={{ padding: '1rem', textAlign: 'right' }}>
                                    <button style={{ padding: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#a0aec0' }}>
                                        <MoreHorizontal size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
