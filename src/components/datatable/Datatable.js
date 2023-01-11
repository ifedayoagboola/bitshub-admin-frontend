import { useState } from "react";
import { useDispatch } from "react-redux";
import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/slices/productSlice";
import CenterModal from "../modals/CenterModal";
import DeleteProductModal from "../modals/DeleteProductModal";

const Datatable = ({
  title,
  url,
  data,
  actionColumn,
  showCheckBox,
  extraClass,
}) => {
  const [idArray, setIdArray] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();

  const handleBulkDelete = () => {
    setOpenModal(!openModal);
  };
  const deleteAction = () => {
    idArray.forEach((id) => {
      dispatch(deleteProduct(id));
    });
    setOpenModal(!openModal);
  };
  return (
    <div className={`datatable ${extraClass}`}>
      <div className="datatableTitle">
        <div>
          {title}
          {idArray.length > 0 && (
            <button
              onClick={handleBulkDelete}
              className="ml-2 text-base text-red-500 p-2 bg-transparent border border-red-500 rounded"
            >
              Bulk Delete
            </button>
          )}
        </div>
        {url ? (
          <Link to={url} className="link">
            New Product
          </Link>
        ) : (
          ""
        )}
      </div>
      <DataGrid
        aria-label="simple table"
        className="datagrid"
        rows={data}
        getRowId={(row) => row._id}
        columns={actionColumn}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection={showCheckBox}
        onSelectionModelChange={(data) => {
          setIdArray(data);
        }}
      />
      {openModal && (
        <CenterModal modalHandler={handleBulkDelete}>
          <DeleteProductModal
            action={deleteAction}
            modalHandler={handleBulkDelete}
          />
        </CenterModal>
      )}
    </div>
  );
};

export default Datatable;
