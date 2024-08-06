import { NextResponse } from 'next/server';
import { parse } from 'cookie';

export function middleware(request) {
    const cookies = parse(request.headers.get('cookie') || '');
    const { orderId, phoneNumber } = cookies;

    if (!orderId || !phoneNumber) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard'],
};
