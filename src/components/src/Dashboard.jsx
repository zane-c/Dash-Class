import React from 'react';
import { connect } from 'react-redux';
import Chat from './Chat.jsx';
import Polls from './Polls.jsx';
import QuestionQueue from './QuestionQueue.jsx';
import styles from './Dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state
    };
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <QuestionQueue />
        </div>
        <div className={styles.section}>
          <Polls />
          <Chat />
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Dashboard);
