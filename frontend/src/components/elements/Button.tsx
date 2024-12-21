interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}
function Button(props: ButtonProps) {
  const { 
    children, 
    onClick, 
    className, 
    disabled,
    type = "button"
     
  } = props;
  return (
    <button 
      onClick={onClick} 
      className={className} 
      disabled={disabled}
      type={type}
      >
      {children}
    </button>
  )
}

export default Button;