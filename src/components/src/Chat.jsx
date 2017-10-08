import React from 'react';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import styles from './Chat.scss';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      message: '',
      messageList: [
        { id: 1, text: 'Hello!', user: 'Freddy', time: '10123123' },
        { id: 2, text: 'Does anyone have the notes?', user: 'Sarah', time: '10123123' },
        { id: 3, text: 'This is my favorite class', user: 'Matt', time: '10123123' },
      ],
    };
    this.onSend = this.onSend.bind(this);
  }
  onSend(e) {
    e.preventDefault();
    const { message } = this.state;
    console.log('Send message: ', message);
    this.setState({ message: '' });
  }
  render() {
    const { isOpen, message, messageList } = this.state;
    return (
      <div className={styles.container}>
        <div
          className={styles.header}
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          <div className={styles.titleBar}>
            Chat
          </div>
          <div className={styles.toggleArrow}>
            {isOpen ?
              <FaAngleDown size="22px" color="#ccc" />
              :
              <FaAngleUp size="22px" color="#ccc" />
            }
          </div>
        </div>
        {isOpen &&
          <div className={styles.chat}>
            <div className={styles.messageArea}>
              {messageList.map(msg => (
                <div key={msg.id} className={styles.message}>
                  {msg.user}: {msg.text}
                </div>
              ))}
            </div>
            <div className={styles.input}>
              <form onSubmit={this.onSend}>
                <input
                  type="text"
                  onChange={e => this.setState({ message: e.target.value })}
                  value={message}
                  placeholder={'Say hi to your classmates'}
                />
              </form>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Chat;
