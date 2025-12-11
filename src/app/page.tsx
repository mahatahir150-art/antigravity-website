import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--background)', color: 'var(--foreground)', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Rent Anything, <span style={{ color: 'var(--accent)' }}>Anywhere.</span>
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2rem', lineHeight: 1.6 }}>
          The local-first marketplace for borrowing what you need and earning from what you own. Verified peers, secure deposits.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', width: '100%', maxWidth: '300px' }}>
          <Link href="/browse" style={{
            backgroundColor: 'var(--foreground)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            display: 'block'
          }}>
            Browse Nearby
          </Link>
          <Link href="/create" style={{
            backgroundColor: 'transparent',
            color: 'var(--foreground)',
            border: '2px solid var(--foreground)',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            display: 'block'
          }}>
            List Item
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
