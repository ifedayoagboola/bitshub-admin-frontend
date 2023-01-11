import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import AdminLayout from "./layouts/AdminLayout";
import CustomerList from "./pages/list/CustomerList";
import SingleCustomer from "./pages/single/SingleCustomer";
import NewCustomer from "./pages/new/NewCustomer";
import SingleProduct from "./pages/single/SingleProduct";
import ProductList from "./pages/list/ProductList";
import EditProduct from "./pages/new/EditProduct";
import OrderList from "./pages/list/OrderList";
import SingleOrder from "./pages/single/SingleOrder";
import NewVendor from "./pages/new/NewVendor";
import VendorList from "./pages/list/VendorList";
import SingleVendor from "./pages/single/SingleVendor";
import NewProduct from "./pages/new/NewProduct";
// import AdminRoute from "./components/AdminRoute";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <AdminLayout>
                <Home />
              </AdminLayout>
            }
          />
          <Route index path="login" element={<Login />} />
          <Route path="customers">
            <Route
              index
              element={
                <AdminLayout>
                  <CustomerList />
                </AdminLayout>
              }
            />
            <Route
              index
              path=":customerId"
              element={
                <AdminLayout>
                  <SingleCustomer />
                </AdminLayout>
              }
            />
            <Route
              index
              path="new"
              element={
                <AdminLayout>
                  <NewCustomer />
                </AdminLayout>
              }
            />
            <Route
              index
              path="edit"
              element={
                <AdminLayout>
                  <NewCustomer />
                </AdminLayout>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <AdminLayout>
                  <ProductList />
                </AdminLayout>
              }
            />
            <Route
              index
              path=":productId"
              element={
                <AdminLayout>
                  <SingleProduct />
                </AdminLayout>
              }
            />
            <Route
              index
              path="new"
              element={
                <AdminLayout>
                  <NewProduct />
                </AdminLayout>
              }
            />
            <Route
              index
              path=":id/edit"
              element={
                <AdminLayout>
                  <EditProduct />
                </AdminLayout>
              }
            />
          </Route>
          <Route path="vendors">
            <Route
              index
              element={
                <AdminLayout>
                  <VendorList />
                </AdminLayout>
              }
            />
            <Route
              index
              path=":vendorId"
              element={
                <AdminLayout>
                  <SingleVendor />
                </AdminLayout>
              }
            />
            <Route
              index
              path="new"
              element={
                <AdminLayout>
                  <NewVendor />
                </AdminLayout>
              }
            />
            <Route
              index
              path="edit"
              element={
                <AdminLayout>
                  <NewVendor />
                </AdminLayout>
              }
            />
          </Route>
          <Route path="orders">
            <Route
              index
              element={
                <AdminLayout>
                  <OrderList />
                </AdminLayout>
              }
            />
            <Route
              index
              path=":orderId"
              element={
                <AdminLayout>
                  <SingleOrder />
                </AdminLayout>
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
