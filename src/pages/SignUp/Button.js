import './Button.scss';

function Button({ children, className }) {
  return (
    <button className={className} type="submit" disabled>
      {children}
    </button>
  );
}

export default Button;
