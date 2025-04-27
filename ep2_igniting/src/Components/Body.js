import ResturantCard from "./ResturantCard";
import resturantList from "../utils/mockData";


const Body = () => {
  return (
    <div className="body">
      <div className="search">Seaech</div>
      <div className="res-container">
        {resturantList.map((obj, index) => {
          return <ResturantCard resData={obj} key={Math.random()} />;
        })}
      </div>
    </div>
  );
};
export default Body;
