import React from "react";
import styles from './style.module.scss'
export type IButton = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <button
      className={`${styles.primaryButton} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
