import React, { useState } from 'react';

function Withdraw({ setBalance, balance }) {
  const [amount, setAmount] = useState(0);
  const [accountNumber, setAccountNumber] = useState('');

  const handleWithdraw = () => {
    if (amount <= balance) {
      setBalance(balance - parseFloat(amount));
    } else {
      alert('Insufficient Balance');
    }
  };

  return (
    <div>
      <h2>Withdraw</h2>
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
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={() => setAmount(0)}>Cancel</button>
    </div>
  );
}

export default Withdraw;
