import React, { useState } from 'react';

function Deposit({ setBalance, balance }) {
  const [amount, setAmount] = useState(0);
  const [accountNumber, setAccountNumber] = useState('');

  const handleDeposit = () => {
    setBalance(balance + parseFloat(amount));
  };

  return (
    <div>
      <h2>Deposit</h2>
      <input
        type="text"
        placeholder="Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={() => setAmount(0)}>Cancel</button>
    </div>
  );
}

export default Deposit;
