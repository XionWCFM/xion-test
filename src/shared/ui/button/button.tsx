import React, { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {} & ComponentPropsWithoutRef<'button'>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={` py-4  text-white px-16 rounded-full bg-primary-500 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
