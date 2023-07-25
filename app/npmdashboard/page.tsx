'use client';

import dynamic from 'next/dynamic';
import {Dashboard} from 'nvision'

// const Dashboard = dynamic(() => import('nvision'), { ssr: false });

export default function TestPage() {
    return (
        <div>
            <h1>Hello</h1>
            <Dashboard/>
        </div>
    )
}