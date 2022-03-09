import './Button.scss';

function Button({ className, value }) {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
}

export default Button;
