'use client'

import Dashboard from '@nvisionjs/dashboard';
import React from 'react';

const Wrapper = (props) => {
    const {info} = props
    return (
      <Dashboard info={ info } />
    )
}

export default Wrapper;