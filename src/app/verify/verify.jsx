'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

function Verifyotp() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get('orderID');
    const phoneNumber = searchParams.get('phone_number');
    const router = useRouter();
    const [otp, setOtp] = useState('');

    const changeHandler = (e) => {
        setOtp(e.target.value);
    };

    const verifyOtpHandler = async () => {
        try {
            const resp = await fetch('/api/v1/verifyotp', {
                method: 'POST',
                body: JSON.stringify({ orderId, otp, phoneNumber }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await resp.json();
            if(result){
                alert('otp verify')
            }
        } catch (error) {
            console.error('Internal server issue:', error);
        }
    };

    return (
        <>
            <input
                type="text"
                name="otp"
                value={otp}
                placeholder="Enter OTP"
                onChange={changeHandler}
            />
            <button onClick={verifyOtpHandler}>Verify OTP</button>
        </>
    );
}



export default Verifyotp;
