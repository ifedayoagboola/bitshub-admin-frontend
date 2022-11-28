import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { Counter } from "../../features/counter/Counter";

const Home = () => {
  return (
    <div>
      {/* <Counter /> */}
      <div className="widgets">
        <Widget type="customer" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table />
      </div>
    </div>
  );
};

export default Home;
