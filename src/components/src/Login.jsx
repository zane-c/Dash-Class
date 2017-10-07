import React from 'react';
import { connect } from 'react-redux';
import styles from './Login.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: 'join',
      joinCode: '',
      createCode: '',
    };
    this.onJoin = this.onJoin.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }
  onJoin(e) {
    e.preventDefault();
    console.log('join: ', this.state.joinCode);
  }
  onCreate(e) {
    e.preventDefault();
    console.log('create: ', this.state.createCode);
  }
  render() {
    const { tabName, joinCode, createCode } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.tabs}>
            <div
              className={styles.tab}
              data-active={tabName === 'join'}
              onClick={() => this.setState({ tabName: 'join' })}
            >
              Join
            </div>
            <div
              className={styles.tab}
              data-active={tabName === 'create'}
              onClick={() => this.setState({ tabName: 'create' })}
            >
              Create
            </div>
          </div>
          {tabName === 'join' ?
            <div className={styles.content}>
              <div>Enter class code to join</div>
              <form onSubmit={this.onJoin}>
                <input
                  type="text"
                  onChange={event => this.setState({ joinCode: event.target.value })}
                  value={joinCode}
                  placeholder={'CS195'}
                />
              </form>
            </div>
            :
            <div className={styles.content}>
              <div>Enter class name to start a session</div>
              <form onSubmit={this.onCreate}>
                <input
                  type="text"
                  onChange={event => this.setState({ createCode: event.target.value })}
                  value={createCode}
                  placeholder={'CS195'}
                />
              </form>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Login);
