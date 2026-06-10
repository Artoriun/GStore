import "../Order.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  getOrderDetails,
  clearErrors,
} from "../../../../redux/actions/orderAction";
import Loader from "../../../layout/loader/Loader";
import MetaData from "../../../layout/MetaData";
import AppWrap from "../../../hoc/AppWrap";
import currency from "../../../helpers/currency";
import { toast } from "react-toastify";   // ← <-- NEW import

function OrderDetails() {
  const { token } = useSelector((state) => state.user);
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const { id } = useParams();

  /* ---------------------------------------------------------- */
  /* Replace the old alert‑style code */
  /* ---------------------------------------------------------- */
  useEffect(() => {
    /* Show error notification with toast (instead of alert.error) */
    if (error) {
      toast.error(error, { autoClose: 5000 });   // ← toast for errors
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(id, token));

    return () => {};
  }, [dispatch, error, id, token, dispatch]);   // ← removed `alert` from deps

  /* ---------------------------------------------------------- */
  /* Rest of render remains unchanged */
  /* ---------------------------------------------------------- */
  return (
    <div className="app__top-margin">
      <MetaData title="Order Details - gStore" />

      <div className="flex-container">
        {loading ? (
          <div
            style={{
              margin: "2rem",
            }}
          >
            <Loader />
          </div>
        ) : (
          <div className="order-details-box">
            <div className="box-header">
              <p>Order Info</p>
            </div>

            ... /* (original JSX omitted for brevity) */
          </div>
        )}
      </div>
    </div>
  );
}

export default AppWrap(OrderDetails);