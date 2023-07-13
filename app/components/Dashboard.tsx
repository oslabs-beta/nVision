'use client';
import { useState } from 'react';
import '../globals.css';
import Chart from './Chart';
import RouteTree from './RouteTree';

export default function Dashboard(): any {
  const [tab, setTab] = useState(false);

  return (
    <div style={{ width: '30vw', height: '100vh' }}>
      <button onClick={() => setTab(true)}>Table</button>
      <button onClick={() => setTab(false)}>Tree</button>
      {tab ? (
        <Chart />
      ) : (
        <RouteTree />
      )}
    </div>
  );
}
