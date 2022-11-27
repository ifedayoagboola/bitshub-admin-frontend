import React from "react";
import "./list.scss";
import Datatable from "../../components/datatable/Datatable";
import { userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const VendorList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/vendors/28394uhj" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to="/vendors/edit" style={{ textDecoration: "none" }}>
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
        <Datatable
          title="All Vendors"
          url="/vendors/new"
          data={data}
          actionColumn={actionColumn}
        />
      </div>
    </div>
  );
};

export default VendorList;
