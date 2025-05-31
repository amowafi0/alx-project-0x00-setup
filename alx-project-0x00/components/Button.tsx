import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors ${styles}`}>
      {title}
    </button>
  )
}

export default Button;