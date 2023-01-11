import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/list.css";
import Datatable from "../../components/datatable/Datatable";
import {
  deleteProduct,
  listProducts,
  productReset,
} from "../../redux/slices/productSlice";
import LoadingBox from "../../components/LoadingBox";
import CenterModal from "../../components/modals/CenterModal";
import DeleteProductModal from "../../components/modals/DeleteProductModal";
import MessageBox from "../../components/MessageBox";

const ProductList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [productId, setProductId] = useState("");

  const { products, loading, error } = useSelector((state) => state.products);
  const { loading: deleteLoading, deleteSuccess } = useSelector(
    (state) => state.deleteProduct
  );
  const update = useSelector((state) => state?.productUpdate);
  const { updateSuccess } = update;

  const create = useSelector((state) => state?.createProduct);
  const { postSuccess } = create;

  const dispatch = useDispatch();

  useEffect(() => {
    if (deleteSuccess || updateSuccess || postSuccess) {
      dispatch(productReset());
    } else {
      dispatch(listProducts());
    }
  }, [dispatch, deleteSuccess, postSuccess, updateSuccess]);

  const handleDelete = (id) => {
    setOpenModal(!openModal);
    setProductId(id);
  };
  const deleteAction = () => {
    dispatch(deleteProduct(productId));
    setOpenModal(!openModal);
  };

  const userColumns = [
    {
      field: "image",
      headerName: "Product",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image} alt="avatar" />
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row.name}</div>;
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: (params) => {
        return <div>₦{params.row.price}</div>;
      },
    },
    {
      field: "offer",
      headerName: "Offer",
      width: 100,
      renderCell: (params) => {
        return <div>25% OFF</div>;
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 100,
      renderCell: (params) => {
        return <div>{params.row.quantityInStock}</div>;
      },
    },

    {
      field: "category",
      headerName: "Category",
      width: 100,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 100,
      renderCell: (params) => {
        return <div>{params.row.brand}</div>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return <div>ACTIVE</div>;
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 100,
      renderCell: (params) => {
        return <div>{params.row.createdAt}</div>;
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
              to={`/products/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <Link
              to={`/products/${params.row._id}/edit`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
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
        {products.length > 0 && (
          <Datatable
            title="All Products"
            url="/products/new"
            data={products}
            actionColumn={userColumns}
            showCheckBox={true}
          />
        )}
      </div>
      {deleteLoading && (
        <CenterModal
          modalHandler={deleteLoading}
          className="bg-transparent text-white"
        >
          <LoadingBox />
        </CenterModal>
      )}
      {loading && (
        <CenterModal
          modalHandler={loading}
          className="bg-transparent text-white"
        >
          <LoadingBox />
        </CenterModal>
      )}

      {openModal && (
        <CenterModal modalHandler={handleDelete}>
          <DeleteProductModal
            action={deleteAction}
            modalHandler={handleDelete}
          />
        </CenterModal>
      )}
    </div>
  );
};

export default ProductList;
