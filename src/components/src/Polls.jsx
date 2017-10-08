import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import { updatePolls } from '../../actions/dashboard.js';
import styles from './Polls.scss';

class Polls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      answer: null,
    };
    this.onChange = answer => this.setState({ answer });
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(defaultOption) {
    const { pollData } = this.props;
    const answer = this.state.answer || defaultOption;

    const newData = pollData.map((poll) => {
      const copy = poll;
      if (poll.state !== 'inactive') {
        copy.options = poll.options.map((opt) => {
          const copy2 = opt;
          if (copy2.text === answer) {
            copy2.votes += 1;
          }
          return copy2;
        });
      }
      return copy;
    });

    this.setState({ submitted: true });
    this.props.updatePollsAction(newData);
  }
  render() {
    const { answer, submitted } = this.state;
    const { pollData } = this.props;
    const activePoll = pollData.filter(poll => (poll.state !== 'inactive'))[0];

    return (
      <div className={styles.container}>
        <div className={styles.title}>
          Polls
        </div>
        <div className={styles.content}>
          {!activePoll ?
            <div className={styles.pollText}>
              No active polls
            </div>
            :
            <div>
              <div className={styles.pollText}>
                {activePoll.text}
              </div>
              {submitted ?
                <div className={styles.answer}>
                  You picked {answer || activePoll.options[0].text}
                </div>
                :
                <div className={styles.options}>
                  <RadioGroup onChange={this.onChange}>
                    {activePoll.options.map((opt, idx) => (
                      <ReversedRadioButton
                        key={`${opt.text}${idx}`}
                        value={opt.text}
                      >
                        {opt.text}
                      </ReversedRadioButton>
                    ))}
                  </RadioGroup>
                  <div
                    className={styles.button}
                    onClick={() => this.onSubmit(activePoll.options[0].text)}
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

Polls.propTypes = {
  pollData: PropTypes.array.isRequired,
  updatePollsAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pollData: state.dashboard.pollData,
});

const mapDispatchToProps = dispatch => ({
  updatePollsAction: data => dispatch(updatePolls(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
