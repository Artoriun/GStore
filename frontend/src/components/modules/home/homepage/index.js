import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getProducts,
  clearErrors,
} from "../../../../redux/actions/productAction";
import Loader from "../../../layout/loader/Loader";
import MetaData from "../../../layout/MetaData";
import AppWrap from "../../../hoc/AppWrap";
import ProductCard from "../../../common/product-card";
import { toast } from "react-toastify";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 5000 });
      dispatch(clearErrors());
    }

    dispatch(getProducts());
    return () => { };
  }, [dispatch, error]);

  return (
    <div className="app__top-margin">
      <MetaData title="Welcome to gStore" />

      <div className="flex-container">
        <div className="head-text">Featured Products</div>

        <div className="product-list-container">
          {loading ? (
            <Loader />
          ) : (
            products && products.map((product, i) => {
              return <ProductCard key={i} product={product} />;
            })
          )}
        </div>

        <button
          className="rounded-outlined-btn"
          onClick={() => navigate("/products")}
        >
          View More Products
        </button>
      </div>
    </div>
  );
}

export default AppWrap(Home);
