// import React, { useState } from 'react';

// function OrderForm({ onPlaceOrder }) {
//     const [buyPrice, setBuyPrice] = useState('');
//     const [sellPrice, setSellPrice] = useState('');

//     return (
//         <div>
//             <div>
//                 <h3>Place Buy Order</h3>
//                 <input
//                     type="number"
//                     value={buyPrice}
//                     onChange={e => setBuyPrice(e.target.value)}
//                     placeholder="Enter buy price"
//                 />
//                 <button
//                     onClick={() => {
//                         if (!buyPrice || parseFloat(buyPrice) <= 0) {
//                             alert("Please enter a valid buy price.");
//                             return;
//                         }
//                         onPlaceOrder('buy', buyPrice);
//                         setBuyPrice('');
//                     }}
//                 >
//                     Buy at Price
//                 </button>
//             </div>

//             <div>
//                 <h3>Place Sell Order</h3>
//                 <input
//                     type="number"
//                     value={sellPrice}
//                     onChange={e => setSellPrice(e.target.value)}
//                     placeholder="Enter sell price"
//                 />
//                 <button
//                     onClick={() => {
//                         if (!sellPrice || parseFloat(sellPrice) <= 0) {
//                             alert("Please enter a valid sell price.");
//                             return;
//                         }
//                         onPlaceOrder('sell', sellPrice);
//                         setSellPrice('');
//                     }}
//                 >
//                     Sell at Price
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default OrderForm;

import React, { useState } from 'react';

function OrderForm({ onPlaceOrder }) {
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');

  return (
    <div className="card">
      <div className="card-header bg-success text-white">Place Orders</div>
      <div className="card-body">
        <div className="mb-3">
          <label>Buy Price</label>
          <input
            type="number"
            className="form-control"
            value={buyPrice}
            onChange={e => setBuyPrice(e.target.value)}
            placeholder="Enter buy price"
          />
          <button
            className="btn btn-success mt-2"
            onClick={() => {
              if (!buyPrice || parseFloat(buyPrice) <= 0) {
                alert("Enter valid buy price");
                return;
              }
              onPlaceOrder('buy', buyPrice);
              setBuyPrice('');
            }}
          >
            Buy at Price
          </button>
        </div>

        <div>
          <label>Sell Price</label>
          <input
            type="number"
            className="form-control"
            value={sellPrice}
            onChange={e => setSellPrice(e.target.value)}
            placeholder="Enter sell price"
          />
          <button
            className="btn btn-danger mt-2"
            onClick={() => {
              if (!sellPrice || parseFloat(sellPrice) <= 0) {
                alert("Enter valid sell price");
                return;
              }
              onPlaceOrder('sell', sellPrice);
              setSellPrice('');
            }}
          >
            Sell at Price
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
