interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: "text" | "password" | "email";
  disabled?: boolean;
  id?: string;
}

function Input( props: InputProps) {
  const { 
    placeholder,
    onChange, 
    className, 
    type = "text",
    id
  } = props;

  return (
    <input 
      onChange={onChange}
      className={className}
      type={type}
      placeholder={placeholder}
      id={id}
    />
  )
}

export default Input;