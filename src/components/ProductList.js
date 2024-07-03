import React from "react";
import { useState, useEffect } from "react";
import { Pagenation } from "./Pagenation";
import { Link } from "react-router-dom";
export default function ProductList({ product, addToCart }) {
  // function truncateText(selector, maxLength) {
  //     var element = document.querySelector(selector),
  //         truncated = element.innerText;

  //     if (truncated.length > maxLength) {
  //         truncated = truncated.substr(0,maxLength) + '...';
  //     }
  //     return truncated;
  // }

  // document.querySelector('p').innerText = truncateText('p', 107);
  const [catdata, setCatdata] = useState(product);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(6);

  useEffect(() => {
    setCatdata(product);
  }, [product]);

  const filterResult = (catItem) => {
    const result = product.filter((currData) => {
      return currData.category === catItem;
    });
    setCatdata(result);
  };

  const handleSortLtoH = () => {
    const sortedProducts = [...catdata].sort((a, b) => a.price - b.price);
    setCatdata(sortedProducts);
  };
  const handleSortHtoL = () => {
    const sortedProducts = [...catdata].sort((a, b) => b.price - a.price);
    setCatdata(sortedProducts);
  };

  // pagination logic
  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = catdata.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className="dropdown bg-secondary ">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Category
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button
            className="dropdown-item "
            onClick={() => setCatdata(product)}
          >
            All
          </button>
          <button
            className="dropdown-item "
            onClick={() => filterResult("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="dropdown-item "
            onClick={() => filterResult("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="dropdown-item "
            onClick={() => filterResult("electronics")}
          >
            Electronics
          </button>
          <button
            className="dropdown-item "
            onClick={() => filterResult("women's clothing")}
          >
            Women's Clothing
          </button>
        </div>

        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button className="dropdown-item " onClick={handleSortHtoL}>
            High to Low
          </button>
          <button className="dropdown-item " onClick={handleSortLtoH}>
            Low to High
          </button>
        </div>
      </div>
      <div className="flex product-cont container-fluid ">
        {currentPosts.map((productItem, productIndex) => {
          return (
            <div>
              <div className="product-item" key={productItem.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={productItem.image} key={productItem.image} />
                  <div className="card-body">
                    <h5 className="card-title " key={productItem.title}>
                      {productItem.title.slice(0,20)}...
                    </h5>
                    {/* <p className="card-text" key={productItem.description}>{productItem.description}...</p> */}
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
                    <Link to={`/detailProduct/${productItem.id}`}>
                        <button className="btn btn-dark ms-3">View</button>
                    </Link>
                  </div>
                
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="container-fluid pagen-css">
        <Pagenation
          PostsPerPage={PostsPerPage}
          totalPosts={catdata.length}
          paginate={setCurrentPage} // Update the current page
        />
      </div>
      {/* <div className="d-flex justify-content-between w-100 p-3" style={{backgroundColor:'#41d5fe'}}>
    <button type="button" className="btn btn-dark ms-5">&laquo; Previous</button>  
    <button type="button" className="btn btn-dark me-5">Next &raquo;</button>  
    </div> */}
    </>
  );
}
