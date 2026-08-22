import { Link } from "react-router-dom";

export default function Header({ cart }) {

  const items = Object.values(cart);

  function quantitySubtotal(array) {
      let total = 0;
      for (let i = 0; i < array.length; i++) {
          total = total + array[i].quantity
      }
      return total;
  }

  let totalQuantity = quantitySubtotal(items);

  return (
    <header>
      <h1>Electronix</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <div className="counter">
            <li><Link to="/cart">Cart</Link></li>
            <p className="shopCounter">{totalQuantity}</p>
          </div>
        </ul>
      </nav>
    </header>
  );
}