import React from 'react';

interface ButtonProps {
  title: string;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button type="button" className={`py-2 px-4 font-medium text-white bg-blue-500 hover:bg-blue-700 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;