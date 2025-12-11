import { DUMMY_LISTINGS } from '@/lib/dummyData';
import Header from '@/components/Header';
import Link from 'next/link';

// In Next.js App Router, page props are: { params: { id: string }, searchParams: ... }
// For static export or simple needs, we find by ID.

export default async function ListingDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = DUMMY_LISTINGS.find(l => l.id === id);

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

                        <div style={{ marginTop: '2rem' }}>
                            <button style={{
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: 'var(--foreground)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '1.1rem',
                                fontWeight: 'bold'
                            }}>
                                Request to Rent
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
