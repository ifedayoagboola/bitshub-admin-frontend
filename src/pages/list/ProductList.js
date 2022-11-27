import React from "react";
import "./list.scss";
import Datatable from "../../components/datatable/Datatable";

const ProductList = () => {
  return (
    <div className="list">
      <div className="listContainer">
        <Datatable />
      </div>
    </div>
  );
};

export default ProductList;
