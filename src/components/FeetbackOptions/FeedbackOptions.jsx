import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const baseStyle = {
  // display: 'block',
  // textAlign: 'center',
  border: '2px solid green',
  borderRadius: '4px',
  marginRight: '20px',
  padding: '5px 10px',
};

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <span key={nanoid()} onClick={onLeaveFeedback} style={baseStyle}>
          {option}
        </span>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
