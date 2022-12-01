import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/apiCalls";
import "./list.scss";
import Datatable from "../../components/datatable/Datatable";

const ProductList = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(dispatch));
  }, [dispatch]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  const userColumns = [
    { field: "_id", headerName: "ID", width: 230 },
    {
      field: "name",
      headerName: "Name",
      width: 230,
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
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/products/001" style={{ textDecoration: "none" }}>
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
