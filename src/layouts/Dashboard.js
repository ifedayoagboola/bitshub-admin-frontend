import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./dashboard.scss";

const Dashboard = ({ children }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
