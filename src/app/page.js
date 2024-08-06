'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function Sendotp() {
    let router=useRouter()
    const [user, setUser] = useState({
        phoneNumber: '',
        channel: 'SMS',
        otpLength: 6,
        expiry: 86400,
    });

    const changeHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const sendOtpHandler = async () => {
        try {
            const resp = await fetch('/api/v1/sendotp', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await resp.json();
            console.log(result);
            if (result) {

              console.log(result)
                 
                router.push(`/verify?orderID=${result.orderId}&phone_number=${user.phoneNumber}`)

                setUser({});
            }
        } catch (error) {
            console.error('Internal server issue');
        }
    };

    return (
        <>
            <input
                type="number"
                name="phoneNumber"
                value={user.phoneNumber}
                placeholder="Enter your mobile number"
                onChange={changeHandler}
            />
            <button onClick={sendOtpHandler}>Send OTP</button>
        </>
    );
}

export default Sendotp;