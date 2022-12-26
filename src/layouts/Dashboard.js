import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./dashboard.css";

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      <div className="child">{children}</div>
    </div>
  );
};

export default Dashboard;
