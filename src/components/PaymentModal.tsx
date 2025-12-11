'use client';

import { useState } from 'react';
import { X, CreditCard, Shield } from 'lucide-react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    itemName: string;
    depositAmount: number;
}

export default function PaymentModal({ isOpen, onClose, itemName, depositAmount }: PaymentModalProps) {
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);

    if (!isOpen) return null;

    const handlePay = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false); // Reset for next time strictly if needed, but component unmounts usually
                alert('Deposit Securely Held in Escrow!'); // Simple feedback
            }, 1500);
        }, 2000);
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
        }}>
            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', width: '90%', maxWidth: '400px', position: 'relative' }}>
                <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <X size={24} />
                </button>

                {success ? (
                    <div style={{ textAlign: 'center', color: 'green' }}>
                        <Shield size={64} style={{ marginBottom: '1rem' }} />
                        <h2>Secure Payment Successful!</h2>
                        <p>Deposit of Rs. {depositAmount} is held in Escrow.</p>
                    </div>
                ) : (
                    <>
                        <h2 style={{ marginBottom: '1rem' }}>Secure Checkout</h2>
                        <p style={{ marginBottom: '1.5rem', color: '#666' }}>
                            Paying security deposit for <strong>{itemName}</strong>.
                        </p>

                        <div style={{ backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Security Deposit</span>
                                <strong>Rs. {depositAmount.toLocaleString()}</strong>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.9rem' }}>
                                <span>Platform Fee</span>
                                <span>Rs. 150</span>
                            </div>
                            <div style={{ borderTop: '1px solid #ddd', marginTop: '0.5rem', paddingTop: '0.5rem', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                                <span>Total</span>
                                <span>Rs. {(depositAmount + 150).toLocaleString()}</span>
                            </div>
                        </div>

                        <button
                            onClick={handlePay}
                            disabled={processing}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                backgroundColor: 'var(--foreground)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                fontWeight: 'bold',
                                opacity: processing ? 0.7 : 1
                            }}
                        >
                            {processing ? 'Processing...' : (
                                <>
                                    <CreditCard size={20} /> Pay Now
                                </>
                            )}
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', fontSize: '0.8rem', color: '#999' }}>
                            <Shield size={14} /> 100% Refundable Deposit via Escrow
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
