import React, { useEffect, useRef, useState } from 'react';
import { useCart, useDispatch } from './Contextreducer';

export default function Cards(props) {
  let dispatch = useDispatch();
  const data = useCart();
  const priceref = useRef();
  let options = props.options;
  let priceoptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('');

  const handleCart = async () => {
    let food = data.find((item) => item.id === props.FoodItem._id);
    if (food && food.size === size) {
      await dispatch({ type: 'UPDATE', id: props.FoodItem._id, price: finalPrice, quantity: qty,img:props.FoodItem.img});
    } else {
      await dispatch({
        type: 'ADD',
        id: props.FoodItem._id,
        name: props.FoodItem.name,
        price: finalPrice,
        img:props.FoodItem.img,
        quantity: qty,
        size: size,
      });
    }
  };

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceref.current.value);
  }, []);

  return (
    <div>
      <div className="card mt-3" style={{ width: '18rem', maxWidth: '360px' }}>
        <img className="card-img-top" src={props.FoodItem.img} alt="some" height="200px" objectfit="fill" />
        <div className="card-body">
          <h5 className="card-title">{props.FoodItem.name}</h5>
          <div className="container w-100"></div>
          <select className="m-2  h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2  h-100 bg-success rounded" ref={priceref} onChange={(e) => setSize(e.target.value)}>
            {priceoptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>
          <div className="d-inline h-100 fs-3">₹{finalPrice}/-</div>
          <hr />
          <button className="btn bg-success justify-center  mx-2" onClick={handleCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
