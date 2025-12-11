'use client';

import { DUMMY_LISTINGS } from '@/lib/dummyData';
import Header from '@/components/Header';
import Link from 'next/link';
import { useState, use } from 'react';
import PaymentModal from '@/components/PaymentModal';

// In Next.js App Router, page props are: { params: { id: string }, searchParams: ... }
// For static export or simple needs, we find by ID.

// Re-write as Client Component properly to handle state
export default function ListingDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const item = DUMMY_LISTINGS.find(l => l.id === id);
    const [showPayment, setShowPayment] = useState(false);

    if (!item) {
        return (
            <>
                <Header />
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>Item not found</h2>
                    <Link href="/browse" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                        Back to map
                    </Link>
                </div>
            </>
        );
    }

    // Mock deposit amount (e.g. 5 days rent equivalent)
    const depositAmount = item.pricePerDay * 5;

    return (
        <>
            <Header />
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
                <Link href="/browse" style={{ display: 'inline-block', marginBottom: '1rem', color: '#666' }}>
                    &larr; Back to Listings
                </Link>

                <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                    />
                </div>

                <div style={{ padding: '2rem 0' }}>
                    <span style={{
                        backgroundColor: 'var(--accent-light)',
                        color: 'var(--foreground)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        fontWeight: 'bold'
                    }}>
                        {item.category}
                    </span>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '1rem' }}>
                        <h1 style={{ fontSize: '2rem', margin: 0, color: 'var(--foreground)' }}>{item.title}</h1>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent)' }}>
                                Rs. {item.pricePerDay}
                            </div>
                            <div style={{ color: '#666' }}>per day</div>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'var(--white)', borderRadius: '8px', border: '1px solid #eee' }}>
                        <h3>Description</h3>
                        <p style={{ lineHeight: 1.6, color: '#444' }}>
                            This is a placeholder description for the {item.title}.
                            It is currently located at {item.lat.toFixed(4)}, {item.lng.toFixed(4)}.
                            Rent this item securely with Verified Identity and Easy Returns.
                        </p>

                        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(`Hi, I'm interested in renting your product: ${item.title}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: '#25D366', // WhatsApp Green
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    textDecoration: 'none'
                                }}
                            >
                                Chat on WhatsApp
                            </a>

                            <button
                                onClick={() => setShowPayment(true)}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    backgroundColor: 'var(--foreground)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                            >
                                Pay Secure Deposit (Rs. {depositAmount})
                            </button>

                            <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Owner: Ali Khan (Verified)</p>
                                <Link href="/dashboard/track" style={{ fontSize: '0.9rem', color: 'var(--accent)', textDecoration: 'underline' }}>
                                    View QR Code
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PaymentModal
                isOpen={showPayment}
                onClose={() => setShowPayment(false)}
                itemName={item.title}
                depositAmount={depositAmount}
            />
        </>
    );
}
