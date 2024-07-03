import React, { useState } from 'react';

const SearchComponent = ({ productData, addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const filteredProducts = productData.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search products by title..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="search-results">
        {searchResults.length > 0 ? (
          searchResults.map((productItem, index) => (
           <div className="container-fluid d-flex flex-row">

            <div className="product-item d-flex" key={index}>
               <div className="card" style={{ width: "18rem" }}>
                  <img src={productItem.image} key={productItem.image} />
                  <div className="card-body">
                    <h5 className="card-title " key={productItem.title}>
                      {productItem.title.slice(0,20)}...
                    </h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li
                      className="list-group-item"
                      key={productItem.rating.rate}
                      >
                      {productItem.rating.rate}
                    </li>
                    <li
                      className="list-group-item"
                      key={productItem.rating.count}
                    >
                      {productItem.rating.count}
                    </li>
                    <li className="list-group-item" key={productItem.price}>
                      Rs. {productItem.price}/-
                    </li>
                  </ul>
                  <div className="card-body">
                    <button
                      className="btn btn-dark"
                      onClick={() => addToCart(productItem)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
            </div>
        </div> 
          ))
        ) : (
          <p>No products found for the given search query.</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;