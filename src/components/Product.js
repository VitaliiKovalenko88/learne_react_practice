const Product = props => (
  <div>
    <img src={props.imgUrl} alt={props.name} width="640" />
    <h2>{props.name}</h2>
    <p>Price: {props.price}$</p>
    <button type="button">Add to cart</button>
  </div>
);
export default Product;
