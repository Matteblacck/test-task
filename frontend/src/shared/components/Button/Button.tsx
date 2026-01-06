import styles from "./button.module.scss";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = "button", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={`${styles.button} ${className ?? ""}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;