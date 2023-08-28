import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color: string;
}
const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
