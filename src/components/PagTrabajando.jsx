import React from 'react';

const ErrorComponent = () => {
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const imageStyles = {
    width: '75%',
    height: 'auto',
  };

  const textStyles = {
    textAlign: 'center',
    fontSize: '32px',
  };

  return (
    <div style={containerStyles}>
      <img
        src="https://imgur.com/L46g7me.jpeg"
        alt="Disculpe las molestias"
        style={imageStyles}
      />
      <p style={textStyles}>Disculpe las molestias</p>
    </div>
  );
};

export default ErrorComponent;
