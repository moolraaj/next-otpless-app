'use client'
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState({
    phoneNumber: '',
  });

  const getUserValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    try {
      const body = {
        phoneNumber: user.phoneNumber,
        channel: "SMS",
        otpLength: 6,
        expiry: 7200,
        clientId: "7S3IPYF1K1508OUGIU22N66YJ1VJG7CY",
        clientSecret: "n8fq3mze7s3v1f7fuby47rg2q0ty6l4m",
      };

      const resp = await fetch('/api/v1/sendotp', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (resp.ok) {
        console.log('OTP sent successfully');
        const data = await resp.json();
        console.log('Response Data:', data);
      } else {
        const errorData = await resp.json();
        console.error('Failed to send OTP:', errorData);
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <>
      <div className="phone_number_wrapper">
        <input
          type="text"
          name='phoneNumber'
          placeholder="enter your phone number"
          value={user.phoneNumber}
          onChange={getUserValue}
        /><br /> <br />
        <button onClick={sendOtp}>Submit</button>
      </div>
    </>
  );
}
