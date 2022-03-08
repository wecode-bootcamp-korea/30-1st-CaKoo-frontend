import './TextBox.scss';

function TextBox({ type, placeholder, className, name, maxLength, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      name={name}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
}

export default TextBox;
