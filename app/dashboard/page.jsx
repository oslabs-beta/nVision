'use client'

import dynamic from 'next/dynamic';
// below not working 
// import * as app from 'nvision'

// import * as Dashboard from 'nvision';

const Dashboard = dynamic(() => import('nvision'), { ssr: false });

export default function TestPage() {
    return (
        <div>
            <h1>Hello</h1>
            <Dashboard/>
        </div>
    )
}