import React, { useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData"
import { getProduct } from "../../actions/productAction"
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/loader/Loader";


const Home = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { loading, products} = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      <>{loading ? (
        <Loader />
      ):(
      <>
     <MetaData title="ELECTROZONE"/>
      <div className="banner">
        <p>welcome to Electrozone</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
            <button>
                Scroll < CgMouse />
            </button>
        </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
          {products && products.map((product) =>( <ProductCard key={product._id} product={product} />))}
        </div>
      </>
      )}
      </>
    </div>

  );
};

export default Home

