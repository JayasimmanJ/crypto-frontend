import React from 'react';

function WalletInfo({ wallet, ethHolding }) {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">Wallet Info</div>
      <div className="card-body">
        <p><strong>USDT Balance:</strong> ${wallet.usdt}</p>
        <p><strong>ETH Holding:</strong> {ethHolding} ETH</p>
      </div>
    </div>
  );
}

export default WalletInfo;

