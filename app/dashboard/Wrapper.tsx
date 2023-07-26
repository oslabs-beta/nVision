'use client'

// Creates client component wrapper for imported dashboard

import Dashboard from "nvision"

const Wrapper = (props) => {
    const {info} = props
    return (
        <Dashboard info={info} />
    )
}

export default Wrapper;