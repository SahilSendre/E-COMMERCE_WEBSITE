import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function CartList({ cart }) {

  
  const navigate = useNavigate()
  const [CART, setCART] = useState([]);

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
  },[])
  useEffect(() => {
    setCART(cart);
  }, [cart]);


  const handleCartItems = ()=>{
    setCART([]);  
  }

  return (
    <div>
      {CART?.map((cartItem, cartindex) => {
        return (
            <div className="parent-cart">

          <div className="cart-css">
            <div className="cart-css-1">
            <img src={cartItem.image} />
            </div>
            <div className="cart-css-2">

            <span>{cartItem.title}</span>
            <div className="quant-cont">
              <div>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                        return cartindex === index
                        ? {
                            ...item,
                            quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                        }
                        : item;
                    });
                    setCART(_CART);
                }}
                >
                  -
                </button>
              </div>

              <span>{cartItem.quantity}</span>
              <div>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => {
                      const _CART = CART.map((item, index) => {
                      return cartindex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                }}
                >
                  +
                </button>
              </div>
            </div>
            <span>Rs.{cartItem.price * cartItem.quantity}</span>
        </div>
          </div>
        </div>
        );
      })}
      <br />
      <div className="totl-cont">

      <h4 style={{textAlign:"center"}}>
        {""}
        <h3>Total</h3> <span></span>
        {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
          0
          )}
      </h4>
      <div className="clear-cart">
        <Link to='/paymentDetails'>
      {CART.length >=1 && (
        <button className="btn btn-dark" onClick={handleCartItems}>Checkout</button>
        )
      }
      </Link>
      </div>

      <button className="btn btn-dark " onClick={()=>{
            localStorage.removeItem('token');
            navigate('/login')
          }} style={{marginLeft:'1rem'}}>
            Logout
          </button>
      </div>
    </div>
  );
}

export default CartList;
