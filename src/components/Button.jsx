import { Link } from 'react-router-dom';
// diff bg-colors
function Button({ className, href, onClick, text, children }) {

  const classes = `relative inline-flex items-center justify-center rounded-full bg-n-1 h-6  transition-colors duration-300 ease-in-out shadow-md px-6 py-6 ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
     <span className={spanClasses}>{text}{children}</span>
    </button>
  );


  const renderLink = () => (
    <Link to={href} className={classes}>
       <span className={spanClasses}>{text}</span>
    </Link>
  );
    return href ? renderLink() : renderButton();
}

export default Button