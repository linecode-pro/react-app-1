import React from 'react';

const ErrorDisplay = ({ error }) => {
  if (!error) return null;

  return (
    <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', margin: '10px 0' }}>
      Ошибка: {error}
    </div>
  );
};

export default ErrorDisplay;