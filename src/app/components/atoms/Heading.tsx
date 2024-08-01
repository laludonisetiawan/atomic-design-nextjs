import React from 'react';

interface InputProps {
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <input
      className="border-2 border-gray-300 p-2 rounded"
      placeholder={placeholder}
    />
  );
};

export default Input;
