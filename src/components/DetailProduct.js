import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetailProduct({ product, addToCart }) {
  const { id } = useParams(); // Get the product ID from the URL parameter
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Quantity of the selected product

  useEffect(() => {
    // Filter the product data to find the selected product by ID
    const productDetail = product.find(item => item.id.toString() === id.toString());
    setSelectedProduct(productDetail);
  }, [id, product]);

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart({ ...selectedProduct, quantity }); // Add the selected product to the cart with its quantity
      // alert('Product added to cart successfully!');
    }
  };

  if (!selectedProduct) {
    return <div>Loading...</div>; // Display a loading message while fetching the product details
  }

  return (
    <div className='container-fluid detailProd-css' >
      <div className="card mb-3 my-5">
        <img src={selectedProduct.image} className="card-img-top" alt={selectedProduct.title} />
        <div className="card-body">
          <h5 className="card-title">{selectedProduct.title}</h5>
          <p className="card-text">{selectedProduct.description}</p>
          <p className="card-text">Price: Rs. {selectedProduct.price}/-</p>
          {/* <div>
            <label>
              Quantity:
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </label>
          </div> */}
          <button className="btn btn-dark" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
