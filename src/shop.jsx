import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const [quantities, setQuantities] = useState({});

  const changeQty = (id, change, added) => {
    setQuantities(prev => ({
        ...prev,
        [id]: added ? Math.max(0, (prev[id] || 0) + change) : 0,
    }));
  };

  const {cart, setCart} = useOutletContext();

 function addToCart(product, quantity) {
  changeQty (product.id, 0, false);
  {quantity > 0 ?
    setCart(prevCart => ({
    ...prevCart,
    [product.id]: {
      id: product.id,
      title:product.title,
      img:product.image,
      price:product.price,
      quantity: (prevCart[product.id]?.quantity || 0) + quantity,
    },
  })) :
  console.log("not adding anything to cart")};
  console.log(cart);
 };

  return (
    <div className="productwrapper">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={product.id} className={"productcardswrapper"}>
              <div className="productcard">
                <h3>{product.title}</h3>
                <img src={product.image} width="180" height="200" />
                <div className="productinfowrapper">
                  <p>Reviews: {product.rating.count}</p>
                  <p>Rating: {product.rating.rate} ⭐</p>
                </div>
                <p>Price: ${product.price}</p>
                <div className="productshoppingwrapper">
                  <div className="quantitywrapper">
                    <button
                      className="quantitybutton"
                      onClick={() => changeQty(product.id, -1, true)}
                    >
                      -
                    </button>
                    <p>{quantities[product.id] || 0}</p>
                    <button
                      className="quantitybutton"
                      onClick={() => changeQty(product.id, 1, true)}
                    >
                      +
                    </button>
                  </div>
                  <div className="quantitywrapper">
                    <button className="addToCart" onClick={() => addToCart(product, quantities[product.id])}>Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading....</p>
        )}
      </div>
  );
};

export default Shop;
