import { useEffect, useState } from "react";

export const Pagination = () => {
  let [products, setProducts] = useState([]);
  let [page, Setpage] = useState(1);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    let response = await fetch("https://dummyjson.com/products?limit=100");
    let data = await response.json();
    if (data && data.products) {
      setProducts(data.products);
    }
    return console.log(data);
  };
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      return Setpage(selectedPage);
    }
  };
  return (
    <div>
      Pagination
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination__disabled"}
            onClick={() => {
              return selectPageHandler(page - 1);
            }}
          >
            ⬅️
          </span>
          {[...Array(products.length / 10)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => {
                  return selectPageHandler(i + 1);
                }}
                key={i}
              >
                {i+1 }
              </span>
            );
          })}
          <span
            className={page < products.length / 10 ? " " : "pagination__disabled"}
            onClick={() => {
              return selectPageHandler(page + 1);
            }}
          >
            ➡️
          </span>
        </div>
      )}
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((obj) => {
            return (
              <div className="products__single" key={obj.id}>
                <img src={obj.thumbnail} alt={obj.title} />
                <span>
                  {obj.id},{obj.title}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
