interface Props {
  content?: string;
  className?: string;
  onClick?: () => void;
}
const Button = ({ content, className, onClick }: Props) => (
  <button className={`btn ${className}`} onClick={onClick}>
    {content}
  </button>
);
export default Button;
