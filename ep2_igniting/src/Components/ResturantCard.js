import { CDN_URL } from "../utils/costant";

const ResturantCard = (props) => {
  // const ResturantCard = ({resName="Hotel Not Found !"})=>{  //* Destructuring the props
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        alt="image not found"
        src={CDN_URL + resData.info.cloudinaryImageId}
        // {`{CDN_URL}${resData.info.cloudinaryImageId}`}
        style={{
          objectFit: "cover",
          height: "180px",
          width: "280px",
          borderRadius: "0.5em",
        }}
      />
      <h3 className="res-titile">{resData.info.name}</h3>
      <p>{resData.info.cuisines.join(", ")}</p>
      <span
        style={{
          backgroundColor: "#66b564",
          borderRadius: "0.5em",
          padding: "0.2em 0.5em",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {resData.info.avgRating + " star"}
      </span>
      <span
        style={{
          backgroundColor: "#2580c2",
          borderRadius: "0.5em",
          padding: "0.2em 0.5em",
          color: "#fff",
          fontWeight: "bold",
          marginLeft: "0.5em",
        }}
      >
        {resData.info.sla.deliveryTime + "M"}
      </span>
    </div>
  );
};

export default ResturantCard;
