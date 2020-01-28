import React from 'react';

function TabBar({ tab, setTab }) {
  return (
    <div className="tabs">
      <div
        className={tab === 'unanswered' ? 'active' : ''}
        onClick={() => tab !== 'unanswered' && setTab('unanswered')}
      >
          unanswered
      </div>
      <div
        className={tab === 'answered' ? 'active' : ''}
        onClick={() => tab !== 'answered' && setTab('answered')}
      >
        answered
      </div>
    </div>
  )
}

export default TabBar
