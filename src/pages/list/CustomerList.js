import "../../styles/list.css";
import Datatable from "../../components/datatable/Datatable";
import { userColumns, userRows } from "../../datatablesource";
import { useState } from "react";

const CustomerList = () => {
  const [data] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  return (
    <div className="list">
      <div className="listContainer">
        <Datatable
          title="All Customers"
          url="/customers/new"
          data={data}
          actionColumn={userColumns}
        />
      </div>
    </div>
  );
};

export default CustomerList;
