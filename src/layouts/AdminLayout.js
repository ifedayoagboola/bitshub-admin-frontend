import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./dashboard.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";

const AdminLayout = ({ children }) => {
  const { userInfo, loading } = useSelector((state) => state?.userSignin);
  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      {loading ? (
        <LoadingBox />
      ) : userInfo && userInfo.isAdmin ? (
        <div className="child">{children}</div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default AdminLayout;
