'use client'

// Creates client component wrapper for imported dashboard
import Dashboard from '@nvision/dashboard';
import { Suspense } from 'react';
import Loading from '../loading';

const Wrapper = (props) => {
    const {info} = props
    return (
        <Suspense fallback={<Loading/>}>
            <Dashboard info={ info } />
        </Suspense>
    )
}

export default Wrapper;