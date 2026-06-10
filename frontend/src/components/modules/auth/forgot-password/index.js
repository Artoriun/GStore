import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import {
  clearErrors,
  forgotPassword,
} from "../../../../redux/actions/userAction";
import { FORGOT_PASSWORD_RESET } from "../../../../redux/constants/userConstants";
import Loader from "../../../layout/loader/Loader";
import MetaData from "../../../layout/MetaData";
import Logo from "../../../../assets/images/logo.png";
import { toast } from "react-toastify";

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, message } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error, { autoClose: 5000 });
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message, { autoClose: 5000 });
      navigate("/auth/login");

      dispatch({
        type: FORGOT_PASSWORD_RESET,
      });
    }

    return () => {};
  }, [dispatch, error, message, navigate]);

  return (
    <>
      <div>
        <MetaData title="Forgot Password - gStore" />

        <div className="app__flex-container">
          <form className="app__flex" onSubmit={forgotPasswordSubmit}>
            {loading && <Loader />}

            <div
              className="logo"
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                className="logo-img"
                width="100%"
                height="100%"
                src={Logo}
                alt="logo-img"
                loading="lazy"
              />
            </div>

            <p className="title">Forgot Password</p>

            <p className="subtitle">
              Enter your email address associated with your account to get
              password reset link.
            </p>

            <div className="form-control">
              <HiMail />
              <input
                type="email"
                placeholder="Email"
                required
                disabled={loading}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Get Link"
              disabled={loading}
              className="rounded-filled-btn"
              style={{
                marginTop: 20,
              }}
            />

            <div
              className="form-control"
              style={{
                margin: 0,
                marginTop: 20,
              }}
            >
              <Link to="/auth/login">
                <BiArrowBack /> Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
