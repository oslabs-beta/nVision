'use client';
import { useEffect, useState } from 'react';
import '../globals.css';
import Chart from '../components/Chart';
import RouteTree from '../components/RouteTree';

export default function Dashboard(): any {
  const [tab, setTab] = useState(false);

  return (
    <div>
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
