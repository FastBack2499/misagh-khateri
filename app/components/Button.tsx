import clsx from "clsx";

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  disabled,
  classname
}) => {
  return (
    <div>
      <button onClick={onClick}
        type={type}
        disabled={disabled} className={clsx("rounded-lg border-2 border-gray-500 text-gray-500 px-2.5 py-1 font-semibold text-sm hover:scale-105 hover:text-gray-300 hover:border-gray-300 transition-all duration-300", classname)}>
        {children}
      </button>
    </div>
  )
}

export default Button