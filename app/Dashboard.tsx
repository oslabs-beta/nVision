import { useState, useEffect, useCallback } from 'react';
import Table from './components/Table';
import RouteTree from './components/RouteTree';
import styles from './styles/global.module.css';

const { h_screen, disabled_tab, active_tab, dashboard, table_inner, table_header, tree } = styles;

const wsURL = 'ws://localhost:8080';

interface DashboardProps {
  info: Object
}

export default function DataGridDemo(props: DashboardProps): React.JSX.Element {
  const { info } = props
  const [tab, setTab] = useState('table');
  const [trace, setTrace] = useState<object[]>([]);

  // --------WebSocket Connection--------
  const getSocketData = useCallback(async () => {
    const ws = new WebSocket(wsURL);
    ws.onopen = () => {
      console.log('Connected to socket.');
    };
    ws.onmessage = async (message) => {
      const received = await JSON.parse(message.data);
      received[0].duration = received[0].duration.toFixed(2);
      setTrace((prev) => [...received, ...prev]);
    };

    ws.onclose = () => {
      console.log('Socket connection lost.');
      setTimeout(function () {
        getSocketData();
      }, 1000);
    };
  }, []);

  useEffect(() => {
    getSocketData();
  }, [getSocketData]);

  return (
    <div className={h_screen}>
      <button
        className={(tab === 'table' ? active_tab : disabled_tab)}
        onClick={() => setTab('table')}
      >
        Table
      </button>
      <button
        className={(tab === 'tree' ? active_tab : disabled_tab)}
        onClick={() => setTab('tree')}
      >
        Tree
      </button>
      {tab === 'table' ? (
        <div className={dashboard}>
          <div className={table_inner}>
            <h2 className={table_header}>
              Network Activity
            </h2>
          </div>
          <Table trace={trace} />
        </div>
      ) : (
          <div className={dashboard}>
            <div className={table_inner}>
              <h2 className={table_header}>
                Directory Tree
              </h2>
          </div>
            <div className={tree}>
              <RouteTree info={info}/>
            </div>
          </div>
      )}
    </div>
  );
};
