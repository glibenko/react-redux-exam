import React, { useState } from 'react';
import { connect } from 'react-redux';
import TabBar from './TabBar';
import QuestionsList from './QuestionsList';

function HomePage({ questions, dispatch }) {
  const [tab, setTab] = useState('unanswered');

  return (
    <div style={{ width: 600, margin: '0 auto' }}>
      <TabBar tab={tab} setTab={setTab} />
      {tab === 'answered'
        ? (
          <QuestionsList type="answered" />
        ) : (
          <QuestionsList type="unanswered" />
        )}
    </div>
  )
}

const mapStateToProps = ({ questions }) => ({
  questions
});

export default connect(mapStateToProps)(HomePage)
