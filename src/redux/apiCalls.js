// import Axios from "axios";
// import {
//   productError,
//   productRequest,
//   productSuccess,
// } from "./slices/productSlice";

// const BASE_URL = "https://bitshub-api.herokuapp.com";

// export const listProducts = () => async (dispatch) => {
//   dispatch(productRequest());
//   try {
//     const { data } = await Axios.get(`${BASE_URL}/api/products`);
//     dispatch(productSuccess(data));
//   } catch (error) {
//     dispatch(
//       productError(
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message
//       )
//     );
//   }
// };
