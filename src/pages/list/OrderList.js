import "./list.scss";
import Datatable from "../../components/datatable/Datatable";
import { userColumns, userRows } from "../../datatablesource";
import { useState } from "react";

const OrderList = () => {
  const [data] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  return (
    <div className="list">
      <div className="listContainer">
        <Datatable title="All Orders" data={data} actionColumn={userColumns} />
      </div>
    </div>
  );
};

export default OrderList;
