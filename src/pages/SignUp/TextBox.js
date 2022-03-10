import './TextBox.scss';

function TextBox({
  children,
  label,
  type,
  placeholder,
  className,
  name,
  onChange,
}) {
  return (
    <div className="row">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        name={name}
        onChange={onChange}
      />
      {children}
    </div>
  );
}

export default TextBox;
