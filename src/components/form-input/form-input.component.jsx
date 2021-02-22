import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...additionalProps }) => {
  const { multiline, ...otherProps } = additionalProps;
  return (
    <div className="group">
        <textarea
          rows="4"
          className="form-input"
          onChange={handleChange}
          {...otherProps}
        />
      {
        // whenever the user has typed in anything, shrink
        // mainly for browsers that have auto-complete
        label ? (
          <label
            className={`${otherProps.value ? "shrink" : null} form-input-label`}
          >
            {label}
          </label>
        ) : null
      }
    </div>
  );
};

export default FormInput;
