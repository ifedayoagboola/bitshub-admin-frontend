import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import LoadingBox from "../../components/LoadingBox";
import { signin } from "../../redux/slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, userInfo } = useSelector((state) => state?.userSignin);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!loading && userInfo?.name) {
      navigate("/");
    }
    console.log(loading, userInfo);
  }, [loading, navigate, userInfo]);

  const signinHandler = (e) => {
    e.preventDefault();
    dispatch(signin({ email, password }));
  };
  return (
    <div className="container py-16">
      {loading ? (
        <LoadingBox />
      ) : (
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Login if you are a returning user
          </p>
          <form onSubmit={signinHandler}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="text-gray-600 mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-gray-600 mb-2 block">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreement"
                  className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label
                  htmlFor="agreement"
                  className="text-gray-600 ml-3 cursor pointer"
                >
                  Remember me
                </label>
              </div>
              <Link to="/" className="text-primary cursor-pointer">
                Forgot password?
              </Link>
            </div>
            <div className="mt-4">
              <button className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                Login
              </button>
            </div>
          </form>
          <div className="flex mt-6 justify-center relative">
            <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
              or login with
            </div>
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
          </div>
          <div className="flex mt-4 gap-4">
            <a
              href="/"
              className="w-1/2 py-2 text-center text-white bg-blue-800 hover:bg-blue-700 rounded uppercase font-roboto font-medium text-sm"
            >
              Facebook
            </a>
            <a
              href="/"
              className="w-1/2 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-500 rounded uppercase font-roboto font-medium text-sm"
            >
              Google
            </a>
          </div>
          <p className="mt-4 text-gray-600 text-center">
            Don't have an account?
            <span className="text-primary cursor-pointer">
              <Link to={`/register?redirect=${redirect}`}>Create account</Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;

// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { signin } from "../../redux/slices/userSlice";
// import { toast } from "react-toastify";
// import LoadingBox from "../../components/LoadingBox";

// const Login = () => {
//   const navigate = useNavigate();
//   const { search } = useLocation();
//   const redirectInUrl = new URLSearchParams(search).get("redirect");
//   const redirect = redirectInUrl ? redirectInUrl : "/";

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect);
//     }
//   }, [redirect, userInfo, navigate]);

// };
// export default Login;
