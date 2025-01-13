import React, { useState } from 'react';

const WelcomeMessage = ({ appName }) => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to {appName}!</h1>
      <p>This app demonstrates React basics.</p>
      <p>You’ve clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
};

export default WelcomeMessage;