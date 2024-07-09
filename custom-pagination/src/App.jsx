<<<<<<< HEAD
function App() {
  return <div>app</div>;
=======
import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    setProducts(data.products);
  };

  const handlePagination = () => {};
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="container">
        {products.length > 0 &&
          products.slice(0, 5).map((pro, i) => (
            <div key={pro.id} className="products">
              <img src={pro.thumbnail} alt={pro.title} />
              <span>{pro.title}</span>
            </div>
          ))}
      </div>
      <div className="buttons">
        <ul>
          <li onClick={() => handlePagination()}>◀</li>
          <li onClick={() => handlePagination()}>▶</li>
        </ul>
      </div>
    </>
  );
>>>>>>> 805d7cb0d49ec56fa542df94f98df9b3e84de3ae
}

export default App;
