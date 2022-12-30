import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Datatable = ({ title, url, data, actionColumn }) => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        {url ? (
          <Link to={url} className="link">
            New Product
          </Link>
        ) : (
          ""
        )}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        getRowId={(row) => row._id}
        columns={actionColumn}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
