import PropTypes from 'prop-types';

const Option = props => {
  const { value, text, label, disabled } = props;

  const isDisabled = disabled ? 'disabled' : false;

  return (
    <option value={value} disabled={isDisabled} label={label}>
      {text}
    </option>
  );
};

Option.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  keyValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { Option };
