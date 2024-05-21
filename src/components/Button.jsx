
// diff bg-colors
function Button({ className, href, onClick, text, children }) {

  const classes = `relative inline-flex items-center justify-center rounded-full bg-n-1 h-6  transition-colors shadow-md px-8 py-5 ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
     <span className={spanClasses}>{text}{children}</span>
    </button>
  );


  const renderLink = () => (
    <a href={href} className={classes}>
       <span className={spanClasses}>{text}</span>
    </a>
  );
    return href ? renderLink() : renderButton();
}

export default Button