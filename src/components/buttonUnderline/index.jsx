import './buttonUnderline.css';

function Button({ children, href, className = "" }) {
  return (
    <a href={href} className={`buttonUnderline ${className}`}>{children}</a>
  );
}

export default Button;
