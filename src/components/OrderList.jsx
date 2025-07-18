import React from 'react';

function OrderList({ orders }) {
  return (
    <div className="card">
      <div className="card-header bg-info text-white">Orders</div>
      <div className="card-body">
        <ul className="list-group">
          {orders.map(order => (
            <li key={order.id} className="list-group-item">
              <strong>{order.type.toUpperCase()}</strong> at <span className="text-primary">${order.price}</span> — {order.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OrderList;
