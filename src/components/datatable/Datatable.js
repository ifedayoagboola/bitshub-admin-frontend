import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = ({ title, url, data, actionColumn }) => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        {url ? (
          <Link to={url} className="link">
            Add New
          </Link>
        ) : (
          ""
        )}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
