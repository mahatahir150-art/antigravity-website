'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { useAuth } from '@/context/AuthContext';
import { Upload, Camera, CheckCircle, ShieldCheck } from 'lucide-react';

export default function KYCPage() {
    const { user, verifyUser } = useAuth();
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [uploading, setUploading] = useState(false);

    const handleUpload = () => {
        setUploading(true);
        // Simulate network delay
        setTimeout(() => {
            setUploading(false);
            if (step === 1) setStep(2);
            else {
                verifyUser();
                // Show success briefly then redirect
                setTimeout(() => router.push('/create'), 1500);
            }
        }, 1500);
    };

    if (!user) return <div style={{ padding: '2rem' }}>Loading...</div>;

    return (
        <>
            <Header />
            <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
                <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--foreground)' }}>Identity Verification</h1>
                <p style={{ marginBottom: '2rem', color: '#666' }}>To ensure trust and safety, we need to verify your identity before you can list items.</p>

                {/* Steps Indicator */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <div style={{ flex: 1, padding: '0.5rem', borderBottom: step >= 1 ? '3px solid var(--accent)' : '3px solid #eee', fontWeight: step === 1 ? 'bold' : 'normal' }}>1. CNIC Upload</div>
                    <div style={{ flex: 1, padding: '0.5rem', borderBottom: step >= 2 ? '3px solid var(--accent)' : '3px solid #eee', fontWeight: step === 2 ? 'bold' : 'normal' }}>2. Selfie Check</div>
                </div>

                {user.isVerified ? (
                    <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#eaffea', borderRadius: '12px' }}>
                        <CheckCircle size={64} color="var(--success)" style={{ marginBottom: '1rem' }} />
                        <h2>You are verified!</h2>
                        <p>You can now list items safely.</p>
                        <button
                            onClick={() => router.push('/create')}
                            style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: 'var(--foreground)', color: 'white', borderRadius: '8px', border: 'none' }}
                        >
                            Go to Create Listing
                        </button>
                    </div>
                ) : (
                    <div style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: '12px', border: '1px solid #ddd', boxShadow: '0 4px 6px -2px rgba(0,0,0,0.05)' }}>
                        {step === 1 && (
                            <div style={{ textAlign: 'center' }}>
                                <ShieldCheck size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                                <h3>Upload CNIC Front</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem' }}>Please upload a clear photo of your Computerized National Identity Card.</p>

                                <div style={{ border: '2px dashed #ccc', padding: '2rem', borderRadius: '8px', cursor: 'pointer', marginBottom: '2rem' }} onClick={handleUpload}>
                                    {uploading ? 'Uploading...' : (
                                        <>
                                            <Upload size={32} color="#999" />
                                            <div style={{ marginTop: '0.5rem', color: '#666' }}>Click to Upload</div>
                                        </>
                                    )}
                                </div>

                                <button onClick={handleUpload} disabled={uploading} style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--foreground)', color: 'white', borderRadius: '8px', border: 'none', opacity: uploading ? 0.7 : 1 }}>
                                    {uploading ? 'Processing...' : 'Submit Document'}
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div style={{ textAlign: 'center' }}>
                                <Camera size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                                <h3>Liveness Selfie</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '2rem' }}>We need to match your face with your ID card. Please look at the camera.</p>

                                <div style={{ height: '200px', backgroundColor: '#333', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginBottom: '2rem' }}>
                                    [Camera Preview Placeholder]
                                </div>

                                <button onClick={handleUpload} disabled={uploading} style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--foreground)', color: 'white', borderRadius: '8px', border: 'none', opacity: uploading ? 0.7 : 1 }}>
                                    {uploading ? 'Verifying...' : 'Take Photo & Verify'}
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
