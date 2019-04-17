import React, { useEffect, useRef } from 'react';
import { chart, scale } from './chart';

const s = {
  borderRadius: 5,
  height: 100,
  width: 100,
};

const f = {
  alignItems: 'center',
  display: 'flex',
  position: 'fixed',
  bottom: 5,
};

export const AppRoot = () => {
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      chart(ref.current);
    }
  }, []);

  return (
    <>
      <h1>Force Graph</h1>
      <div>
        <div style={{ ...f, bottom: 105 }}>
          <div style={{ ...s, backgroundColor: scale('opp') }} />
          <h2>Opportunity</h2>
        </div>
        <div style={{ ...f, bottom: 205 }}>
          <div style={{ ...s, backgroundColor: scale('moment') }} />
          <h2>Moment</h2>
        </div>
        <div style={f}>
          <div style={{ ...s, backgroundColor: scale('user') }} />
          <h2>User</h2>
        </div>
      </div>
      <svg ref={ref} />
    </>
  );
};
