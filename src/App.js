import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Dashboard from "./layouts/Dashboard";
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

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Dashboard>
                <Home />
              </Dashboard>
            }
          />
          <Route index path="login" element={<Login />} />
          <Route path="customers">
            <Route
              index
              element={
                <Dashboard>
                  <CustomerList />
                </Dashboard>
              }
            />
            <Route
              index
              path=":customerId"
              element={
                <Dashboard>
                  <SingleCustomer />
                </Dashboard>
              }
            />
            <Route
              index
              path="new"
              element={
                <Dashboard>
                  <NewCustomer />
                </Dashboard>
              }
            />
            <Route
              index
              path="edit"
              element={
                <Dashboard>
                  <NewCustomer />
                </Dashboard>
              }
            />
          </Route>
          <Route path="products">
            <Route
              index
              element={
                <Dashboard>
                  <ProductList />
                </Dashboard>
              }
            />
            <Route
              index
              path=":productId"
              element={
                <Dashboard>
                  <SingleProduct />
                </Dashboard>
              }
            />
            <Route
              index
              path="new"
              element={
                <Dashboard>
                  <EditProduct />
                </Dashboard>
              }
            />
            <Route
              index
              path=":id/edit"
              element={
                <Dashboard>
                  <EditProduct />
                </Dashboard>
              }
            />
          </Route>
          <Route path="vendors">
            <Route
              index
              element={
                <Dashboard>
                  <VendorList />
                </Dashboard>
              }
            />
            <Route
              index
              path=":vendorId"
              element={
                <Dashboard>
                  <SingleVendor />
                </Dashboard>
              }
            />
            <Route
              index
              path="new"
              element={
                <Dashboard>
                  <NewVendor />
                </Dashboard>
              }
            />
            <Route
              index
              path="edit"
              element={
                <Dashboard>
                  <NewVendor />
                </Dashboard>
              }
            />
          </Route>
          <Route path="orders">
            <Route
              index
              element={
                <Dashboard>
                  <OrderList />
                </Dashboard>
              }
            />
            <Route
              index
              path=":orderId"
              element={
                <Dashboard>
                  <SingleOrder />
                </Dashboard>
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
