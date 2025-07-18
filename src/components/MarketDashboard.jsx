import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WalletInfo from './WalletInfo';
import OrderForm from './OrderForm';
import OrderList from './OrderList';
import 'bootstrap/dist/css/bootstrap.min.css';

function MarketDashboard() {
  const [ethPrice, setEthPrice] = useState(0);
  const [wallet, setWallet] = useState({ usdt: 0 });
  const [ethHolding, setEthHolding] = useState(0);
  const [orders, setOrders] = useState([]);
  const [priceError, setPriceError] = useState('');

  const fetchPrice = async () => {
    try {
      const res = await axios.get('/price');
      setEthPrice(res.data.ethPrice);
      setPriceError('');
    } catch (err) {
      console.error("Error fetching price:", err.message);
      setPriceError("Failed to fetch ETH price. Showing last known price.");
    }
  };

  const fetchWallet = async () => {
    try {
      const res = await axios.get('/wallet');
      setWallet(res.data.wallet);
      setEthHolding(res.data.ethHolding);
    } catch (err) {
      console.error("Error fetching wallet:", err.message);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get('/orders');
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err.message);
    }
  };

  const placeOrder = async (type, price) => {
    try {
      await axios.post('/order', { type, price: parseFloat(price) });
      fetchOrders();
    } catch (err) {
      console.error("Error placing order:", err.message);
    }
  };

  useEffect(() => {
    fetchPrice();
    fetchWallet();
    fetchOrders();
    const interval = setInterval(() => {
      fetchPrice();
      fetchWallet();
      fetchOrders();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <h2>Crypto Market Dashboard</h2>
        <h4 className="text-success">ETH Price: ${ethPrice.toFixed(2)}</h4>
        {priceError && <div className="alert alert-warning">{priceError}</div>}
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <WalletInfo wallet={wallet} ethHolding={ethHolding} />
        </div>
        <div className="col-md-4 mb-4">
          <OrderForm onPlaceOrder={placeOrder} />
        </div>
        <div className="col-md-4">
          <OrderList orders={orders} />
        </div>
      </div>
    </div>
  );
}

export default MarketDashboard;
