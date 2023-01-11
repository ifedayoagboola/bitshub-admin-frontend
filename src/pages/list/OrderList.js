import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/list.css";
import Datatable from "../../components/datatable/Datatable";
import LoadingBox from "../../components/LoadingBox";
import CenterModal from "../../components/modals/CenterModal";
import DeleteProductModal from "../../components/modals/DeleteProductModal";
import MessageBox from "../../components/MessageBox";
import { listOrders } from "../../redux/slices/orderSlice";

const OrderList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { orders, loading, error } = useSelector((state) => state.listOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
  }, []);
  const cancelOrderHandler = (id) => {
    setOpenModal(!openModal);
    setOrderId(id);
  };
  const cancelOrderAction = () => {
    // dispatch(deleteProduct(productId));
    setOpenModal(!openModal);
  };

  const userColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row._id.substring(16, params.row._id.length)}
          </div>
        );
      },
    },
    {
      field: "customer",
      headerName: "Customer",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.user.name} {params.row.user.lastName}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 100,
      renderCell: (params) => {
        return <div>{params.row.user.email}</div>;
      },
    },
    {
      field: "items",
      headerName: "Items",
      width: 50,
      renderCell: (params) => {
        return <div>{params.row.orderItems.length}</div>;
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: (params) => {
        return <div>₦{params.row.shippingDetails.totalPrice}</div>;
      },
    },

    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        const { isPaid, isDelivered, PaidAt } = params.row;
        return (
          <div
            className={`rounded p-1 text-xs ${
              isPaid
                ? "bg-yellow-400 text-gray-800"
                : isPaid && isDelivered
                ? "bg-green-500 text-white"
                : "bg-gray-400 text-white"
            }`}
          >
            {isPaid
              ? "Paid"
              : isPaid && isDelivered
              ? "Delivered"
              : isPaid && !isDelivered
              ? "Awaiting delivery"
              : "Pending"}
          </div>
        );
      },
    },

    {
      field: "date",
      headerName: "Date",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            {params.row.createdAt
              ? params.row.createdAt.substring(0, 10)
              : "--"}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/orders/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <Link
              to={`/orders/${params.row._id}/edit`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Track</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => cancelOrderHandler(params.row._id)}
            >
              Cancel
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <div className="listContainer">
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {orders.length > 0 && (
          <Datatable
            title="All Orders"
            data={orders}
            actionColumn={userColumns}
            showCheckBox={true}
          />
        )}
      </div>
      {loading && (
        <CenterModal
          modalHandler={loading}
          className="bg-transparent text-white"
        >
          <LoadingBox />
        </CenterModal>
      )}

      {openModal && (
        <CenterModal modalHandler={cancelOrderHandler}>
          <DeleteProductModal
            action={cancelOrderAction}
            modalHandler={cancelOrderHandler}
          />
        </CenterModal>
      )}
    </div>
  );
};

export default OrderList;
