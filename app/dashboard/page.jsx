'use client';
import dynamic from 'next/dynamic';

const DashboardUI = dynamic(() => import('@netpulse/dashboard'), { ssr: false });
export default function Home() {
    return <DashboardUI/>;
}