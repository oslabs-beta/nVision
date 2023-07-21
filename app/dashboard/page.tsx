'use client';

import React, { useState, useEffect, useCallback } from 'react';
// import useWebSocket from 'react-use-websocket';
import '../../styles/globals.css';
import RouteTree from '../components/RouteTree';
import Table from '../components/Table';

const wsURL = 'ws://localhost:8080';

export default function DataGridDemo(): any {
  const [tab, setTab] = useState('table');
  const [trace, setTrace] = useState<object[]>([]);

  // --------WebSockets--------
  const getSocketData = useCallback(async () => {
    const ws = new WebSocket(wsURL);
    ws.onopen = () => {
      console.log('Connected to socket');
      ws.send('FROM THE CLIENT');
    };
    ws.onmessage = async (message) => {
      const received = await JSON.parse(message.data);
      received[0].duration = received[0].duration.toFixed(2);
      setTrace((prev) => [...prev, ...received]);
    };
    // on close we should update connection state
    // and retry connection
    ws.onclose = () => {
      console.log('connection lost');
      setTimeout(function () {
        getSocketData();
      }, 1000);
    };
  }, []);

  useEffect(() => {
    getSocketData();
  }, [getSocketData]);

  return (
    <div className='h-screen'>
      <button
        className={tab === 'table' ? 'btn-1  bg-gray-300' : 'btn-1'}
        onClick={() => setTab('table')}
      >
        Table
      </button>
      <button
        className={tab === 'tree' ? 'btn-1 ml-1 bg-gray-300' : 'btn-1 ml-1'}
        onClick={() => setTab('tree')}
      >
        Tree
      </button>
      {tab === 'table' ? (
        <div className='bg-gray-300[.4] flex flex-col justify-center content-center box-content p-6 border-4'>
          <div className='flex justify-center'>
            <h2 className='mt-5 mb-2 text-2xl font-bold text-center'>
              Network Activity
            </h2>
          </div>
          <Table trace={trace} />
        </div>
      ) : (
        <div className='bg-gray-300[.4] flex flex-col justify-center content-center box-content border-4 h-[80vh] w-[70vw]'>
          <RouteTree />
        </div>
      )}
    </div>
  );
}
