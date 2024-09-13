import React, { useState } from 'react';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

function App() {
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [balance, setBalance] = useState(0);

  const handleDeposit = () => {
    setShowDeposit(true);
    setShowWithdraw(false);
  };

  const handleWithdraw = () => {
    setShowWithdraw(true);
    setShowDeposit(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>My Bank</h1>
      <img src="/bank-logo.png" alt="Bank Logo" style={{ width: '150px', height: 'auto' }} />
      <h2>Current Balance: ${balance}</h2>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>

      {showDeposit && <Deposit setBalance={setBalance} balance={balance} />}
      {showWithdraw && <Withdraw setBalance={setBalance} balance={balance} />}
    </div>
  );
}

export default App;
