import React from 'react';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import styles from './Polls.scss';

class Polls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      answer: 'Merge sort', // set to first item in options array
      options: [
        { id: 1, text: 'Merge sort' },
        { id: 2, text: 'Quick sort' },
        { id: 3, text: 'Pogo sort' },
      ],
    };
    this.onChange = answer => this.setState({ answer });
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    this.setState({ submitted: true });
    // save answer to database
  }
  render() {
    const { answer, options, submitted } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          Polls
        </div>
        <div className={styles.content}>
          {options.length === 0 ?
            <div className={styles.pollText}>
              No active polls
            </div>
            :
            <div>
              <div className={styles.pollText}>
                What is your favorite sorting algorithm?
              </div>
              {submitted ?
                <div className={styles.answer}>
                  You picked {answer}
                </div>
                :
                <div className={styles.options}>
                  <RadioGroup onChange={this.onChange}>
                    {options.map(opt => (
                      <ReversedRadioButton key={opt.id} value={opt.text}>
                        {opt.text}
                      </ReversedRadioButton>
                    ))}
                  </RadioGroup>
                  <div
                    className={styles.button}
                    onClick={this.onSubmit}
                  >
                    Submit
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Polls;
