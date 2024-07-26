import { useState, useEffect } from "react";
import { Button, buttonVariants } from "./components/ui/button";
import { cn } from "./libs/utils";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products/?limit=100`);
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
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-3 place-items-center max-w-screen-lg mx-auto">
        {products.length > 0 &&
          products.slice((page - 1) * 10, page * 10).map((pro, i) => (
            <div
              key={pro.id}
              className="products w-full flex justify-center flex-col-reverse border border-pink-500 p-3"
            >
              <img src={pro.thumbnail} alt={pro.title} />
              <span className="text-center">{pro.title}</span>
            </div>
          ))}
      </div>
      <div className="w-full">
        <ul className="flex justify-center items-center gap-3">
          <Button
            className={cn(
              buttonVariants({ variant: "destructive", size: "lg" })
            )}
            onClick={() => handlePagination(page - 1)}
            // style={{ opacity: page === 1 ? "0" : "1" }}
          >
            <ArrowBigLeft />
          </Button>
          {/* {[...Array(totalPage)].map((_, i) => (
            <li
              key={i + 1}
              onClick={() => handlePagination(i + 1)}
              className={page === i + 1 ? "background" : ""}
            >
              {i + 1}
            </li>
          ))} */}
          <Button
            className={cn(
              buttonVariants({ variant: "destructive", size: "lg" })
            )}
            onClick={() => handlePagination(page + 1)}
            // style={{ opacity: page === totalPage ? "0" : "1" }}
          >
            <ArrowBigRight />
          </Button>
        </ul>
      </div>
    </>
  );
}

export default App;
