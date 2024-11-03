import { text } from "stream/consumers";
import "./style.css";
function FoodItem(attrs: {
  foodname: string;
  image: any;
  price: string;
  description: string;
  count: number;
}) {
  let foodAvailabiltyClass ="available";
  let CountSpan=<span>{attrs.count}</span>;
  if (attrs.count ==-1) {
    foodAvailabiltyClass ="available";
    CountSpan = <span>&#8734;</span > ;
  }
  if (attrs.count ==0) {
    foodAvailabiltyClass ="unavailable";
    CountSpan = <></> ;
  }
  return (
    <article className={"fish " +foodAvailabiltyClass}>
      <img src={attrs.image} alt="attrs.image" />
      <h3>{attrs.foodname}</h3>
      <p dir="rtl">{attrs.description}</p>
            <strong>
        <div dir="rtl" className="price">
          {attrs.price}
        </div>
      </strong>
      {CountSpan}
    </article>
  );
}
export default FoodItem;
