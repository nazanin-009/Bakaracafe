import "./style.css";
function FoodItem(attrs: {
  foodname: string;
  image: any;
  price: string;
  description: string;
}) {
  return (
    <article className="fish">
      <img src={attrs.image} alt="attrs.image" />
      <h3>{attrs.foodname}</h3>
      <p dir="rtl">{attrs.description}</p>
      <strong>
        <span dir="rtl" className="price">
          {attrs.price}
        </span>
      </strong>
    </article>
  );
}
export default FoodItem;
