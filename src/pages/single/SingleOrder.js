import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/list.css";
import Datatable from "../../components/datatable/Datatable";
import LoadingBox from "../../components/LoadingBox";
import CenterModal from "../../components/modals/CenterModal";
import MessageBox from "../../components/MessageBox";
import {
  deliverOrder,
  orderDetails,
  orderReset,
} from "../../redux/slices/orderSlice";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";

const SingleOrder = () => {
  const { order, loading, error } = useSelector((state) => state.singleOrder);
  const { order: delivered, loading: loadingDeliver } = useSelector(
    (state) => state.deliverOrder
  );

  const { orderId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderDetails(orderId));
    dispatch(orderReset());
  }, [dispatch, orderId, delivered]);

  const deliverOrderHandler = () => {
    dispatch(deliverOrder(orderId));
  };

  const userColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 300,
      renderCell: (params) => {
        return <div>{params?.row?._id}</div>;
      },
    },
    {
      field: "image",
      headerName: "IMAGE",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image} alt="avatar" />
          </div>
        );
      },
    },
    {
      field: "product",
      headerName: "PRODUCT",
      width: 300,
      renderCell: (params) => {
        return <div>{params.row.name}</div>;
      },
    },
    {
      field: "price",
      headerName: "PRICE/UNIT",
      width: 150,
      renderCell: (params) => {
        return <div>₦{params.row.price}</div>;
      },
    },
    {
      field: "quantity",
      headerName: "QUANTITY",
      width: 150,
      renderCell: (params) => {
        return <div>{params.row.qty}</div>;
      },
    },
    {
      field: "subtotal",
      headerName: "SUBTOTAL",
      width: 150,
      renderCell: (params) => {
        return <div>₦{params.row.price * params.row.qty}</div>;
      },
    },
  ];

  return (
    <div className="p-4">
      <Breadcrumbs page="Order details" />
      <div className="border rounded">
        <div className="flex items-center justify-between text-lg border-b p-4">
          <p>Order details</p>
          <div className="flex items-center justify-center gap-4">
            <div
              className={`rounded p-1 text-base ${
                order?.isPaid && order?.isDelivered
                  ? "bg-green-500 text-white"
                  : order?.isPaid && !order?.isDelivered
                  ? "bg-yellow-400 text-gray-800"
                  : "bg-gray-400 text-white"
              }`}
            >
              {order?.isPaid && order?.isDelivered
                ? `Delivered on: ${order?.deliveredAt.substring(0, 10)}`
                : order?.isPaid && !order?.isDelivered
                ? "Awaiting delivery"
                : "Awaiting payment"}
            </div>
            <p>Order ID: # {order?._id?.substring(16, order?._id?.length)}</p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-evenly gap-4">
            <div className="w-[300px] h-[200px] border rounded-lg">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-t-lg text-center">
                Customer:
              </div>
              <div className="p-4 text-sm text-gray-500">
                <span>
                  {order?.user?.name} {order?.user?.lastName}
                </span>
                <p>{order?.user?.email}</p>
                <p>{order?.user?.phone}</p>
              </div>
            </div>
            <div className="w-[300px] h-[200px] border rounded-lg">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-t-lg text-center">
                Shipped To:
              </div>
              <div className="p-4 text-sm text-gray-500">
                <p>{order?.shippingDetails?.fullName}</p>
                <p>
                  {order?.shippingDetails?.address},{" "}
                  {order?.shippingDetails?.city},{" "}
                  {order?.shippingDetails?.state}.{" "}
                </p>
                <p>{order?.shippingDetails?.phone}</p>
              </div>
            </div>
            <div className="w-[300px] h-[200px] border rounded-lg">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-t-lg text-center">
                Payment:
              </div>
              <div className="p-4 text-sm text-gray-500">
                <p>{order?.paymentResult?.id}</p>
                <p>{order?.paymentResult?.email_address}</p>
                <p>{order?.paymentResult?.update_time?.substring(0, 10)}</p>
              </div>
            </div>
            <div className="w-[300px] h-[200px] border rounded-lg">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-t-lg text-center">
                Order Date:
              </div>
              <div className="p-4 text-sm text-gray-500">
                {order?.createdAt}
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-2 mt-8 rounded-lg text-gray-800 text-center uppercase">
            Order summary
          </div>
        </div>
        <div>
          <div>
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            {order?.orderItems?.length > 0 && (
              <Datatable
                showCheckBox={false}
                data={order?.orderItems}
                actionColumn={userColumns}
                extraClass="h-[250px] pt-0"
              />
            )}
            <div className="flex items-center justify-between px-8">
              <div></div>
              <div className="w-[300px] space-y-2">
                <div className="flex items-center justify-between">
                  <p>Taxes</p>
                  <p>{order?.shippingDetails?.taxPrice}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Shipping</p>
                  <p>{order?.shippingDetails?.shippingPrice}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Total</p>
                  <p>{order?.shippingDetails?.totalPrice}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Payment Status</p>
                  <p>{order?.isPaid && "PAID"}</p>
                </div>
                {order?.isPaid && !order?.isDelivered && (
                  <Button
                    disabled={loadingDeliver}
                    onClick={deliverOrderHandler}
                    className="p-2"
                    primary
                    children="Deliver order"
                  />
                )}
              </div>
            </div>
          </div>

          {loading && (
            <CenterModal
              modalHandler={loading}
              className="bg-transparent text-white"
            >
              <LoadingBox />
            </CenterModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
