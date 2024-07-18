import { useState, useEffect } from "react";
function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/?limit=100&skip=${page * 10 - 10}`
    );
    const data = await res.json();
    setProducts(data.products);
    setTotalPage(data.total / 10);
  };

  const handlePagination = (selectPage) => {
    if (selectPage >= 1 && selectPage <= totalPage && selectPage !== page) {
      setPage(selectPage);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [page]);
  return (
    <>
      <div className="container">
        {products.length > 0 &&
          products.map((pro, i) => (
            <div key={pro.id} className="products">
              <img src={pro.thumbnail} alt={pro.title} />
              <span>{pro.title}</span>
            </div>
          ))}
      </div>
      <div className="buttons">
        <ul>
          <li
            onClick={() => handlePagination(page - 1)}
            style={{ opacity: page === 1 ? "0" : "1" }}
          >
            ◀
          </li>
          {[...Array(totalPage)].map((_, i) => (
            <li
              key={i + 1}
              onClick={() => handlePagination(i + 1)}
              className={page === i + 1 ? "background" : ""}
            >
              {i + 1}
            </li>
          ))}
          <li
            onClick={() => handlePagination(page + 1)}
            style={{ opacity: page === totalPage ? "0" : "1" }}
          >
            ▶
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
