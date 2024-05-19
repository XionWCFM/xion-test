import React, { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {} & ComponentPropsWithoutRef<'button'>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={` py-4 px-8 rounded-full bg-purple-400 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
