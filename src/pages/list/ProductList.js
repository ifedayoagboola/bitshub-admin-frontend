import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/apiCalls";
import "./list.scss";
import Datatable from "../../components/datatable/Datatable";
// import { userRows } from "../../datatablesource";

const ProductList = () => {
  // const [data, setData] = useState(userRows);
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(dispatch));
  }, [dispatch]);

  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
  };

  const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
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
      width: 230,
    },

    {
      field: "category",
      headerName: "Category",
      width: 100,
    },
    {
      field: "brand",
      headerName: "Brand",
      width: 160,
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
            <Link to="/products/edit" style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
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
