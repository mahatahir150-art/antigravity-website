'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import ImageUploader from '@/components/create-listing/ImageUploader';
import { useAuth } from '@/context/AuthContext';
import { analyzeImage, MLAnalysisResult } from '@/lib/mockMLService';
import { Lock, MapPin, Tag } from 'lucide-react';
import EXIF from 'exif-js';

export default function CreateListingPage() {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    const [analyzing, setAnalyzing] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: '',
        description: '',
        location: ''
    });

    // Gating: Redirect if not verified
    useEffect(() => {
        if (!isLoading && user) {
            if (!user.isVerified) {
                router.push('/kyc');
            }
        }
    }, [user, isLoading, router]);

    const handleImageSelect = async (file: File) => {
        setAnalyzing(true);

        // 1. Show Preview
        const reader = new FileReader();
        reader.onload = () => setImagePreview(reader.result as string);
        reader.readAsDataURL(file);

        // 2. Extract EXIF (Location)
        // Note: EXIF extraction often needs the array buffer or specific handling. 
        // For MVP, we'll try a basic extraction if possible, or fallback.
        // In a real app we'd use 'exif-js' properly on the ArrayBuffer.
        EXIF.getData(file as any, function (this: any) {
            // Just a placeholder for the logic. Real EXIF GPS parsing is verbose.
            // We will assume no GPS found for this simple mock, or hardcode if needed.
            console.log('EXIF Data loaded');
        });

        // 3. ML Analysis (Mock)
        try {
            const result: MLAnalysisResult = await analyzeImage(file);

            setFormData(prev => ({
                ...prev,
                title: result.titleSuggestion,
                category: result.category,
                price: result.priceSuggestion.toString(),
                description: `Condition: ${result.condition}. Perfect for ${result.tags.join(', ')}.`,
                location: 'Clifton, Karachi' // Fallback/Mock location
            }));
        } catch (e) {
            console.error("ML Error", e);
        } finally {
            setAnalyzing(false);
        }
    };

    if (isLoading || !user) return <div style={{ padding: '2rem' }}>Loading user profile...</div>;
    if (!user.isVerified) return null; // Will redirect

    return (
        <>
            <Header />
            <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
                <h1 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: 'var(--foreground)' }}>List an Item</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>

                    {/* Left: Upload & Preview */}
                    <div>
                        <div style={{ marginBottom: '1rem', fontWeight: 'bold' }}>1. Photo</div>
                        {imagePreview ? (
                            <div style={{ position: 'relative' }}>
                                <img src={imagePreview} alt="Preview" style={{ width: '100%', borderRadius: '12px', border: '1px solid #ddd' }} />
                                <button
                                    onClick={() => { setImagePreview(null); setFormData(prev => ({ ...prev, title: '' })); }}
                                    style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}
                                >
                                    ✕
                                </button>
                                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'green', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Tag size={14} /> AI Analysis Complete
                                </div>
                            </div>
                        ) : (
                            <ImageUploader onImageSelected={handleImageSelect} isAnalyzing={analyzing} />
                        )}
                    </div>

                    {/* Right: Details Form */}
                    <div>
                        <div style={{ marginBottom: '1rem', fontWeight: 'bold' }}>2. Details</div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className={analyzing ? 'skeleton-pulse' : ''}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    placeholder="e.g. Canon DSLR Camera"
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                                />
                            </div>

                            <div className={analyzing ? 'skeleton-pulse' : ''}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Category</label>
                                <select
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                                >
                                    <option value="">Select Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Sports">Sports</option>
                                    <option value="Tools">Tools</option>
                                    <option value="Home & Garden">Home & Garden</option>
                                </select>
                            </div>

                            <div className={analyzing ? 'skeleton-pulse' : ''}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Price per Day (Rs)</label>
                                <input
                                    type="number"
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                                />
                            </div>

                            <div className={analyzing ? 'skeleton-pulse' : ''}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Location</label>
                                <div style={{ position: 'relative' }}>
                                    <MapPin size={18} style={{ position: 'absolute', top: '12px', left: '10px', color: '#999' }} />
                                    <input
                                        type="text"
                                        value={formData.location}
                                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                                        style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
                                    />
                                </div>
                            </div>

                            <button style={{
                                marginTop: '1rem',
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: 'var(--foreground)',
                                color: 'white',
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: analyzing ? 'not-allowed' : 'pointer',
                                opacity: analyzing ? 0.7 : 1
                            }}>
                                Publish Listing
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .skeleton-pulse {
            animation: pulse 1.5s infinite ease-in-out;
            opacity: 0.6;
            pointer-events: none;
        }
        @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 0.3; }
            100% { opacity: 0.6; }
        }
        @media (max-width: 768px) {
            div[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
            }
        }
      `}</style>
        </>
    );
}
