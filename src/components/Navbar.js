import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from './screen/Cart';
import { useCart } from './Contextreducer';

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  let data=useCart()

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand fs-1 fst-italic" to="/">FoodieFusion</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item active">
              <Link className="nav-link active fs-5" to="/">Home <span className="sr-only"></span></Link>
            </li>
            {localStorage.getItem("authToken") ? (
              <li className="nav-item active">
                <Link className="nav-link active fs-5" to="/myOrder">MyOrders <span className="sr-only"></span></Link>
              </li>
            ) : null}
          </ul>
          {!localStorage.getItem("authToken") ? (
            <div className='d-flex'>
              <Link className="btn bg-white text-success mx-1" to="/Login">Login</Link>
              <Link className="btn bg-white text-success mx-1" to="/Createuser">SignUp</Link>
            </div>
          ) : (
            <div>
              <div className='btn bg-white text-success mx-2' onClick={() => { setCartView(true) }}>MyCart
                <Badge pill bg="danger">{data.length}</Badge>
              </div>
              {cartView ? <Modal onClose={() => setCartView(false)}><Cart /></Modal> : null}
              <div className='btn bg-white text-danger  mx-2' onClick={handleLogout}>logout</div>
            </div>

          )}
        </div>
      </nav>
    </div>
  );
}
