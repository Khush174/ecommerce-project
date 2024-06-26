import React, { useEffect, useState } from 'react'
import "./Products.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import {clearErrors, getProduct} from "../../actions/productAction";
import Loader from "../layout/loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import MetaData from "../layout/MetaData";

const categories = [
  "Laptop",
  "EarPhones",
  "HeadPhones",
  "TV",
  "Mobile",
  "SmartWatch",
  "hard disk",
];

const Products = () => {
    const { keyword } = useParams();
    const dispatch = useDispatch();


    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 150000]);
    const [category, setCategory] = useState("categories");
    const [ratings, setRatings] = useState(0);


    const { products, loading, error, productsCount, resultPerPage, filteredProductsCount } = useSelector(
        (state) => state.products
    );

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
      };

      const priceHandler = (event, newPrice) => {
        setCurrentPage(1);
        setPrice(newPrice);
        setCategory(category);
      };
      
      let count = filteredProductsCount;
      
      useEffect(() => {
        if (error) {
          dispatch(clearErrors());
        }

        dispatch(getProduct(keyword, currentPage, price, category, ratings));
      }, [dispatch, keyword, currentPage, price, category, ratings, error]);
      
      
    
    return (
    <> 
    { loading ? (
    <Loader/> 
   ): (
    <>
    <MetaData title="PRODUCTS -- ECOMMERCE" />
    <h2 className='productsHeading'>Products</h2>

    <div className='products'>
        {
            products && 
            products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))
        }

    </div>

    <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={150000}
            />

             <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            
            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
   </div>
   {resultPerPage < count && (
    <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
             )}
    </>
       )}
       </>
    );
};

export default Products

 