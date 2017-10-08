import React from 'react';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import styles from './QuestionQueue.scss';

class QuestionQueue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      questionQueue: [
        { id: 1, upvotes: 6, text: 'I don\'t understand inversions.', answered: false },
        { id: 2, upvotes: 12, text: 'How do I implement merge sort?', answered: true },
        { id: 3, upvotes: 2, text: 'What is a red black tree?', answered: false },
      ],
    };
  }
  render() {
    const { question, questionQueue } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          Question Queue
        </div>
        <div className={styles.input}>
          <form onSubmit={() => null}>
            <input
              type="text"
              onChange={e => this.setState({ question: e.target.value })}
              value={question}
              placeholder={'Ask a question'}
            />
          </form>
        </div>
        <div className={styles.questionQueue}>
          {questionQueue
            .filter(q => (q.text.toLowerCase().indexOf(question.toLowerCase()) !== -1))
            .map(ques => (
              <div className={styles.question} key={ques.id}>
                <div className={styles.upvotes}>
                  <div className={styles.arrow}>
                    <FaAngleUp size="15px" />
                  </div>
                  <div
                    data-answered={ques.answered}
                    className={styles.upvotesNumber}
                  >
                    {ques.upvotes}
                  </div>
                  <div className={styles.arrow}>
                    <FaAngleDown size="15px" />
                  </div>
                </div>
                <div className={styles.questionText}>
                  {ques.text}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default QuestionQueue;
