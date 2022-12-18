import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./list.scss";
import Datatable from "../../components/datatable/Datatable";
import { listProducts } from "../../redux/slices/productSlice";

const ProductList = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  console.log(products);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  const userColumns = [
    {
      field: "image",
      headerName: "Product",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img
              className="cellImg"
              src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="avatar"
            />
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
            {params.row.name}
          </div>
        );
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
        {loading && <div>Loading ... </div>}
        {error && <div>{error} </div>}
        {products.length > 0 && (
          <Datatable
            title="All Products"
            url="/products/new"
            data={products}
            actionColumn={userColumns}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList;
