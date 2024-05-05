import React from 'react'

const Alert: React.FC<AlertProps> = ({ title }: AlertProps) => {
  return (
    <div className="alert">
      {title}
    </div>
  );
};


export default Alert
